import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const singers = [
    {
      title: "Adele",
      smallDescription:
        "Known for her powerful vocals and heartfelt ballads. Famous albums include '25' and '30'.",
      slug: "adele",
      image: "/images/adele.jpg",
    },
    {
      title: "The Weeknd",
      smallDescription:
        "Canadian artist blending R&B, pop, and electronic vibes. Known for 'Blinding Lights'.",
      slug: "theweeknd",
      image: "/images/theweekend.jpg",
    },
    {
      title: "Beyonce",
      smallDescription:
        "Queen Bey is a global icon, known for her vocals, performances, and empowerment anthems.",
      slug: "beyonce",
      image: "/images/beyonce.jpg",
    },
    {
      title: "Rihanna",
      smallDescription:
        "Barbadian singer, businesswoman, and fashion icon with countless chart-toppers.",
      slug: "rihanna",
      image: "/images/rihanna.jpg",
    },
    {
      title: "Eminem",
      smallDescription:
        "Legendary rapper known for his lyrical prowess and storytelling. Albums include 'The Eminem Show'.",
      slug: "eminem",
      image: "/images/eminem.jpg",
    },
    {
      title: "Drake",
      smallDescription:
        "Canadian rapper and singer who redefined hip-hop with emotional and melodic tracks.",
      slug: "drake",
      image: "/images/drake.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {singers.map((singer, idx) => (
          <Card
            key={idx}
            className="flex flex-col h-[400px] rounded-xl overflow-hidden shadow-md"
          >
            <div className="relative w-full h-[200px]">
              <Image
                src={singer.image}
                alt={singer.title}
                fill
                className="object-cover object-center"
              />
            </div>

            <CardContent className="flex flex-col justify-between flex-grow p-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2">
                  {singer.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {singer.smallDescription}
                </p>
              </div>
              <Button
                asChild
                className="w-full bg-gray-900 text-gray-100 shadow-md hover:bg-gray-900 hover:text-white hover:shadow-lg transition-all duration-300 mt-4"
              >
                <Link href={`/blog/${singer.slug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button asChild variant="outline">
          <Link href="/blog">See More</Link>
        </Button>
      </div>
    </>
  );
}
