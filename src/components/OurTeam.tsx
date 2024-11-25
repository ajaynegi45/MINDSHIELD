import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

import Ajay from "@/assets/photo.jpeg";

export function OurTeam() {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Ajay Negi",
            designation: "Product Manager at TechFlow",
            src: Ajay,
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Yash Raj",
            designation: "CTO at InnovateSphere",
            src: Ajay,
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Harinee",
            designation: "Operations Director at CloudScale",
            src: Ajay,
        },
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "Sailaja Donga",
            designation: "Engineering Lead at DataPro",
            src: Ajay,
        }
    ];
    // @ts-expect-error
    return <AnimatedTestimonials testimonials={testimonials} />;
}
