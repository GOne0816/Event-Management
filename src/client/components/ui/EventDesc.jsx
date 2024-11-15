import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Textarea02() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-02">
        Event Description <span className="text-destructive">*</span>
      </Label>
      <Textarea id="textarea-02" placeholder="Write your event details here..." required />
    </div>
  );
}
