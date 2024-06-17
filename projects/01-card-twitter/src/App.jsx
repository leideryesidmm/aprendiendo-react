import { TwitterFollowCard } from "./TwitterFollowCard";

export function App(){
    const formatUserName=(userName)=>`@${userName}`
    return(
        <section className="tw-sectionCards">
        <TwitterFollowCard formatUserName={formatUserName} username='leideryesidmm' name='Leider Yesid Martinez Mandon'/>
        <TwitterFollowCard formatUserName={formatUserName} username='UserRandom1' name='Usuario Random de GitHub'/>
        </section>
    )
}