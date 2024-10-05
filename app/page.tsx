"use client";
import * as React from 'react';
import Button from '@mui/joy/Button';

interface Partner {
  image_name: string;
  partner_name: string;
  url: string;
}

export default function PopupFestLanding() {
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
    <div className="h-full bg-black">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-60" style={{ backgroundImage: "url('/bg/eden2.jpg')" }} />
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg/edenvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <style jsx global>{`
          @font-face {
            font-family: 'Neue Machina Ultrabold';
            src: url('/fonts/NeueMachina-Ultrabold.woff2') format('woff2');
            font-weight: 800;
            font-style: normal;
          }
          @font-face {
            font-family: 'Neue Machina Plain Light';
            src: url('/fonts/NeueMachina-Light.woff2') format('woff2');
            font-weight: 300;
            font-style: normal;
          }
          body {
            font-family: 'Neue Machina Plain Light', sans-serif;
          }
        `}</style>
      
        <header className="text-center pt-[30vh] pb-[1vh] px-4 text-white text-shadow-lg">
          <h1 className="animate-fade-in-drop-down text-8xl md:text-8xl mb-4 font-neue-machina-ultrabold">POPUP FEST</h1>
          <p className="animate-fade-in text-4xl md:text-4xl mb-6 font-neue-machina-plain-light">A Celebration for Pop-up Villages</p>
          <p className="animate-fade-in text-3xl md:text-3xl font-neue-machina-plain-light">Chiang Mai, Thailand, Nov 7-10</p>
        </header>


        <section className="mb-12">
          <div className="max-w-[70vw] mx-auto pt-[10vh] pb-[5vh]">
              {/* <h2 className="text-2xl font-semibold text-center mb-6 text-black font-neue-machina-ultrabold">Partners</h2> */}
              <div className="grid grid-cols-1 md:grid-cols-10 gap-4 justify-items-center">
                {partners.map((partner, index) => (
                    <Button
                      key={index}
                      variant="solid"
                      className="p-0 w-14 h-14 flex items-center justify-center reset-button"
                      onClick={() => window.open(partner.url, '_blank')}
                      sx={{
                        borderRadius: '30%',
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
                        className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
                      />
                    </Button>
                  ))}
              </div>
            </div>
          </section>

        <main className="container mx-auto px-4">
          <section className="flex justify-center space-x-4 mb-8 mb-[10vh]">
            <Button size="lg" className="text-white bg-gradient-to-r from-purple-400 to-pink-300 hover:bg-purple-200  hover:from-purple-200 hover:to-pink-200 font-neue-machina-plain-light">
              <a href="https://lu.ma/popupfest" target="_blank" rel="noopener noreferrer">
                Get Tickets
              </a>
            </Button>
            <Button size="lg" className="text-white bg-gradient-to-r from-pink-300 to-red-400 hover:from-purple-200 hover:to-pink-200 font-neue-machina-plain-light">
              <a href="https://t.me/+N3Ek_fJVqNJiYTQx" target="_blank" rel="noopener noreferrer">
                Join Telegram
              </a>
            </Button>
          </section>
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

        </main>

        {/* <footer className="text-white px-4 mt-auto">
          <div className="pt-10 container mx-auto flex justify-between items-center text-black font-neue-machina-plain-light">
            <p>&copy; 2023 Popup Fest. All rights reserved.</p>
          </div>
        </footer> */}
      </div>
    </div>
  )
}