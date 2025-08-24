import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const events = [
    {
      date: "2024-09-15",
      time: "10:00 AM",
      title: "Open House & School Tour",
      description: "Join us for a comprehensive tour of our facilities and meet our dedicated staff. Perfect for families considering enrollment.",
      location: "Main Campus",
      attendees: "Families & Prospective Students",
      color: "bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"
    },
    {
      date: "2024-09-22",
      time: "2:00 PM",
      title: "Family Fun Day",
      description: "A day filled with games, activities, and community bonding. All families are welcome to join this celebration of our community.",
      location: "Outdoor Playground",
      attendees: "All Families",
      color: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30"
    },
    {
      date: "2024-10-05",
      time: "6:30 PM",
      title: "Parent Education Workshop",
      description: "Learn effective strategies for supporting your child's development at home. Led by our experienced therapists and educators.",
      location: "Conference Room",
      attendees: "Parents & Caregivers",
      color: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"
    },
    {
      date: "2024-10-12",
      time: "11:00 AM",
      title: "Sensory Awareness Day",
      description: "Experience our sensory-friendly environment and learn about accommodations that help children with sensory processing challenges.",
      location: "Sensory Room",
      attendees: "Families & Professionals",
      color: "bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="events" className="luxury-spacing bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20" aria-labelledby="events-title">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 id="events-title" className="section-title text-foreground mb-8 animate-fade-in">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our community events and discover how we can support your family's journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`${event.color} rounded-2xl p-8 shadow-luxury hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/80 dark:bg-black/80 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-medium text-foreground">
                      {formatDate(event.date)}
                    </p>
                    <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  RSVP
                </Button>
              </div>

              <h3 className="font-display font-medium text-xl text-foreground mb-4">
                {event.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{event.attendees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="min-w-[200px]">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;