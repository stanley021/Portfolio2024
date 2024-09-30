
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "./ui/MovingBorders";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Card, CardContent } from "@/components/ui/card"

import { skills } from "@/data";
const Skills = () =>{
    return(

    <div className="py-36 w-full p-20">
        
        <h1 className="heading">
        Tech<span className="text-purple"> Stack</span>
        </h1>
        
        <div className="w-full mt-20 grid lg:grid-cols-3 gap-10 grid-cols-1 ">
            <div className="col-span-3 flex justify-center items-center m-8 overflow-hidden">
                <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
                >
                <CarouselContent>
                    {skills.map((icon, index) => (
                      <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6 md:m-2">
                      <div className="p-1 flex justify-center items-center">
                      <Card className="w-40">
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                              <img src={icon} alt="icon" className="p-2 w-24" />
                          {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                          </CardContent>
                      </Card>
                      </div>
                    </CarouselItem>
                    ))}

                    
                </CarouselContent>
                <CarouselPrevious className="lg:-left-10 md:-left-10 absolute left-6" />
                <CarouselNext className="lg:-right-10 md:-right-10 absolute right-6" />
                </Carousel>
            </div>
            </div>

        </div>
      
      )
}

export default Skills;