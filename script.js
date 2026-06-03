// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('active');
        navLinks.classList.toggle('active', isOpen);
        document.body.classList.toggle('nav-open', isOpen);
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navLinks?.classList.remove('active');
        document.body.classList.remove('nav-open');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== OFF-PLAN PROPERTIES DATA ====================
const properties = [
    {
        "id": 1,
        "name": "Omya Residences",
        "status": "Off-Plan",
        "type": "Apartment, Studio",
        "featured": true,
        "location": "Wasl Gate, Dubai",
        "developer": "Pantheon Development",
        "period": "",
        "price": "AED 690,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/699027b8772de98f3ef710ee.webp",
        "image2": "",
        "image3": "",
        "beds": 2,
        "baths": 2,
        "sqft": 351.44,
        "description": "Omya Residences at Wasl Gate is the newest 15-storey residential address by the Pantheon Development available with premium class studios, 1 & 2-bedroom apartments. The modern residential project embodies the spirit of luxurious life in the city in one of the city main destination with strong investment potential. Considerably located in the larger Wasl Gate community, this is one-stop destination that offers a lifestyle of equilibrium with endless leisure for daily convenience. The façade is created to serve the needs of homeowners that appreciate location-specific lifestyle by developing a new realm of convenience and reliability in a rapidly developing urban-environment.",
        "amenities": "Service Elevators, Freehold, Jacuzzi, Sauna, Gym or Health Club, Security Staff, Balcony or Terrace, Barbeque Area, Kids Play Area",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#1"
    },
    {
        "id": 2,
        "name": "Sobha Sanctuary",
        "status": "Off-Plan",
        "type": "Townhouse, Villa, Apartment",
        "featured": true,
        "location": "Dubailand, Dubai",
        "developer": "Sobha Group",
        "period": "",
        "price": "AED 1,750,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/6994147ea9efde8813cf3654.jpg",
        "image2": "",
        "image3": "",
        "beds": 3,
        "baths": 2,
        "sqft": 2460,
        "description": "Sobha Sanctuary at Dubailand is the newest master planned community development by the leading Sobha Group, made available in luxury phases with premium villas, townhouses and residential towers. As a landmark in an ever-changing venue of luxury residence in the city of Dubai, it is projected as a green oasis, in which architecture, nature and elegant living will intertwine with utmost harmony. This master community is designed as a high-end living community covering 38 million square feet of land and is an extension of the tradition of accuracy, technical craftsmanship and classical design that was the hallmark of Sobha. The larger open spaces, winding crystal lagoons, groomed golf courses, and carefully planned residential neighbourhood gentle clusters characterize the project and ensure exclusivity, as well as tranquillity. At the first look, it can be distinguished as the place where the focus is on lifestyle, seclusion, and the ultimate price rather than on glowing fashion trends.",
        "amenities": "Balcony or Terrace, Security Staff, Swimming Pool, Barbeque Area, Freehold, Cafeteria or Canteen, Gym or Health Club, Lobby in Building",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#2"
    },
    {
        "id": 3,
        "name": "Binghatti Etherea",
        "status": "Off-Plan",
        "type": "Apartment, Studio",
        "featured": true,
        "location": "Al Barsha South 4, Dubai",
        "developer": "Binghatti",
        "period": "",
        "price": "AED 765,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/698f182d24813c7d6a3f7d24.webp",
        "image2": "",
        "image3": "",
        "beds": 2,
        "baths": 2,
        "sqft": 409.03,
        "description": "Binghatti Etherea at JVC is the newest high-rise 29-storey residential paradise by the Binghatti Developers emerging as comfortable silence with enhanced studios, 1 & 2-bedroom apartments. The development presents a sophisticated display of modernity in city life, in which architecture turns into a manifestation of harmony, rhythm, and an intrinsic approach to design. This residential façade is another indication of the signature philosophy of Binghatti, which is a combination of sculptural and regular functionality to form a kind of lifestyle configured in B+G+5P+22 residential floors, mech, plus rooftop floor that are all expressive. This is not a statement, but a complex, which exists in harmony with its environment without taking away, its unique architectural language. The vertical rhythm of the tower is softened by the contemporary detailing and responsive to the light facades, which establish a visual dialogue with the surrounding environment and still retain a unique identifiable identity.",
        "amenities": "Freehold, Balcony or Terrace, Service Elevators, Swimming Pool, Jacuzzi, Barbeque Area, Lawn or Garden, Kids Play Area, Security Staff, Lobby in Building",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#3"
    },
    {
        "id": 4,
        "name": "Azizi Jaddaf Beach Oasis",
        "status": "Off-Plan",
        "type": "Apartment, Studio",
        "featured": false,
        "location": "Al Jaddaf, Dubai",
        "developer": "Azizi",
        "period": "",
        "price": "AED 720,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/698f20c8fb408f3097c236f7.webp",
        "image2": "",
        "image3": "",
        "beds": 1,
        "baths": 2,
        "sqft": "On Request",
        "description": "Azizi Jaddaf Beach Oasis introduces a rare concept in Dubai’s residential landscape, developed by Azizi Developments lined with studios & 1-bedroom apartments and penthouses. The façade presents a resort-style living along the city living that is uncommon in the landscape. Conceptualized to provide a relaxed urban lifestyle with the appearance of a serene coastal setting, this is a development of landmark stature that redefines the routine living to be characterized by openness, light, and tranquillity. The focus of the project involves a crystal-clear artificial beach, which is one of the determining factors that predetermine the creation of the lifestyle oriented at leisure and visual perfection.",
        "amenities": "Lobby in Building, Sauna, Swimming Pool, Lawn or Garden, Jacuzzi, Cafeteria or Canteen, Security Staff, Service Elevators",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#4"
    },
    {
        "id": 5,
        "name": "The Central Uptown",
        "status": "Off-Plan",
        "type": "Apartment, Studio",
        "featured": true,
        "location": "Arjan, Dubai",
        "developer": "Aqua Developments",
        "period": "",
        "price": "AED 720,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/698f2506fb408f4991c3c841.webp",
        "image2": "",
        "image3": "",
        "beds": 2,
        "baths": 2,
        "sqft": 396,
        "description": "The Central Uptown at Arjan is the newest residential venture by the esteemed Aqua Developments lined with premium collection of studios, 1 and 2-bedroom apartments in Dubai. This is the next level landmark that emerges with style, scale and substance to redefine the modern living. Rising gracefully with its configured structure as basement + Ground + Podium and 28-storey residential address, this architectural work offers premium collection of 488 semi-furnished units designed to suit everyone who desired to have a gracefully elegant and expressive homes. Whether it’s the sleek exterior or the considerate interior designs, every single inch of the façade is carried good level of contemporary urban lifestyle.",
        "amenities": "Balcony or Terrace, Lobby in Building, Service Elevators, Security Staff, Swimming Pool, Sauna, Jacuzzi, Lawn or Garden, Barbeque Area, Freehold, Cafeteria or Canteen",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#5"
    },
    {
        "id": 6,
        "name": "Binghatti Skyflame",
        "status": "Off-Plan",
        "type": "Apartment, Studio",
        "featured": true,
        "location": "Majan, Dubai",
        "developer": "Binghatti",
        "period": "",
        "price": "AED 700,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/698f2db4c6490f597e38fe54.jpg",
        "image2": "",
        "image3": "",
        "beds": 2,
        "baths": 2,
        "sqft": 400,
        "description": "Binghatti Skyflame at Majan is the newest masterpiece, a prominent twin high-rise tower crafted by Binghatti Developers with exclusive studios, 1 & 2-bedroom apartments and royal suites. Created with such determination and sureness that it immediately grabs your eye, and is exclusive in manner for the selected few. This architectural work is introduced as twin-towers rising in the sky with 34-storey and 29-storey above ground, which transformed the meaning of living in the complex of sculpture and modernity. Designed with people who want to experience a living place that provides brio flame, inspired by the Binghatti tradition that has always been one of iconic designs, rhythmic facades, and architectural forms that stand out prominently in the Dubai skyline like burning embers. A first look at the tower makes it look as though it is in motion and full of energy, one that is ambitious, modern, and elevated effortlessly. Located in a strategic position in the Majan District in Dubai, the towers offer some of the most favourable locations that ensure easy reach to the major landmarks. The surrounding infrastructure also fosters easy communication with the business centres, shopping centre, and dining venues as well as entertainment areas that make day to day activities productive and pleasurable. The location has been well crafted to provide both the city life and home comfort. Commuting to work or have time to have fun, residents feel the benefit of residing in the area that will not leave them out of touch, at the expense of a peaceful and convenient place.",
        "amenities": "Service Elevators, Security Staff, Swimming Pool, Sauna, Jacuzzi, Barbeque Area, Kids Play Area, Freehold, Balcony or Terrace",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#6"
    },
    {
        "id": 7,
        "name": "Park Ridge",
        "status": "For Sale",
        "type": "Apartment, Townhouse",
        "featured": true,
        "location": "Dubai Hills Estate, Dubai",
        "developer": "Emaar Properties",
        "period": "",
        "price": "AED 1,075,888",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/699030b0772de97bf8f7c78b.jpg",
        "image2": "",
        "image3": "",
        "beds": 3,
        "baths": 2,
        "sqft": 1997.68,
        "description": "Park Ridge situated in Dubai Hills Estate by Emaar Properties offers 1, 2, and 3 bedroom apartments. It is the perfect example of a community-focused way of life since it seamlessly combines urban and natural settings. With Dubai Hills Park just outside your door and a promenade lined with cafes and restaurants, From the community, residents may quickly and easily reach the airport and other emirates through the Etihad Rail and Dubai Metro lines, which run along the estate's borders. Terraced and podium residences at Park Ridge, with views of the park and the lively street, are well equipped to accommodate singles, couples, and big families. The contemporary developments have courtyards with Zen and meditation gardens, infinity edge swimming pools, children's play spaces, and jogging tracks to encourage a healthy way of life.",
        "amenities": "Balcony or Terrace, Lobby in Building, Service Elevators, Security Staff, Swimming Pool, Sauna, Jacuzzi, Freehold, Kids Play Area, Lawn or Garden, Barbeque Area",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#7"
    },
    {
        "id": 8,
        "name": "Sea Cliff",
        "status": "Off-Plan",
        "type": "Apartment",
        "featured": false,
        "location": "Dubai Islands, Dubai",
        "developer": "Imtiaz Developments",
        "period": "",
        "price": "AED 1,995,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/699411d03b3cc9982d11ab75.webp",
        "image2": "",
        "image3": "",
        "beds": 4,
        "baths": 3,
        "sqft": 4063,
        "description": "Seacliff at Dubai Islands is the latest residential transformation by the leading Imtiaz Developments, lined with waterfront apartments within a serene environment. Located in the breathtaking scenery of the Islands, the property is an up-market waterfront residential project that glorifies the openness, light, and seashore beauty. The façade is projected as a serene vacation point where there is the combination of the contemporary building with the calming beat of an island lifestyle. Designed for those who favour less conspicuous luxury and a lifestyle determined by the sea vistas, deliberate spatial planning, and somewhat personal and spacious atmosphere.",
        "amenities": "Balcony or Terrace, Service Elevators, Cafeteria or Canteen, Barbeque Area, Jacuzzi, Sauna, Swimming Pool, Security Staff, Lobby in Building",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#8"
    },
    {
        "id": 9,
        "name": "Equiterra Townhouse 2",
        "status": "Off-Plan",
        "type": "Townhouse",
        "featured": true,
        "location": "The Grand Polo Club and Resort, Dubai",
        "developer": "Emaar Properties",
        "period": "",
        "price": "AED 3,300,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/699417a854da040cc672bc18.webp",
        "image2": "",
        "image3": "",
        "beds": 3,
        "baths": 2,
        "sqft": 2175,
        "description": "Equiterra 2 at Grand Polo Club & Resort is the latest modern residential suburban advancement by the leading Emaar Properties that rises with premium class 3 & 4 bedroom townhouses in Dubai. At the center of the most sophisticated environment in Dubai lies this development, a masterpiece that completely disrupted the traditions of enjoying the luxurious living conditions in the community. This is not just one of the residential destination sites, this is a masterpiece created to pay tribute to the fined lifestyles, harmony in the communities, and a sense of connection that can last forever. Every single cog of this innovative enclave is laced with the air of elegance, nature, and uniqueness to make a speech that beats with luxury and serenity as well.",
        "amenities": "Balcony or Terrace, Cafeteria or Canteen, Jacuzzi, Sauna, Swimming Pool, Gym or Health Club, Service Elevators, Lobby in Building, Security Staff, Barbeque Area",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#9"
    },
    {
        "id": 10,
        "name": "Damac Riverside Townhouses & Villas",
        "status": "Off-Plan",
        "type": "Villa, Townhouse",
        "featured": true,
        "location": "Riverside Views, Dubai",
        "developer": "Damac Properties",
        "period": "",
        "price": "AED 1,990,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/699418c1a9efde1853cfc983.jpg",
        "image2": "",
        "image3": "",
        "beds": 4,
        "baths": 3,
        "sqft": 2297.34,
        "description": "Dubai’s first exceptional nature-inspired development of Damac Riverside is boasting 4 & 5-bedroom townhouses in DIP 2 by Damac Properties. Life by the harmonious nature and get settled in the thoughtfully planned community. Here, the health & wellness-based melodious lifestyle finely blends with the urban pace of the city. Taste the exciting indulgence at the various outdoors activities that cover fitness, recreational, culinary and many playful sources. It is an extraordinary river-inspired community, offering a wide array of low-rise residences with contemporary and aesthetic architectural style. Each abode resonates with the lush landscape and fosters a commitment to the tranquil way of living. You will be welcome by the carefully crafted interiors with neutral and warm wooden tones with modern flooring, tiling, fittings, fixtures and stunning windows that unlock views of the verdant scenarios.",
        "amenities": "Freehold, Kids Play Area, Swimming Pool, Sauna, Security Staff, Lobby in Building, Balcony or Terrace, Service Elevators",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#10"
    },
    {
        "id": 11,
        "name": "Chelsea Residences Phase 2",
        "status": "Off-Plan",
        "type": "Apartment",
        "featured": true,
        "location": "Dubai Maritime City, Dubai",
        "developer": "Damac Properties",
        "period": "",
        "price": "AED 2,320,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69941b1d6bac24fb7af2eccd.jpg",
        "image2": "",
        "image3": "",
        "beds": 2,
        "baths": 2,
        "sqft": 2045,
        "description": "Chelsea Residences 2 by Damac Properties is the second edition of its renowned football-themed branded architectural towers at Dubai Maritime City with 1 to 3-bedroom apartments. The buildings at this location express architectural dominance through powerful architectural visions which combine high standards of precision with luxury living and exclusive prestige. This exceptional development blends the history and legacy of Chelsea FC with Dubai's ambitious real estate approach to create a lifestyle that links urban living with superior standards. The Phase 02 ascends with the same authority as Phase 01 while adding three buildings known as A, B, and C to establish a total of 03 towers in each phase, which redefine waterfront lifestyle through merger of excellence with ambition and athletic refinement.",
        "amenities": "Lobby in Building, Service Elevators, Security Staff, Swimming Pool, Sauna, Kids Play Area, Freehold",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#11"
    },
    {
        "id": 12,
        "name": "Damac Islands",
        "status": "Off-Plan",
        "type": "Villa",
        "featured": true,
        "location": "Damac Islands, Dubai",
        "developer": "Damac Properties",
        "period": "",
        "price": "AED 2,250,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69941e73a9efde9406d07fbf.webp",
        "image2": "",
        "image3": "",
        "beds": 6,
        "baths": 4,
        "sqft": 4440,
        "description": "Introducing the island-inspired living at the master community of Damac Islands in Dubai, exuding world-class low-rise affluent waterfront homes. Launching the one-of-its-kind property, where each residence will surpass all the limits and set latest definition to the refined homes. Incorporating invigorating welcome to the melodious, relaxed and dynamic interiors, here every home reflects the natural beauty of the locale including flowing waterways and the blooming nature. Adorned with high-end lifestyle amenities and additional sites, your neighbourhood is a paradise, fostering modern way of living.",
        "amenities": "Cafeteria or Canteen, Security Staff, Service Elevators, Lobby in Building, Balcony or Terrace, Gym or Health Club, Swimming Pool, Barbeque Area, Kids Play Area, Freehold",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#12"
    },
    {
        "id": 13,
        "name": "Maldives at Damac Islands",
        "status": "Off-Plan",
        "type": "Villa",
        "featured": true,
        "location": "Damac Islands, Dubai",
        "developer": "Damac Properties",
        "period": "",
        "price": "AED 2,407,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69941f7a3b3cc9152413620d.jpg",
        "image2": "",
        "image3": "",
        "beds": 6,
        "baths": 3,
        "sqft": 10671,
        "description": "Maldives at Damac Islands in Dubailand is the very first water-inspired residential address by Damac Properties that offers the magnificent 7-bedroom mansions. This project combines a vision in every majestic residence seamlessly blends within the nature’s soothing setting of tropical greenery and the crystal-clear spectacular wide-spread lagoon with beach. Presenting the city’s extra-ordinary approach by the city’s leading and innovative brand in luxury real estate that will provide the truly dedicated island-inspired lifestyle right at your doorstep. Within the city’s aloof and energetic pulse of the city, this community holds the spirit that is highly anticipated to be the most desirable paradise for residents, investors and visitors. Explore a heaven that echoes the soul of an island-living where one will find the indulgences that will uplift the sense of well-being, relaxation and excitement. Every spectacular home unit covers a state-of-the-art gym, steam & sauna, personal cinema, pool, elevator and driver’s room for the unmatched convenience. However, the open-design of interiors with large expensive windows unveil the ever-green scenery of the landscape or the flowing lagoon.",
        "amenities": "Balcony or Terrace, Lobby in Building, Security Staff, Gym or Health Club, Jacuzzi, Barbeque Area, Cafeteria or Canteen, Freehold, Swimming Pool",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#13"
    },
    {
        "id": 14,
        "name": "Vida Residences Hillside",
        "status": "Off-Plan",
        "type": "Townhouse, Apartment",
        "featured": false,
        "location": "Dubai Hills Estate, Dubai",
        "developer": "Emaar Properties",
        "period": "",
        "price": "AED 1,820,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/699420af6bac241933f3a15a.webp",
        "image2": "",
        "image3": "",
        "beds": 3,
        "baths": 2,
        "sqft": 2616,
        "description": "The Vida Residences Hillside is an excellent property in the green heart of Dubai Hills Estate by Emaar Properties with 1 to 3-bedroom apartments & townhouses. This spectacular multi-storey project epitomises an upscale, urban, and stress-free sophisticated lifestyle close to nature. Under the flagship of a globally known hotel, resort, & residence brand of Vida, this is another housing benchmark crafted by UAE’s top-leading developer. Your future home is nestled in the prestigious community, which is sprawling over 27 thousand acres of mixed-used area with the iconic landmarks of a golf course, a grand park, open green spaces, and multiple offerings for sustainable, all-rounded, and holistic communal living.",
        "amenities": "Lobby in Building, Swimming Pool, Jacuzzi, Kids Play Area, Cafeteria or Canteen",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#14"
    },
    {
        "id": 15,
        "name": "ATÉLIS",
        "status": "Off-Plan",
        "type": "Penthouse, Apartment",
        "featured": false,
        "location": "Dubai Design District (D3), Dubai",
        "developer": "Meraas",
        "period": "",
        "price": "AED 2,100,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/699422af6bac249295f3de7d.jpg",
        "image2": "",
        "image3": "",
        "beds": 4,
        "baths": 3,
        "sqft": 3367,
        "description": "The Atelis by Meraas is the newest residential advancement at Dubai Design District (D3), a grand symbol of contemporary 1 to 4-bedroom apartments, penthouses, & sky villas. Exuding the timeless essence of modernity and simply captivating elegance, this vertical address overlooks the sweeping Dubai Canal and the vibrant metropolitan cityscape with a backdrop of the inspiring Ras Al Khor Wildlife Sanctuary. Composed of minimalist approaches, sleek lines, meticulously carved finishes, and a striking glass-made facade, it is a masterpiece infrastructure with landscaped podiums, world-class amenities, and bespoke homes. The vibrant and continuously thriving locality of this home promises a better future for lifestyle & investment close to the prime attractions of the city.",
        "amenities": "Balcony or Terrace, Lobby in Building, Service Elevators, Security Staff, Gym or Health Club, Swimming Pool, Sauna, Jacuzzi, Barbeque Area",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#15"
    },
    {
        "id": 16,
        "name": "Meraas Bluewaters Bay",
        "status": "Off-Plan",
        "type": "Penthouse",
        "featured": true,
        "location": "Bluewaters Island, Dubai",
        "developer": "Meraas",
        "period": "",
        "price": "AED 2,850,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/699423efa9efde0321d133a8.jpg",
        "image2": "",
        "image3": "",
        "beds": 5,
        "baths": 3,
        "sqft": 6907.84,
        "description": "Bluewaters Bay by Meraas is a new destination at Bluewaters Island that presents a range of 1 to 4 bedroom waterfront apartments and penthouses at Dubai. Discover a life beyond your wildest dreams, complete with all of the individualized features and unmatched advantages you could ever want in one convenient location. When you live in one of these upscale residences, life takes on a whole new level of excitement and adventure. The magnificent seafront apartments offer residents the best possible quality of life, with amenities that extend to every nook of the building. Feel the excitement of all the pleasure that this location has to offer its users in addition to the high-quality services and amenities that are designed to make life more enjoyable for you and are thoughtfully put together to provide you access to a world of conveniences.",
        "amenities": "Balcony or Terrace, Lobby in Building, Service Elevators, Security Staff, Kids Play Area, Cafeteria or Canteen, Gym or Health Club",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#16"
    },
    {
        "id": 17,
        "name": "Maybach",
        "status": "Off-Plan",
        "type": "Studio",
        "featured": true,
        "location": "Meydan, Dubai",
        "developer": "Binghatti",
        "period": "",
        "price": "AED 1300000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69942b4d54da043c987533a9.webp",
        "image2": "",
        "image3": "",
        "beds": 1,
        "baths": 1,
        "sqft": "",
        "description": "Maybach at Mercedes-Benz Places is an exclusive residential address located in Meydan, developed by Binghatti. The development comprises 31 floors and 831 thoughtfully designed residences, offering studio, 1, 2, and 3-bedroom apartments within a master-planned urban environment focused on movement, balance, and refined living. Crafted to reflect elevated lifestyle expectations, the project offers access to retail boulevards, parks, mobility hubs, and dedicated wellness and sports zones. Maybach by Binghatti Dubai is positioned to benefit from long-term capital appreciation, driven by its prime Meydan location, branded identity, and comprehensive lifestyle infrastructure.",
        "amenities": "Swimming Pool, Security Staff, Lawn or Garden, Service Elevators, Barbeque Area, Kids Play Area",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#17"
    },
    {
        "id": 18,
        "name": "Valencia",
        "status": "Off-Plan",
        "type": "Apartment, Studio",
        "featured": true,
        "location": "Damac Lagoons, Dubai",
        "developer": "Damac Properties",
        "period": "",
        "price": "AED 725,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69942c2b54da04bb17754bf9.webp",
        "image2": "",
        "image3": "",
        "beds": 1,
        "baths": 1,
        "sqft": 328,
        "description": "Valencia at Damac Lagoons is the latest and 16-storey traditional inspired tower planned by the Damac Properties lined with premium selection of studios, 1 and 2-bedroom apartments. The façade is being inspired by the Southern Europe architecture balanced with the Lagoon inspired community lifestyle, representing an awe-inspiring environment to get alive once again. Here the poetic representation of waterfront living, where architecture, lifestyle and investment vision are merged into one compelling story. This new residential destination is thee new polished Mediterranean chapter in the most esteemed master community. At the first glance, the façade addresses those who want more than just a home, providing day to day escape in desired form of peaceful waters, slow paced resort-style vibe, and classic luxury within it all together.",
        "amenities": "Lobby in Building, Security Staff, Swimming Pool, Lawn or Garden, Gym or Health Club, Freehold, Cafeteria or Canteen, Sauna",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#18"
    },
    {
        "id": 19,
        "name": "Evelyn on The Park",
        "status": "Off-Plan",
        "type": "Apartment",
        "featured": false,
        "location": "Town Square Dubai, Dubai",
        "developer": "NSHAMA",
        "period": "",
        "price": "AED 1,069,888",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69943ee86bac242a67f7f501.webp",
        "image2": "",
        "image3": "",
        "beds": 2,
        "baths": 2,
        "sqft": 609,
        "description": "Evelyn on the Park at Town Square Dubai is the newest adventurous residential series by one and only Nshama lined with exclusive designed 1, 2 and 3-bedroom apartments in Dubai. This is a low-rise architectural façade that addresses the silent reinvention of life for enjoying every day state. The well branded residential development is carefully placed in the ever changing backdrop of Town Square West Park lined with extensive attraction. Urban city landscapes have been planned with an aim of celebrating the symmetricity, openness and community living in order to offer an environment, where the serene life coexist together with modern day comforts. Even at the very first glance, the façade evokes the idea of lifestyle based on the nature, human relationships and subtle elegance.",
        "amenities": "Lobby in Building, Swimming Pool, Freehold, Jacuzzi, Sauna, Service Elevators",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#19"
    },
    {
        "id": 20,
        "name": "Belmont Residences",
        "status": "Off-Plan",
        "type": "Apartment, Douplex apartment",
        "featured": true,
        "location": "Town Square Dubai, Dubai",
        "developer": "NSHAMA",
        "period": "",
        "price": "AED 1,200,888",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/699440326bac24c77bf82f3a.jpg",
        "image2": "",
        "image3": "",
        "beds": 1,
        "baths": 2,
        "sqft": 655,
        "description": "Belmont at Town Square Dubai is the newest residential series by the leading Nshama, made available with selected apartments that are modern design. The imminent façade will be a low-rise 16-storey that features exclusive class environment within the nature to feel the sense of community at ease. Emerging as an elegant residential development, the city within and rises at the heart of bustling town square as a prime example of a refined lifestyle defined by carefully design considerations, open spaces and amenities. At the first sight, the façade features a peaceful city sleekness that incorporates modern geometrical elevation with the use of warm materials colouring that signifies the changing residential outlook of Dubai. All the aspects of the building are designed in a modern way to look not only inspirational but also down-to-earth so that it will be a continuation of everyday life.",
        "amenities": "Service Elevators, Swimming Pool, Jacuzzi, Balcony or Terrace, Kids Play Area, Cafeteria or Canteen, Security Staff",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#20"
    },
    {
        "id": 21,
        "name": "Rove Home",
        "status": "Off-Plan",
        "type": "Apartment",
        "featured": true,
        "location": "Meydan City, Dubai",
        "developer": "Alain Properties",
        "period": "",
        "price": "AED 1,617,777",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/6994434554da04435078f964.webp",
        "image2": "",
        "image3": "",
        "beds": 1,
        "baths": 2,
        "sqft": 586,
        "description": "Rove Home at Meydan Horizon is the newest edition to the Dubai’s skylines developed by ALAIN Properties lined with limited edition branded residences, overlooking the crystal lagoon. This is the next iconic address to redefine the modern waterfront lifestyle stands in a city that boasts of innovation and structural visuals in measuring up to Meydan Horizon. This future residential masterpiece will be a flawless combination of urban liveliness and peaceful lagoon existence, presented with the steps of OCTA Properties. Designed around the glistening backdrop of the Dubai skyline, these homes make people feel to be closer to the vision of awakening next to crystalline swimmable lagoons and be in communication with all major destinations in the city. It is not a house, it is a way of life created to those who want to experience life full of vitality, motivated by water, architecture and neighbourhood.",
        "amenities": "Lobby in Building, Balcony or Terrace, Service Elevators, Freehold, Jacuzzi, Sauna, Swimming Pool, Security Staff",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#21"
    },
    {
        "id": 22,
        "name": "Burj Azizi at Sheikh Zayed Road",
        "status": "Off-Plan",
        "type": "Apartment, Penthouse",
        "featured": true,
        "location": "Sheikh Zayed Road, Dubai",
        "developer": "Azizi Developments",
        "period": "",
        "price": "AED 6,426,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/699444913a96e5245d067c59.png",
        "image2": "",
        "image3": "",
        "beds": 2,
        "baths": 2,
        "sqft": 786,
        "description": "Azizi Developments is ready to exceed the limits with Burj Azizi, the second tallest tower of Dubai at Sheikh Zayed Road with apartments, penthouses, a hotel. This is the most sought-after multi-purpose development that will be the center of the attraction worldwide. It is an exceptional jewel that stands as a world-famous architectural masterpiece. Witness the pristine lifestyle where everything is at the fingertips of the residents. The spectacular observation deck is the enthralling summit that unveils the scenic views of the Arabian Gulf and the city.",
        "amenities": "Balcony or Terrace, Security Staff, Swimming Pool, Jacuzzi, Sauna, Freehold",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#22"
    },
    {
        "id": 23,
        "name": "Binghatti Cullinan",
        "status": "Off-Plan",
        "type": "Apartment",
        "featured": false,
        "location": "Al Jaddaf, Dubai",
        "developer": "Binghatti Developers",
        "period": "",
        "price": "AED 819,999",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69944581a9efde6ed1d62a14.jpg",
        "image2": "",
        "image3": "",
        "beds": 1,
        "baths": 2,
        "sqft": 2113,
        "description": "Binghatti Cullinan at Al Jaddaf is the new launch of a stunning development by Binghatti Developers lined with studios, 1, 2 & 3 bedroom apartments and retails in Dubai. Rising in the skylines as configured in B+G+4P+14 residential floors and rooftop to transform the urban lifestyle, where modern architecture collides with the rhythm of Dubai lifestyle. Such a landmark development is elegantly planned to incorporate elegance and functionality which is a residential experience unmatched in the city. With a daring exterior, curvy lines and proper incorporation of natural light, this is a new standard of luxury living properties with intelligent shopping zones. The entire detail, from towering figure to the designed amenities relate to the lifestyle of sophistication, exclusivity and comfort, and so this would be the perfect choice to stay both the sophisticated homeowners and the prudent investors to indulge themselves in the future of Dubai.",
        "amenities": "Balcony or Terrace, Lobby in Building, Service Elevators, Cafeteria or Canteen, Swimming Pool, Gym or Health Club, Security Staff",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#23"
    },
    {
        "id": 24,
        "name": "Voxa Residences",
        "status": "Off-Plan",
        "type": "Apartment, Studio",
        "featured": false,
        "location": "Jumeirah Village Triangle, Dubai",
        "developer": "Pantheon Development",
        "period": "",
        "price": "AED 639,900",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69944acad614c9f60ae8c08e.webp",
        "image2": "",
        "image3": "",
        "beds": 1,
        "baths": 2,
        "sqft": 387.5,
        "description": "Voxa Pantheon at Jumeirah Village Triangle (JVT) emerges as next architectural masterpiece, a project by Pantheon Development with premium class studios, 1 & 2-bedroom apartments and penthouses. The elegant design high-rise tower comes with basement, ground, plus 4 podium level and 29 luxury floors of residences, which merges elegance with lifestyle and innovation to define Dubai’s architectural landscape. The façade provides both living space and lifestyle advantages that fulfill the requirements of wealthy homebuyers to find their home and their best investment alongside luxury sophistication in a single destination.",
        "amenities": "Balcony or Terrace, Gym or Health Club, Swimming Pool, Freehold, Security Staff, Service Elevators, Lobby in Building",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#24"
    },
    {
        "id": 25,
        "name": "Neem Park Five",
        "status": "Off-Plan",
        "type": "Apartment",
        "featured": true,
        "location": "Dubai Production City, Dubai",
        "developer": "Deyaar",
        "period": "",
        "price": "AED 1,004,656",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69944b85d614c976c1e8d899.jpg",
        "image2": "",
        "image3": "",
        "beds": 1,
        "baths": 2,
        "sqft": 430,
        "description": "The latest residential complex of Neem at Park Five by Deyaar is in the world-class suburban & business region of Dubai Production City with stylish homes. Being a proud part of the massive development, this complex is all set to redefine the standards of communal living. Characterised by the modern homes enclosed by the world-class more than 70 amenities, naturally lush surroundings, parks, a mosque, and retail sources with a backdrop of two dazzling lakes and the thriving contemporary tapestry of Sports City. This complex denotes the stunning geometric styles of the facade with biophilic elements and modern & exquisite aspects, while the glass & premium marble materials of earthy and soft hues create an alluring visual on the exterior.",
        "amenities": "Balcony or Terrace, Lobby in Building, Freehold, Swimming Pool, Sauna, Security Staff, Kids Play Area",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#25"
    },
    {
        "id": 26,
        "name": "Azizi Farishta 2",
        "status": "Off-Plan",
        "type": "Studio",
        "featured": true,
        "location": "Al Jaddaf, Dubai",
        "developer": "Azizi Developments",
        "period": "",
        "price": "AED 759,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69944c433a96e58df507b5f5.webp",
        "image2": "",
        "image3": "",
        "beds": 1,
        "baths": 2,
        "sqft": 324,
        "description": "Azizi Farishta 2 at Al Jaddaf is the newest residential emblem by the Industry leading Azizi Developments lined with supreme studios, 1-bedroom apartments and 4-bedroom penthouses in Dubai. This is a masterpiece in the center of the modern Dubai world, the name itself is the embodiment of the luxury, accuracy, and eternal lives. It is a construction that will suit the needs of people who want to experience the optimal blend between elegance and tranquillity in every circle, curved roof, and line. The facade goes beyond a home, its intriguing front droit to its well-thought-out interiors is a statement of a life which is meant to evoke. Development expresses an air of exclusivity and superiority providing its residents with a prestigious address where contemporary fashion is united with a blend of culture.",
        "amenities": "Lobby in Building, Balcony or Terrace, Barbeque Area, Freehold, Kids Play Area",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#26"
    },
    {
        "id": 27,
        "name": "Azizi Tower 1",
        "status": "Off-Plan",
        "type": "office space",
        "featured": true,
        "location": "Al Jaddaf, Dubai",
        "developer": "Azizi Developments",
        "period": "",
        "price": "AED 1,630,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69944dc66bac242c76fa4d83.webp",
        "image2": "",
        "image3": "",
        "beds": "",
        "baths": "",
        "sqft": 375.88,
        "description": "Azizi Tower 1 at Al Jaddaf is the latest commercial benchmark of Dubai with flexible and customizable private office & retail spaces developed by Azizi Developments. This contemporary construction symbolises the utmost productivity and efficiency in the iconic and central hub of the city. Every detail from the inside out is engineered with precision to provide sustainable and effortless business growth. Surrounded by open and verdant landscapes, this complex is at the gateway of a major highway with metro connectivity that ensures a fluent access to the various landmarks, residential, leisure, and entertainment spots of the neighbouring districts.",
        "amenities": "Freehold, Lobby in Building, Service Elevators, Security Staff, Balcony or Terrace, Kids Play Area",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#27"
    },
    {
        "id": 28,
        "name": "Azizi David",
        "status": "Off-Plan",
        "type": "Apartment, Penthouse",
        "featured": true,
        "location": "Al Jaddaf, Dubai",
        "developer": "Azizi Developments",
        "period": "",
        "price": "AED 764,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69944e953a96e5c3ad080972.jpg",
        "image2": "",
        "image3": "",
        "beds": 1,
        "baths": 2,
        "sqft": 326.26,
        "description": "Azizi David at Al Jaddaf is the newest residential gem by Azizi Development, enhancing the beauty of Dubai Culture Village with studios & 1-bedroom apartments. This mid-rise milestone is the latest gateway to celebrate the engaging and elevated family-focused lifestyle in the heart of the Emirates. Rising with contemporary and luxury infrastructure style, this complex embodies exquisite homes that reflect the cosmopolitan charm of the lively environment. Discover a locality rich in vibrant offerings such as boutique hotels, waterfront residences, a museum, parks, creek-front promenade, stadiums, metro & highway connectivity. Made to inspire, this address is a quality-driven elegance enclave, a refined creation of sophisticated craftsmanship. The building’s captivating façade exudes understated luxury in the blend of striking glass and smooth geometric curves, while the soft tones resonate with the evolving skyline of the urban landscape, grounded in nature next to the flowing creek. The entrance boasts an ambience of simple opulence, where higher ceilings, polished stone finishes, bespoke lighting, seating zone, premium elements, and overall aesthetic setting.",
        "amenities": "Cafeteria or Canteen, Lobby in Building, Balcony or Terrace, Jacuzzi, Security Staff, Kids Play Area, Sauna",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#28"
    },
    {
        "id": 29,
        "name": "Soto Grande",
        "status": "Off-Plan",
        "type": "Apartment, Penthouse",
        "featured": true,
        "location": "Al Hamra Village, Ras Al Khaimah",
        "developer": "Ellington Properties",
        "period": "",
        "price": "AED 900,000",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69944f9754da041a397ad513.jpg",
        "image2": "",
        "image3": "",
        "beds": 1,
        "baths": 2,
        "sqft": 421,
        "description": "Soto Grande at Al Hamra of Ras Al Khaimah is the escalating residential architecture by Ellington Properties that beautifies meaningful lifestyles in lavish homes. Imagined by the design-led developer of the Emirates, this sophisticated wonder is an embellishment of the vibrant and flourishing coastal region of this waterfront district. Elevated from the ground, every level of this residence has been planned to witness the harmonious vistas of the beaches, greenery, Gulf horizon, and the evolving surroundings of modern infrastructure. Everything is in place, from cosy bedrooms to the shared amenities at the podium and on other levels of this building, is curated attentively to represent an all-inclusive environment for tasteful tenants.",
        "amenities": "Balcony or Terrace, Lobby in Building, Jacuzzi, Cafeteria or Canteen, Kids Play Area",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#29"
    },
    {
        "id": 30,
        "name": "The Hillgate",
        "status": "Off-Plan",
        "type": "Apartment, Douplex apartment",
        "featured": true,
        "location": "Dubai Silicon Oasis, Dubai",
        "developer": "Ellington Properties",
        "period": "",
        "price": "AED 1,279,828",
        "image": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/699450a1d614c95acfe9a763.jpg",
        "image2": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/698f20c8fb408f3097c236f7.webp",
        "image3": "https://storage.googleapis.com/msgsndr/IlZJiijRtzAqCBMiyeFY/media/69944581a9efde6ed1d62a14.jpg",
        "beds": 1,
        "baths": 2,
        "sqft": 416,
        "description": "The Hillgate at Dubai Silicon Oasis is the premium residential monument by Ellington Properties with innovative and urban collection of studios to 3-bedroom apartments and duplexes. The multi-storey twin tower façade rising 13 and 16-storey proposed to combines stylish abodes with inspiring spacious living spaces, smart technologies, durable & high-end quality materials and a world-class series of amazing integrated amenities. This magnificent rising jewel exudes the cutting-edge detailing on the entire facade that has been composed on the basis of futuristic approach of crafting architectures with contemporary sophistication that blends within the sustainable and thriving economic zone of the district. The moment the towers come into the sight, the edges of the towers suggests the notion of balance and the intention, establishing the atmosphere of the community in which beauty is not just ornamental, but rather highly practical.",
        "amenities": "Balcony or Terrace, Lobby in Building, Security Staff, Sauna, Lawn or Garden, Barbeque Area",
        "agentName": "Inv Why Group Investment",
        "agentPhone": "00971 4 265 6513",
        "url": "#30"
    }
];

