import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import creativeActivities from "@/assets/creative-activities.jpg";
import physicalTherapy from "@/assets/physical-therapy.jpg";
import medicalCare from "@/assets/medical-care.jpg";
import studentAchievements from "@/assets/student-achievements.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaItems = [
    {
      type: "image",
      src: creativeActivities,
      title: "Creative Activities",
      description: "Students engaging in art and music therapy sessions"
    },
    {
      type: "image",
      src: physicalTherapy,
      title: "Physical Therapy",
      description: "Building strength and coordination through fun activities"
    },
    {
      type: "image",
      src: medicalCare,
      title: "Medical Care",
      description: "Professional healthcare support in a caring environment"
    },
    {
      type: "image",
      src: studentAchievements,
      title: "Student Achievements",
      description: "Celebrating milestones and personal victories"
    },
    {
      type: "video",
      src: "/marse-intro.mp4",
      title: "Marse Introduction",
      description: "Get to know our mission and approach"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <section id="gallery" className="luxury-spacing bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20" aria-labelledby="gallery-title">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 id="gallery-title" className="section-title text-foreground mb-8 animate-fade-in">
            Life at Marse
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the joy, growth, and achievements that happen every day in our community
          </p>
        </div>

        {/* Main Gallery Display */}
        <div className="relative bg-card rounded-2xl overflow-hidden shadow-premium mb-8 animate-scale-in">
          <div className="aspect-video relative">
            {mediaItems[currentIndex].type === "image" ? (
              <img
                src={mediaItems[currentIndex].src}
                alt={mediaItems[currentIndex].title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative w-full h-full bg-black">
                <video
                  src={mediaItems[currentIndex].src}
                  className="w-full h-full object-cover"
                  controls
                  poster="/placeholder.svg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Play className="w-16 h-16 text-white opacity-80" />
                </div>
              </div>
            )}
            
            {/* Navigation Arrows */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={prevSlide}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={nextSlide}
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Caption */}
          <div className="p-6 bg-card">
            <h3 className="font-display font-medium text-foreground mb-2">
              {mediaItems[currentIndex].title}
            </h3>
            <p className="text-muted-foreground">
              {mediaItems[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-3">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                currentIndex === index 
                  ? "border-primary shadow-lg" 
                  : "border-border hover:border-primary/50"
              }`}
              aria-label={`View ${item.title}`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;