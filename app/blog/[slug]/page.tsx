import Image from "next/image";
import Link from "next/link";

const singerDetails = {
  adele: {
    title: "Adele",
    content:
      "Adele Laurie Blue Adkins est une chanteuse et auteure-compositrice britannique, reconnue pour sa voix puissante et ses ballades émotionnelles. Elle a explosé avec son album '19', puis a consolidé son statut d’icône avec les albums '21', '25' et '30'. Adele a remporté de nombreux Grammy Awards et est connue pour ses chansons emblématiques comme 'Someone Like You', 'Hello' et 'Easy On Me'.",
    conceptImage: "/images/adele.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Adele",
  },
  theweeknd: {
    title: "The Weeknd",
    content:
      "The Weeknd, de son vrai nom Abel Makkonen Tesfaye, est un chanteur, auteur-compositeur et producteur canadien. Il s’est fait connaître grâce à ses mixtapes en ligne avant de sortir des albums à succès comme 'Beauty Behind the Madness', 'Starboy' et 'After Hours'. Il est célèbre pour sa voix en falsetto, ses clips cinématographiques, et ses tubes mondiaux tels que 'Blinding Lights', 'Can’t Feel My Face' et 'Save Your Tears'.",
    conceptImage: "/images/theweekend.jpg",
    wiki: "https://fr.wikipedia.org/wiki/The_Weeknd",
  },
  beyonce: {
    title: "Beyoncé",
    content:
      "Beyoncé Knowles-Carter est une chanteuse, danseuse et actrice américaine. Elle a débuté dans le groupe Destiny's Child avant de lancer une carrière solo phénoménale avec des albums tels que 'Dangerously in Love', 'Beyoncé', et 'Lemonade'. Reconnue pour sa puissance vocale, son charisme et son engagement féministe, elle est aussi une figure influente dans la mode et les causes sociales.",
    conceptImage: "/images/beyonce.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Beyoncé",
  },
  rihanna: {
    title: "Rihanna",
    content:
      "Robyn Rihanna Fenty est une chanteuse, actrice et entrepreneure originaire de la Barbade. Elle s’est imposée avec des titres comme 'Umbrella', 'Diamonds' et 'Work'. Outre la musique, elle a bâti un empire cosmétique avec sa marque Fenty Beauty, acclamée pour son inclusivité. Rihanna est également ambassadrice officielle de la culture et de la jeunesse de la Barbade.",
    conceptImage: "/images/rihanna.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Rihanna",
  },
  eminem: {
    title: "Eminem",
    content:
      "Marshall Bruce Mathers III, alias Eminem, est un rappeur, auteur-compositeur et producteur américain. Il est considéré comme l’un des plus grands rappeurs de tous les temps. Connu pour ses paroles provocantes et son flow rapide, il a marqué les années 2000 avec des albums comme 'The Marshall Mathers LP' et 'The Eminem Show'. Eminem a aussi remporté un Oscar pour sa chanson 'Lose Yourself' tirée du film '8 Mile'.",
    conceptImage: "/images/eminem.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Eminem",
  },
  drake: {
    title: "Drake",
    content:
      "Aubrey Drake Graham est un rappeur, chanteur et acteur canadien. Il s’est d’abord fait connaître dans la série 'Degrassi' avant de percer dans la musique avec 'Take Care', 'Nothing Was the Same' et 'Scorpion'. Il est célèbre pour ses hits introspectifs et ses morceaux à succès comme 'God’s Plan', 'Hotline Bling' et 'One Dance'. Drake est l’un des artistes les plus streamés au monde.",
    conceptImage: "/images/drake.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Drake_(rappeur)",
  },
};

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const data = singerDetails[params.slug as keyof typeof singerDetails];

  if (!data) {
    return (
      <div className="mt-10 text-center text-red-600 text-lg">
        Aucune donnée trouvée pour ce chanteur.
      </div>
    );
  }

  return (
    <div className="mt-8 px-4 sm:px-8 lg:px-20">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Blog - {data.title}
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={data.conceptImage}
        width={800}
        height={800}
        alt={`Image de ${data.title}`}
        className="mt-8 mx-auto w-full max-w-2xl rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
      />


      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert max-w-3xl mx-auto">
        <p>{data.content}</p>

        <p className="mt-6">
          👉{" "}
          <Link
            href={data.wiki}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            For more information, visit the Wikipedia page of {data.title}
          </Link>
        </p>
      </div>
    </div>
  );
}
