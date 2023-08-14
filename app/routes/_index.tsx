import type {V2_MetaFunction} from "@remix-run/node";
import {Button} from "@nextui-org/button";
import {AppDescriptionCard} from "@components/app-description-card";
import {AppImageCard} from "@components/app-image-card";

export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    return (
        <div className="h-screen w-screen flex flex-col gap-8 justify-center items-center">
            <h1 className="text-3xl font-bold dark:text-white text-gray-800 text-center">
                Hello world!
            </h1>

            <Button color={'primary'}>
                Button
            </Button>

            <AppDescriptionCard/>

            <AppImageCard/>
        </div>
    );
}