// ==================== RENDER PROPERTIES ====================
const offplanGrid = document.getElementById('offplanGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const propertyPagination = document.getElementById('propertyPagination');
const propertiesPerPage = 8;
const whatsappNumber = '971504983085';
let currentPropertyPage = 1;
let currentPropertyFilter = 'all';

function getFilteredProperties(filter = currentPropertyFilter) {
    return properties;
}

function getWhatsAppLink(prop) {
    const message = `Hello INV WHY Real Estate, I want more details about ${prop.name}. Location: ${prop.location}. Price: ${prop.price}. Ref: ${prop.url || prop.id}.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function formatFeature(value, suffix = '') {
    if (value === null || value === undefined || value === '') return 'On request';
    if (typeof value === 'number') return `${Number.isInteger(value) ? value : value.toLocaleString()}${suffix}`;
    return `${value}${suffix && value !== 'On request' ? suffix : ''}`;
}

function propertySummary(prop) {
    const text = prop.description || `${prop.type || 'Property'} in ${prop.location || 'Dubai'}`;
    return text.length > 112 ? `${text.slice(0, 112).trim()}...` : text;
}

function renderPagination(filtered) {
    if (!propertyPagination) return;

    const totalPages = Math.ceil(filtered.length / propertiesPerPage);
    propertyPagination.innerHTML = '';

    if (totalPages <= 1) return;

    for (let page = 1; page <= totalPages; page++) {
        const button = document.createElement('button');
        button.className = `page-btn${page === currentPropertyPage ? ' active' : ''}`;
        button.type = 'button';
        button.textContent = page;
        button.setAttribute('aria-label', `Go to property page ${page}`);
        button.addEventListener('click', () => {
            currentPropertyPage = page;
            renderProperties(currentPropertyFilter);
            document.getElementById('offplan')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        propertyPagination.appendChild(button);
    }
}

function renderProperties(filter = 'all') {
    if (!offplanGrid) return;

    currentPropertyFilter = filter;
    offplanGrid.innerHTML = '';
    const filtered = getFilteredProperties(filter);
    const totalPages = Math.max(1, Math.ceil(filtered.length / propertiesPerPage));
    if (currentPropertyPage > totalPages) currentPropertyPage = totalPages;

    const startIndex = (currentPropertyPage - 1) * propertiesPerPage;
    const paginated = filtered.slice(startIndex, startIndex + propertiesPerPage);

    paginated.forEach((prop, index) => {
        const card = document.createElement('div');
        card.className = 'property-card lux-reveal';
        card.style.opacity = '0';
        card.style.transform = 'translate3d(0, 36px, 0) scale(0.985)';
        card.style.filter = 'blur(8px)';
        card.style.transition = 'opacity 0.75s cubic-bezier(.16,1,.3,1), transform 0.75s cubic-bezier(.16,1,.3,1), filter 0.75s cubic-bezier(.16,1,.3,1)';

        card.innerHTML = `
            <div class="property-image">
                <img src="${prop.image}" alt="${prop.name}" loading="lazy">
                <span class="property-badge">${prop.status || 'For Sale'}</span>
                <span class="property-location">${prop.location || 'Dubai'}</span>
            </div>
            <div class="property-info">
                <div class="property-developer">${prop.developer || 'INV Why Real Estate'}</div>
                <h3>${prop.name}</h3>
                <div class="property-price">${prop.price || 'Price on request'}</div>
                <p class="property-card-description">${propertySummary(prop)}</p>
                <div class="property-meta">
                    <span>${formatFeature(prop.beds)} Beds</span>
                    <span>${formatFeature(prop.baths)} Baths</span>
                    <span>${formatFeature(prop.sqft, ' sqft')}</span>
                </div>
                <div class="property-completion">${prop.type || 'Property'}${prop.period ? ` / ${prop.period}` : ''}</div>
                <button class="property-details-btn" type="button" data-property-id="${prop.id}">More Details</button>
            </div>
        `;

        offplanGrid.appendChild(card);

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translate3d(0, 0, 0) scale(1)';
            card.style.filter = 'blur(0)';
            card.classList.add('in-view');
        }, index * 80);
    });

    renderPagination(filtered);
}

if (offplanGrid) {
    renderProperties();

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPropertyPage = 1;
            renderProperties(btn.getAttribute('data-filter'));
        });
    });
}


// ==================== PROPERTY DETAILS MODAL ====================
function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function modalValue(value, fallback = 'On request') {
    if (value === null || value === undefined || value === '') return fallback;
    return escapeHtml(value);
}

function amenityChips(value) {
    if (!value) return '<p class="property-modal-empty">Amenities available on request.</p>';
    const items = String(value)
        .split(',')
        .map(item => item.trim())
        .filter(Boolean)
        .slice(0, 18);

    if (!items.length) return '<p class="property-modal-empty">Amenities available on request.</p>';
    return items.map(item => `<span>${escapeHtml(item)}</span>`).join('');
}

function ensurePropertyModal() {
    let modal = document.getElementById('propertyDetailsModal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'propertyDetailsModal';
    modal.className = 'property-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
        <div class="property-modal-backdrop" data-modal-close></div>
        <div class="property-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="propertyModalTitle">
            <button class="property-modal-close" type="button" aria-label="Close property details" data-modal-close>×</button>
            <div class="property-modal-body" id="propertyModalBody"></div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function closePropertyModal() {
    const modal = document.getElementById('propertyDetailsModal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

function openPropertyModal(propertyId) {
    const prop = properties.find(item => String(item.id) === String(propertyId));
    if (!prop) return;

    const modal = ensurePropertyModal();
    const body = modal.querySelector('#propertyModalBody');
    const image = prop.image || 'logo.png';
    const metaRows = [
        ['Location', prop.location],
        ['Developer', prop.developer],
        ['Type', prop.type],
        ['Status', prop.status],
        ['Beds', formatFeature(prop.beds)],
        ['Baths', formatFeature(prop.baths)],
        ['Size', formatFeature(prop.sqft, ' sqft')]
    ];

    body.innerHTML = `
        <div class="property-modal-image-wrap">
            <img src="${escapeHtml(image)}" alt="${escapeHtml(prop.name)}" class="property-modal-image">
            <div class="property-modal-badges">
                <span>${modalValue(prop.status, 'Property')}</span>
                <span>${modalValue(prop.location, 'Dubai')}</span>
            </div>
        </div>
        <div class="property-modal-content">
            <div class="property-modal-kicker">Property Details</div>
            <h2 id="propertyModalTitle">${modalValue(prop.name, 'Property')}</h2>
            <div class="property-modal-price">${modalValue(prop.price, 'Price on request')}</div>
            <div class="property-modal-specs">
                ${metaRows.map(([label, value]) => `
                    <div>
                        <span>${escapeHtml(label)}</span>
                        <strong>${modalValue(value)}</strong>
                    </div>
                `).join('')}
            </div>
            <div class="property-modal-section">
                <h3>Description</h3>
                <p>${modalValue(prop.description, 'Full description available on request.')}</p>
            </div>
            <div class="property-modal-section">
                <h3>Amenities</h3>
                <div class="property-modal-amenities">${amenityChips(prop.amenities)}</div>
            </div>
            <div class="property-modal-contact">
                <div>
                    <span>Advisor</span>
                    <strong>${modalValue(prop.agentName, 'INV Why Real Estate')}</strong>
                    <small>${modalValue(prop.agentPhone, '+971 50 498 3085')}</small>
                </div>
                <a class="property-modal-whatsapp" href="${getWhatsAppLink(prop)}" target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.property-modal-close')?.focus();
}

document.addEventListener('click', event => {
    const detailsButton = event.target.closest('.property-details-btn[data-property-id]');
    if (detailsButton) {
        event.preventDefault();
        openPropertyModal(detailsButton.dataset.propertyId);
        return;
    }

    if (event.target.closest('[data-modal-close]')) {
        closePropertyModal();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closePropertyModal();
});


// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -12% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function prepareScrollAnimations() {
    const animatedElements = document.querySelectorAll('.reveal-item, .home-reveal, .journey-card, .journey-copy, .journey-panel, .journey-step, .lux-reveal, .glass-card, .property-card, .contact-detail, .policy-box, .value-card, .process-card, .section-header, .offplan-grid, .property-pagination, .curtain-reveal-card, .company-profile-section, .cta, .cta .container, .about-clean-intro, .about-clean-copy, .about-clean-image, .about-simple-list > div, .about-profile-clean, .clean-contact-card, .clean-contact-action, .clean-contact-note, .minimal-contact-content > *, .about-fresh-card, .about-fresh-profile, .about-fresh-point');

    animatedElements.forEach((el, index) => {
        const customDelay = Number(el.dataset.revealDelay || NaN);
        const delay = Number.isFinite(customDelay) ? customDelay : (index % 4) * 70;
        el.style.transitionDelay = `${delay}ms`;
        observer.observe(el);
    });
}

window.addEventListener('load', prepareScrollAnimations);
prepareScrollAnimations();

// Modern mobile menu helpers
(function () {
    const menuButton = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-links');
    if (!menuButton || !menu) return;

    menuButton.setAttribute('aria-label', 'Open navigation menu');
    menuButton.setAttribute('aria-expanded', menu.classList.contains('active') ? 'true' : 'false');

    function closeMenu() {
        menuButton.classList.remove('active');
        menu.classList.remove('active');
        document.body.classList.remove('nav-open');
        menuButton.setAttribute('aria-expanded', 'false');
    }

    function syncState() {
        const isOpen = menu.classList.contains('active');
        menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    menuButton.addEventListener('click', syncState);

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', event => {
        if (!document.body.classList.contains('nav-open')) return;
        if (event.target.closest('.navbar') || event.target.closest('.nav-links')) return;
        closeMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });
})();


