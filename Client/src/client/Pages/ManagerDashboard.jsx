import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/auth-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Mail, User, MapPin, Edit, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8000/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUserData(data.msg);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to load dashboard data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  const handleEditEvent = async (eventId) => {
    try {
      navigate(`/edit-event/${eventId}`);
    } catch (error) {
      console.error('Error editing event:', error);
      toast.error('Failed to edit event');
    }
  };

  const handleDeleteEvent = async (eventId) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;

    try {
      const response = await fetch(`http://localhost:8000/event/${eventId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setUserData(prev => ({
          ...prev,
          eventsCreated: prev.eventsCreated.filter(event => event._id !== eventId)
        }));
        toast.success('Event deleted successfully');
      } else {
        throw new Error('Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error('Failed to delete event');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="events">My Events</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>View and manage your profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <User className="h-5 w-5 text-gray-500" />
                <span className="font-medium">{userData?.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-gray-500" />
                <span>{userData?.email}</span>
              </div>
              <div className="flex items-center space-x-4">
                <CalendarDays className="h-5 w-5 text-gray-500" />
                <span>Events Created: {userData?.eventsCreated?.length || 0}</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>My Events</CardTitle>
              <CardDescription>Manage your created events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {userData?.eventsCreated?.map((event) => (
                  <Card key={event._id} className="overflow-hidden">
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{event.eventName}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center space-x-2">
                          <CalendarDays className="h-4 w-4" />
                          <span>{format(new Date(event.eventDate), 'PPP')}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.eventPlace}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {event.eventDescription}
                      </p>
                      <div className="flex justify-end space-x-2 mt-4">
                        <button
                          onClick={() => handleEditEvent(event._id)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(event._id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManagerDashboard;