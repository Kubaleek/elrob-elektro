import { Offers } from '@/data/offers';
import type { MetadataRoute } from "next";

const url = (path: string) => {
    const appUrl = process.env.NEXT_PUBLIC_URL;

    if(!appUrl){
        return "";
    }

    return `${appUrl.replace(/\/$/, "")}${path}`;
}

export default function sitemap() : MetadataRoute.Sitemap {
    return [
        {
            url: url("/"),
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...Offers.map((offer) => ({
            url: url(`${offer.href}`),
            lastModified: new Date(),
            priority: 0.8,
        })),
    ]
}