// ==================== MAIN PAGE HERO MOTION ====================
const homeHero = document.querySelector('.hero');
if (homeHero) {
    window.addEventListener('scroll', () => {
        const offset = Math.min(window.scrollY * 0.12, 42);
        homeHero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
    }, { passive: true });
}


// ==================== NEWS TICKER CONTROLS ====================
(function initNewsTicker() {
    const strips = document.querySelectorAll('[data-news-strip]');
    strips.forEach(strip => {
        const track = strip.querySelector('[data-news-track]');
        if (!track || track.dataset.ready === 'true') return;

        const originalItems = Array.from(track.children);
        originalItems.forEach(item => track.appendChild(item.cloneNode(true)));
        track.dataset.ready = 'true';

        const resetAnimation = () => {
            track.style.animation = 'none';
            track.offsetHeight;
            track.style.animation = '';
        };

        strip.querySelector('[data-news-next]')?.addEventListener('click', () => {
            if (track.firstElementChild) track.appendChild(track.firstElementChild);
            resetAnimation();
        });

        strip.querySelector('[data-news-prev]')?.addEventListener('click', () => {
            if (track.lastElementChild) track.insertBefore(track.lastElementChild, track.firstElementChild);
            resetAnimation();
        });

        strip.querySelector('[data-news-toggle]')?.addEventListener('click', event => {
            const isPaused = strip.classList.toggle('is-paused');
            event.currentTarget.textContent = isPaused ? '▶' : 'Ⅱ';
            event.currentTarget.setAttribute('aria-label', isPaused ? 'Play news' : 'Pause news');
        });
    });
})();

// Register PWA service worker when supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').catch(() => {});
    });
}






// ==================== DARK PREMIUM SPLASH LOADER ====================
(() => {
    const splash = document.getElementById('appSplash');
    if (!splash) return;

    const start = performance.now();
    const minDisplayTime = 900;
    let hidden = false;

    const hideSplash = () => {
        if (hidden) return;
        hidden = true;

        const elapsed = performance.now() - start;
        const delay = Math.max(0, minDisplayTime - elapsed);

        window.setTimeout(() => {
            splash.classList.add('hide');
            window.setTimeout(() => splash.remove(), 850);
        }, delay);
    };

    window.addEventListener('load', hideSplash, { once: true });
    window.setTimeout(hideSplash, 2600);
})();
// ==================== END DARK PREMIUM SPLASH LOADER ====================
