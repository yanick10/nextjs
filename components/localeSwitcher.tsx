import { useRouter } from "next/router"

export function LocaleSwitcher() {
    const router = useRouter()
    return (
        <div className="relative group">
            <button className="flex space-x-2">{router.locale === 'en' ? (<img className="w-5 h-5" src="/images/800px-Flag_of_the_United_Kingdom.png" alt="Img En" />) : (<img src="/images/Drapeau-France.png" className="w-5 h-5" alt="Img Fr" />)}   {router.locale === "en" ? (
                <span className="font-medium">English</span>
            ) : (
                <span className="font-medium">Français</span>
            )}</button>
            <div className="absolute hidden origin-center group-hover:block">

                <button
                    className="flex w-full"
                    onClick={() =>
                        router.push(router.pathname, router.asPath, {
                            locale: "en",
                        })
                    }
                >
                    <img
                        src="/images/800px-Flag_of_the_United_Kingdom.png"
                        className="w-5 h-5 mr-2"
                        alt=""
                    />
                    English
                </button>
                <button
                    className="flex w-full"
                    onClick={() =>
                        router.push(router.pathname, router.asPath, {
                            locale: "fr",
                        })
                    }
                >
                    <img
                        src="/images/Drapeau-France.png"
                        className="w-5 h-5 mr-2"
                        alt=""
                    />
                    Francais
                </button>

            </div>
        </div>
    )
}