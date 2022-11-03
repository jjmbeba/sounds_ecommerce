import {createClient} from 'next-sanity'
import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient ({
    projectId:'neqn4s0t',
    dataset:'production',
    apiVersion:'2022-11-01',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
}
);

const builder = createImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)