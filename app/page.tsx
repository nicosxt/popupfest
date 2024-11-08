"use client";
import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { Users, Sparkles, MapPin, Music, Palette } from 'lucide-react';

interface Partner {
  image_name: string;
  partner_name: string;
  url: string;
}

export default function PopUpFestLanding() {
  const [partners, setPartners] = React.useState<Partner[]>([]);
  React.useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('/partner_data.csv');
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onload = (e) => {
          const text = e.target?.result as string;
          const lines = text.split('\n');
          const headers = lines[0].split(',');
          const parsedPartners = lines.slice(1).map(line => {
            const values = line.split(',');
            return headers.reduce((obj, header, index) => {
              obj[header.trim() as keyof Partner] = values[index].trim();
              return obj;
            }, {} as Partner);
          });
          setPartners(parsedPartners);
        };

        reader.readAsText(blob);
      } catch (error) {
        console.error('Error fetching partner data:', error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className="h-full bg-gradient-to-r from-purple-400 to-blue-300">
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Title Section */}
        <div className="background">
          <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center text-center px-4 text-white text-shadow-lg mx-auto pt-[15vh]">
              <h1 className="animate-fade-in-drop-down text-5xl sm:text-6xl md:text-8xl mb-[5vh] font-neue-machina-ultrabold tracking-[0.1rem] sm:tracking-[8px]">PopUp&nbsp;Fest</h1>
              <p className="animate-fade-in text-xl sm:text-2xl md:text-4xl font-neue-machina-regular pb-3 mt-[3vh]">Chiang Mai, Thailand | Nov 8-9</p>
              <p className="animate-fade-in text-lg sm:text-xl md:text-2xl font-neue-machina-plain-light">A co-created celebration of innovation, culture, and community</p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-x-4 mb-8 mb-[3vh] mt-[5vh]">
              <Button size="lg" className="m-[2vh] sm:w-auto text-white bg-gradient-to-r from-purple-400 to-pink-300 hover:bg-purple-200  hover:from-purple-200 hover:to-pink-200 font-neue-machina-plain-light">
                  <a href="https://lu.ma/w8tm6xj3" target="_blank" rel="noopener noreferrer">
                  Event Details
                  </a>
              </Button>
              <Button size="lg" className="m-[2vh] sm:w-auto text-white bg-gradient-to-r from-purple-400 to-pink-300 hover:bg-purple-200  hover:from-purple-200 hover:to-pink-200 font-neue-machina-plain-light">
                  <a href="https://lu.ma/w8tm6xj3" target="_blank" rel="noopener noreferrer">
                  Register
                  </a>
              </Button>
              <Button size="lg" className="m-[2vh] sm:w-auto text-white bg-gradient-to-r from-pink-300 to-red-400 hover:from-purple-200 hover:to-pink-200 font-neue-machina-plain-light">
                <a href="https://t.me/+OQShdF0tsV9iMGIx" target="_blank" rel="noopener noreferrer">
                  Join Telegram
                </a>
              </Button>
            </div>

            {/* Partners Section */}
            <section className="pb-[2vh]">
              <div className="max-w-[70vw] sm:max-w-[70vw] mx-auto sm:pt-0 md:pt-[10vh] pb-[5vh]">
                  <div className="flex flex-wrap justify-center sm:max-w-[70vw] grid grid-cols-4 md:grid-cols-8 gap-[3vw] md:gap-[2vw]">
                    {partners.map((partner, index) => (
                        <Button
                          key={index}
                          variant="solid"
                          className="p-0 md:w-14 md:h-14 sm:w-10 sm:h-10 flex items-center justify-center reset-button"
                          onClick={() => window.open(partner.url, '_blank')}
                          sx={{
                            borderRadius: '20%',
                            paddingInline: '0',
                            paddingBlock: '0',
                            transition: 'transform 0.25s ease-in-out',
                            '&:hover': {
                              transform: 'translateY(-10px) scale(1.1) rotate(10deg)',
                            },
                          }}
                        >
                          <img
                            src={`images/${partner.image_name}`}
                            alt={`${partner.partner_name} Logo`}
                            className="max-w-full max-h-full object-contain shadow-lg"
                          />
                        </Button>
                      ))}
                  </div>
                </div>
              </section>
          </div>
        </div>

  {/* 
          <section className="mb-12">
            <div className="aspect-video w-full max-w-3xl mx-auto">
              <iframe
                src="https://lu.ma/embed-checkout/evt-KzVLfJxEkVMZJZR"
                width="100%"
                height="100%"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </section> */}

        {/* About Section */}
      <section className="min-h-[60vh] py-20 px-4 bg-gradient-to-r from-purple-400 to-blue-300">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl font-bold mb-8">About PopUp Fest</h2>
          <p className="text-lg mb-8">
            PopUp Fest is a celebration of the month-long convergence of global innovators, founders, and technologists. 
            This four-day event brings together diverse communities from 12+ popup villages in Chiang Mai, showcasing 
            cross-village collaborations, project demonstrations, art, music, culture, and local cultural integration.
          </p>
          <p className="text-lg mb-8">
            Join us as we bridge East and West, blending intellectual discourse, technological innovation, and culture fusion
             to demonstrate the power of collaborative communities in shaping the future.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="min-h-[70vh] py-20 px-4 bg-white bg-gradient-to-r from-purple-200 to-blue-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Speakers & Panels", description: "Thought-provoking discussions with industry leaders" },
              { icon: Sparkles, title: "Project Showcases", description: "Innovative demos from popup village participants" },
              { icon: MapPin, title: "Local Integration", description: "Experience the rich culture of Chiang Mai" },
              { icon: Music, title: "Music", description: "Live performances and DJ sets" },
              { icon: Palette, title: "Art Installations", description: "Immersive artwork from global creators" },
              { icon: Users, title: "Networking", description: "Connect with 500+ innovators and creators" },
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-100 to-purple-100 transition-transform duration-300 hover:rotate-3">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-black-300" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="min-h-[70vh] py-20 px-4 bg-gradient-to-r from-purple-200 to-green-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-[5vh]">The Venue</h2>
          <p className="text-lg mb-[5vh]">
            Set against the stunning backdrop of Chiang Mai&apos;s mountains, <a href="https://4seas.io/" target="_blank" rel="noopener noreferrer"><u>4seas Mountainview</u></a> provides the perfect setting 
            for PopUp Fest. This picturesque venue offers a blend of natural beauty and modern amenities, creating an 
            inspiring environment for innovation and collaboration.
          </p>
          <a href="https://4seas.io/" target="_blank" rel="noopener noreferrer">
            <img
              src="/bg/4seas.jpg"
              alt="4seas Mountainview venue"
              className="w-full max-w-[90%] mx-auto rounded-lg shadow-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
            />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[70vh] py-20 px-4 bg-gradient-to-r from-yellow-200 to-green-200 text-black flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Be Part of PopUp Fest 2024</h2>
          <p className="text-xl mb-8">
            Don&apos;t miss this unique opportunity to connect, innovate, and celebrate with a global community of creators and visionaries.
          </p>
          <Button size="lg" className="text-white bg-gradient-to-r from-pink-300 to-red-400 hover:from-purple-200 hover:to-pink-200 font-neue-machina-plain-light">
              <a href="https://t.me/+baOBBkXENQM0MmIx" target="_blank" rel="noopener noreferrer">
                Join Us
              </a>
            </Button>
        </div>
      </section>

        {/* <footer className="text-white px-4 mt-auto">
          <div className="pt-10 container mx-auto flex justify-between items-center text-black font-neue-machina-plain-light">
            <p>&copy; 2023 PopUp Fest. All rights reserved.</p>
          </div>
        </footer> */}
      </div>
    </div>
  )
}
