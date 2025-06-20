const LatestReleases = () => {
  const releases = [
    {
      id: 1,
      cover:
        "https://cdn.poehali.dev/files/4dddc490-c197-42e9-b143-492d496e2e71.jpg",
      link: "https://music.yandex.ru/album/36234169/track/138216241?utm_source=web&utm_medium=copy_link",
    },
    {
      id: 2,
      cover:
        "https://cdn.poehali.dev/files/c44818ee-a2f5-4e44-b213-379551c63910.jpg",
      link: "https://music.yandex.ru/album/32756782?utm_source=web&utm_medium=copy_link",
    },
    {
      id: 3,
      cover:
        "https://cdn.poehali.dev/files/0fb4c253-9952-4220-823c-6a669422cc5f.jpg",
      link: "https://music.yandex.ru/album/32756782?utm_source=web&utm_medium=copy_link",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-montserrat text-white mb-4">
            Последние релизы
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Свежие треки и альбомы, которые покоряют чарты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {releases.map((release) => (
            <a
              key={release.id}
              href={release.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <img
                src={release.cover}
                alt="Release cover"
                className="w-full aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestReleases;
