import {makeAutoObservable} from "mobx";

export default class TourStore {
    constructor() {
        this._tours = [
            // {
            //     "id": 1,
            //     "title": "Vibrant Dominicana Vacation",
            //     "country": "Dominicana",
            //     "type": "air",
            //     "description": "This country is famous for its beaches that Columbus himself admired centuries ago, medieval buildings and original rum.\nYou should not miss Santo Domingo - the Dominican capital. One of the well known Dominican resorts is Punta Cana.",
            //     "img": "dominicanaPreview.jpg",
            //     "nights": null,
            //     "startDate": "2021-06-12",
            //     "endDate": "2021-06-22",
            //     "cost": 110,
            //     "activities": [
            //         "Humpback Whale Watching 70 $",
            //         "Jeep Safari 4x4 Punta Cana 150 $",
            //         "Bay of the Eagles 90 $",
            //         "Beach Sightseeing Point 35 $"
            //     ],
            //     "createdAt": "2021-03-16T08:51:45.852Z",
            //     "updatedAt": "2021-03-16T08:51:45.852Z"
            // },
            // {
            //     "id": 2,
            //     "title": "Weekend in Berling",
            //     "country": "Germany",
            //     "type": "bus",
            //     "description": "Country of football, best cars, great beer. Simple and delicious cuisine, world-famous pedantry and German quality, driving rock music, delightful museums, ideal roads and noisy festivals.",
            //     "img": "berlinPreview.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "cost": 35,
            //     "activities": [
            //         "Sachsenhausen Memorial Walking Tour 10 $",
            //         "1-Hour City Tour by Boat with Guaranteed Seating 15 $"
            //     ],
            //     "createdAt": "2021-03-16T14:03:33.375Z",
            //     "updatedAt": "2021-03-16T14:03:33.375Z"
            // },
            // {
            //     "id": 3,
            //     "title": "Vatican Tours",
            //     "country": "Italy",
            //     "type": "bus",
            //     "description": "Benvenuto! An Italy tour is the best way to experience your next vacation to Italy. Whether you want to trace history in Rome, taste wines in Tuscany, shop in Milan, drive the scenic Amalfi Coast, or explore the canals of Venice.",
            //     "img": "vaticanPreview.jpg",
            //     "nights": null,
            //     "startDate": "",
            //     "endDate": "",
            //     "cost": 20,
            //     "activities": [
            //         "Colosseum & Ancient Rome Tour with Roman Forum & Palatine Hill 40 $",
            //         "Full-Day Combo: Complete Vatican Museums, Sistine Chapel & Colosseum 56 $",
            //         "Pompeii & Mt. Vesuvius Volcano Day Trip from Rome 39 $"
            //     ],
            //     "createdAt": "2021-03-16T14:13:15.842Z",
            //     "updatedAt": "2021-03-16T14:13:15.842Z"
            // },
            // {
            //     "id": 4,
            //     "title": "Observe Utrecht",
            //     "country": "Netherlands",
            //     "type": "bus",
            //     "description": "Utrecht is famous for The Dom Tower, a historic bell tower dating back to the 14th century. Also, the city is famous for The Treaty of Utrecht, one of the first significant international peace negotiations at the end of the 18th century.",
            //     "img": "utrechtPreview.jpg",
            //     "nights": null,
            //     "startDate": "",
            //     "endDate": "",
            //     "cost": 40,
            //     "activities": [
            //         "Sightseeing Utrecht 10 $",
            //         "Schuttevaer Boat Cruise 26 $",
            //         "Dom Tower 13 $",
            //         "Orchid Farm 32 $"
            //     ],
            //     "createdAt": "2021-03-16T14:20:19.588Z",
            //     "updatedAt": "2021-03-16T14:20:19.588Z"
            // },
            // {
            //     "id": 5,
            //     "title": "Lofoten Fjords",
            //     "country": "Norway",
            //     "type": "railway",
            //     "description": "Lofoten is a mecca for hiking, climbing, fishing, kayaking, skiing, Arctic surfing (in the summer AND winter), and cycling. You can also go horseback riding under the northern lights in Lofoten! Or the midnight sun, if you're visiting in the summer.",
            //     "img": "lofotenPreview.jpg",
            //     "nights": null,
            //     "startDate": "",
            //     "endDate": "",
            //     "cost": 50,
            //     "activities": [
            //         "Lofoten Panoramic Tour 76 $",
            //         "Hiking in Lofoten 80 $",
            //         "Dom Tower 13 $",
            //         "Observing the Aurora Borealis 100 $"
            //     ],
            //     "createdAt": "2021-03-16T15:00:38.176Z",
            //     "updatedAt": "2021-03-16T15:00:38.176Z"
            // },
            

        ]

        this._accommodation = [
            // {
            //     "id": 1,
            //     "type": "resort",
            //     "stars": 5,
            //     "title": "Majestic Mirage Punta Cana",
            //     "address": "Playa - Bavaro, Punta Cana, Bavaro, 12345 Punta Cana",
            //     "description": "Featuring free WiFi and a seasonal outdoor pool, Majestic Mirage Punta Cana offers accommodation in Punta Cana, 26 km from freshwater lagoons. The resort has a private beach area and water sports facilities, and guests can enjoy a meal at the restaurant or a drink at the bar.\n\nEvery room at this resort is air conditioned and is equipped with a flat-screen TV. Certain rooms include views of the pool or garden. For your comfort, you will find bath robes, slippers and free toiletries. Superior rooms have a spa bath or a hot tub.\n\nThere is a 24-hour front desk, a cash machine, hairdresser's, and gift shop at the property. Free private parking is available on site.\n\nThe area is popular for golfing and horse riding. Cap Cana Marina is 27 km from Majestic Mirage Punta Cana, while Playa Juanillo is 27 km away. The nearest airport is Punta Cana International Airport, 21 km from the property.",
            //     "img": "majesticMiragePuntaCana.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 290,
            //     "tourId": 1,
            //     "createdAt": "2021-03-21T15:28:54.994Z",
            //     "updatedAt": "2021-03-21T15:28:54.994Z"
            // },
            // {
            //     "id": 2,
            //     "type": "resort",
            //     "stars": 4,
            //     "title": "Occidental Caribe",
            //     "address": "Carretera Arena Gorda, Bavaro, 10106 Punta Cana",
            //     "description": "Located on sandy Playa Bavaro (Bavaro Beach), this all-inclusive oceanfront resort features diving trips, a full-service spa and a casino.\n\nEach bright guest room at Occidental Caribe - All Inclusive includes a balcony and a fully stocked minibar. Cable TV and an in-room safe are provided.\n\nOutdoor freeform pools, tennis courts and a miniature golf course are available at Occidental Caribe - All Inclusive. Guests can rent kayaks or climb the rock wall. Via Venetto, one of the on-site restaurants, serves Italian cuisine for dinner. Barbecue and seafood are specialties at Marenostrum, while the adult-only sports bar Take Five is open all night.",
            //     "img": "occidentalCaribe.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 108,
            //     "tourId": 1,
            //     "createdAt": "2021-03-21T15:33:01.765Z",
            //     "updatedAt": "2021-03-21T15:33:01.765Z"
            // },
            // {
            //     "id": 3,
            //     "type": "apartment",
            //     "stars": 3,
            //     "title": "Tot Punta Cana Apartments",
            //     "address": "carretera bavaro La Altagracia, Bavaro, 23301 Punta Cana",
            //     "description": "Set less than 1 km from Arena Gorda Beach, Tot Punta Cana Apartments offers an outdoor swimming pool, a garden and air-conditioned accommodation with a balcony and free WiFi.\n\nAll units comprise a seating area with a sofa, a dining area, and a fully equipped kitchen with various cooking facilities, including a microwave, a fridge, an oven and a stovetop. A terrace with garden views is offered in all units.\n\nA car rental service is available at the aparthotel.",
            //     "img": "occidentalCaribe.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 60,
            //     "tourId": 1,
            //     "createdAt": "2021-03-21T15:35:48.726Z",
            //     "updatedAt": "2021-03-21T15:35:48.726Z"
            // },
            // {
            //     "id": 4,
            //     "type": "apartment",
            //     "stars": 4,
            //     "title": "Costa Atlantica Beach Condo",
            //     "address": "Calle Mare , Bavaro, 23000 Punta Cana",
            //     "description": "Providing garden views, Costa Atlantica Beach Condo in Punta Cana provides accommodation, an outdoor swimming pool, a garden and a terrace.\n\nThe air-conditioned units are furnished with tiled floors and feature a private bathroom, a flat-screen TV, free WiFi, desk, a living room, an equipped kitchen, balcony and views over the pool. There is a seating and a dining area in all units.\n\nCycling can be enjoyed nearby.\n\nBavaro Beach is 500 m from the aparthotel, while freshwater lagoons is 24 km away. The nearest airport is Punta Cana International, 14 km from Costa Atlantica Beach Condo, and the property offers a paid airport shuttle service.\n\nThis is our guests' favourite part of Punta Cana, according to independent reviews.",
            //     "img": "costaAtlantica.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 90,
            //     "tourId": 1,
            //     "createdAt": "2021-03-21T15:40:50.197Z",
            //     "updatedAt": "2021-03-21T15:40:50.197Z"
            // },
            // {
            //     "id": 5,
            //     "type": "hotel",
            //     "stars": 4,
            //     "title": "Riu Plaza Berlin",
            //     "address": "Martin-Luther-Strasse 1, Tempelhof-Schöneberg, 10777 Berlin",
            //     "description": "This hotel is set in a modern 17-storey building on Berlin's Kurfürstendamm boulevard. The RIU Plaza Berlin is a 5-minute walk from Kurfürstendamm Underground Station and the world-famous KaDeWe department store.\n\nAll rooms and suites at the Hotel Riu Plaza Berlin am Kurfürstendamm feature luxury furnishings. Each room includes a flat-screen satellite TV, a safe, fridge, air conditioning and a private bathroom.\n\nHigh-speed WiFi is provided free of charge for guests in all areas of the hotel. Use of the hotel fitness room is also complimentary. The Hotel Riu Plaza Berlin am Kurfürstendamm also boasts a 24-hour reception and extensive conference facilities.",
            //     "img": "riuPlazaBerlin.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 94,
            //     "tourId": 2,
            //     "createdAt": "2021-03-21T15:44:50.329Z",
            //     "updatedAt": "2021-03-21T15:44:50.329Z"
            // },
            // {
            //     "id": 6,
            //     "type": "hostel",
            //     "stars": 3,
            //     "title": "Generator Berlin Mitte",
            //     "address": "Oranienburger Strasse 65, Mitte, 10117 Berlin",
            //     "description": "Centrally located in Berlin, this hostel features a bar, a 24-hour front desk, and free WiFi throughout the property. Oranienburger Strasse S-Bahn Train Station and Oranienburger Tor U-Bahn Metro are within 500 m.\n\nGenerator Berlin Mitte offers brightly decorated rooms with en suite bathrooms. On-site laundry facilities can be used for a fee. Additional conveniences include luggage storage and safety deposit boxes.\n\nGuests at Generator Berlin Mitte can order a continental breakfast at the hostel. A variety of bars and restaurants can be reached within 5 minutes’ walk.\n\nBerlin’s Alexanderplatz Square, historic Hackesche Höfe courtyards, and Brandenburg Gate are all within 2 km of the hostel. The city's Museum Island is only 500 m away.",
            //     "img": "generatorBerlinMitte.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 60,
            //     "tourId": 2,
            //     "createdAt": "2021-03-21T15:47:33.813Z",
            //     "updatedAt": "2021-03-21T15:47:33.813Z"
            // },
            // {
            //     "id": 7,
            //     "type": "appartment",
            //     "stars": 4,
            //     "title": "HighPark by Palmira",
            //     "address": "Gabriele Tergit Promenade 21, Mitte, 10963 Berlin",
            //     "description": "HighPark by Palmira is located just off Potsdamer Platz in Berlin’s central Mitte district. It is within a 15-minute walk of attractions such as the Brandenburg Gate, Holocaust Memorial and Topography of Terror.\n\nOccupying the first 3 floors of a modern building, HighPark by Palmira offers high-end suites, studios and apartments with free WiFi and additional services. All units feature ergonomic furniture, comfortable beds with orthopedic mattresses, a small fully equipped kitchen as well as free toiletries. Most units also have a balcony.",
            //     "img": "highPark.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 95,
            //     "tourId": 2,
            //     "createdAt": "2021-03-21T15:50:34.634Z",
            //     "updatedAt": "2021-03-21T15:50:34.634Z"
            // },
            // {
            //     "id": 8,
            //     "type": "hotel",
            //     "stars": 4,
            //     "title": "Vatican Style",
            //     "address": "via del Mascherino 46, Vaticano Prati, 00193 Rome",
            //     "description": "One of our bestsellers in Rome!\nVatican Style Luxury Rooms is set in the Vatican City - Prati district in Rome, just 150 m from St. Peter's Square.\n\nEvery room at this guest house is air conditioned and comes with a flat-screen TV with satellite channels. You will find a kettle in the room. The rooms have a private bathroom. For your comfort, you will find bath robes and slippers. Vatican Style Luxury Rooms features free WiFi throughout the property.\n\nThere is concierge service at the property.\n\nOttaviano Metro is 8 minutes' walk from the property. Fiumicino Airport is 30 km away.\n\nThis is our guests' favourite part of Rome, according to independent reviews.",
            //     "img": "vaticanStyle.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 153,
            //     "tourId": 3,
            //     "createdAt": "2021-03-21T16:00:27.410Z",
            //     "updatedAt": "2021-03-21T16:00:27.410Z"
            // },
            // {
            //     "id": 9,
            //     "type": "hostel",
            //     "stars": 3,
            //     "title": "Volturno Guest House",
            //     "address": "31 Via Volturno Int_5, Central Station, 00185 Rome",
            //     "description": "Situated conveniently in the Central Station district of Rome, VolturnoGuestHouse2 is set less than 1 km from Santa Maria Maggiore, 900 m from Piazza Barberini and 1.1 km from Sapienza University of Rome. The property is 1.1 km from Quirinal Hill, and within 1.7 km of the city centre.\n\nThe nearest airport is Rome Ciampino Airport, 14 km from the hostel.\n\nThis is our guests' favourite part of Rome, according to independent reviews.\n\n",
            //     "img": "volturnoGuestHouse.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 24,
            //     "tourId": 3,
            //     "createdAt": "2021-03-21T16:04:23.708Z",
            //     "updatedAt": "2021-03-21T16:04:23.708Z"
            // },
            // {
            //     "id": 10,
            //     "type": "hostel",
            //     "stars": 5,
            //     "title": "Radisson Blu GHR Rome",
            //     "address": "Via Chelini 41, Villa Borghese Parioli, 00197 Rome",
            //     "description": "Featuring free WiFi, a free fitness centre and free shuttle service to/from the Spanish Steps, Radisson Blu GHR Rome offers spacious rooms in Rome's elegant Parioli neighbourhood. This hotel also offers a spa, panoramic restaurant and 2 bars. The Auditorium Parco della Musica music venue is a 10-minute walk from the hotel.\n\nRooms and suites at Radisson Blu GHR Rome are air conditioned, and each features a LED TV, minibar and hairdryer. The private bathroom in marble has luxury toiletries.\n\nA sweet buffet breakfast is served daily.",
            //     "img": "radissonBlu.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 243,
            //     "tourId": 3,
            //     "createdAt": "2021-03-21T16:11:46.831Z",
            //     "updatedAt": "2021-03-21T16:11:46.831Z"
            // },
            // {
            //     "id": 11,
            //     "type": "resort",
            //     "stars": 5,
            //     "title": "Rome Cavalieri",
            //     "address": "Via Cadlolo 101, Trionfale, 00136 Rome",
            //     "description": "Surrounded by its large Mediterranean gardens, Rome Cavalieri, A Waldorf Astoria Hotel offers views of Rome and the Vatican from its hilltop position in Montemario. It features spacious and luxurious rooms with balcony, and a 2500 m² wellness centre.\n\nThe elegant rooms include a flat-screen TV with satellite and pay-per-view channels, a marble bathroom, and a balcony overlooking either the gardens or Rome's historical centre. Some offer access to the Imperial Club Lounge located on the 7th floor.\n\nThere are 2 restaurants and 4 bars at the Rome Cavalieri. The 3-Michelin star rooftop restaurant La Pergola serves gourmet cuisine. L'Uliveto features a poolside terrace where you can enjoy classic Italian and international dishes.",
            //     "img": "romeCavalieri.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 447,
            //     "tourId": 3,
            //     "createdAt": "2021-03-21T16:14:56.384Z",
            //     "updatedAt": "2021-03-21T16:14:56.384Z"
            // },
            // {
            //     "id": 12,
            //     "type": "hotel",
            //     "stars": 4,
            //     "title": "Carlton President",
            //     "address": "Floraweg 25, West, 3542 DX Utrecht",
            //     "description": "Carlton President, on the edge of Utrecht, offers a free shuttle service during the week to De Wetering, Papendorp, Oudenrijn and Maarssen Railway Station. This 4-star hotel also offers free use of the leisure centre which includes a sauna, spa bath and steam bath.\n\nThe Carlton President provides tastefully decorated rooms equipped with modern and luxurious facilities.\n\nA healthy breakfast bowl or buffet with ingredients that are sourced locally is served daily.\nGuest can enjoy lunch or dinner at the restaurant and bar One24 opened in the summer of 2018. The Restaurant serves seasonal, international dishes and snacks inspired by the Mediterranean and Middle-Eastern Cuisine. A refreshing cocktail, fine wine or a variety of special beers can be enjoyed at the bar.",
            //     "img": "carltonPresident.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 134,
            //     "tourId": 4,
            //     "createdAt": "2021-03-21T16:17:34.623Z",
            //     "updatedAt": "2021-03-21T16:17:34.623Z"
            // },
            // {
            //     "id": 13,
            //     "type": "hostel",
            //     "stars": 3,
            //     "title": "Stayokay Utrecht Centrum",
            //     "address": "Neude 5, City Centre, 3512 AD Utrecht",
            //     "description": "Stayokay Utrecht Centrum is located in the centre of Utrecht, on the edge of the Neude. 900 m from Jaarbeurs Utrecht and 1 km from Railway Museum. There is a 24-hour front desk at the property.\n\nGuests can enjoy the on-site restaurant and breakfast is available against a surcharge.\n\nThe hostel offers bunk beds in shared dormitories as well as private rooms. All rooms are equipped with a shower and toilet. The accommodation includes free WiFi access throughout the whole building.",
            //     "img": "stayokayCentrum.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 24,
            //     "tourId": 4,
            //     "createdAt": "2021-03-21T16:20:33.954Z",
            //     "updatedAt": "2021-03-21T16:20:33.954Z"
            // },
            // {
            //     "id": 14,
            //     "type": "apartment",
            //     "stars": 3,
            //     "title": "Chez Cho",
            //     "address": "Haverstraat 8, City Centre, 3511 NC Utrecht",
            //     "description": "B&B Chez Cho is a self-catering accommodation located in Utrecht. Free WiFi access is available. The property is 1.6 km from Jaarbeurs Utrecht.\n\nThis accommodation will provide you with a cable TV and a CD player. There is a well-equipped kitchenette with a microwave and kitchenware. The private bathroom comes with a shower, a spa bath, a sauna and a hairdryer.\n\nIf you feel like visiting the surroundings, check out Railway Museum (800 m) and Aboriginal Art Museum (190 m). Schiphol Airport is located 48.5 km away.\n\nThis is our guests' favourite part of Utrecht, according to independent reviews.",
            //     "img": "chezCho.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 131,
            //     "tourId": 4,
            //     "createdAt": "2021-03-21T16:22:45.357Z",
            //     "updatedAt": "2021-03-21T16:22:45.357Z"
            // },
            // {
            //     "id": 15,
            //     "type": "apartment",
            //     "stars": 4,
            //     "title": "Lofoten Links Lodges",
            //     "address": "Hov Tore Hjortsvei 389, 8314 Gimsøy",
            //     "description": "Set in Gimsøy, 40 km from Svolvær, Lofoten Links Lodges features views of sea and natural surroundings. During summer, guests can experience the midnight sun, and in the winter the Northern Lights if lucky. Free WiFi and free private parking is available on site.\n\nThe lodges share a fully equipped kitchen, living room with a TV and a wood burning stove. There is a large terrace facing the sea. Guests can choose to rent a Deluxe Lodge featuring a private entrance and shared bathroom facilities. An other choice is to rent a the whole Luxury lodge, or a guestroom with a private bathroom in this lodge. Guestrooms in the Luxury lodge share the kitchen facilities. Towels and bed linen are provided.",
            //     "img": "linksLodges.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 147,
            //     "tourId": 5,
            //     "createdAt": "2021-03-21T16:26:36.716Z",
            //     "updatedAt": "2021-03-21T16:26:36.716Z"
            // },
            // {
            //     "id": 16,
            //     "type": "apartment",
            //     "stars": 4,
            //     "title": "Eliassen Rorbuer",
            //     "address": "Hamnøy, 8390 Reine",
            //     "description": "liassen Rorbuer is housed in renovated fishermen’s cottages on Hamnøy Island. It offers cottages with private kitchen facilities. Moskenes Ferry Terminal is 10 km away.\n\nThe rustic cottages feature a living room with a seating area and a private bathroom with a shower. Kitchen facilities at Eliassen include a fridge, stove and a dining area. Cottages overlook Hamnøy harbour, the Vest Fjord, Reine Fjord or the mountains. Free WiFi is offered.\n\nGuests can enjoy a fusion of Norwegian and Italian cuisine at the on-site Gadus Restaurant.",
            //     "img": "eliassenRorbuer.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 248,
            //     "tourId": 5,
            //     "createdAt": "2021-03-21T16:28:51.776Z",
            //     "updatedAt": "2021-03-21T16:28:51.776Z"
            // },
            // {
            //     "id": 17,
            //     "type": "resort",
            //     "stars": 4,
            //     "title": "Nusfjord Arctic Resort",
            //     "address": "Nusfjord, 8380 Nusfjord",
            //     "description": "This property offers traditional fishing cottages with sea views. Guests can try a wood-fired hot tub or activities such as fishing, kayaking and hiking. WiFi is in some cottages.\n\nAll cottages feature wooden floors and a seating area with a sofa. All rooms come with a refrigerator.\n\nSeafood and fjord views are offered at Restaurant Karoline. Nusfjord Rorbuer can organise fishing trips.\n\nSurrounded by the Lofoten Mountains, Nusfjord is one of the best preserved fishing villages in Norway. Parking is free of charge.",
            //     "img": "nusfjordResort.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 221,
            //     "tourId": 5,
            //     "createdAt": "2021-03-21T16:32:10.937Z",
            //     "updatedAt": "2021-03-21T16:32:10.937Z"
            // },
            // {
            //     "id": 18,
            //     "type": "hostel",
            //     "stars": 3,
            //     "title": "Lofoten Å HI hostel",
            //     "address": "Å veien 18, 9392 Å",
            //     "description": "Lofoten Å HI hostel is offering accommodation in Å. There is a terrace and guests can make use of free WiFi and free private parking.\n\nAt the hostel, the rooms are equipped with a shared bathroom with a shower.\n\nThe nearest airport is Leknes Airport, 40 km from Lofoten Å HI hostel.\n\nCouples particularly like the location — they rated it 9.0 for a two-person trip.",
            //     "img": "lofotenAHIHostel.jpg",
            //     "nights": null,
            //     "startDate": null,
            //     "endDate": null,
            //     "availability": true,
            //     "price": 34,
            //     "tourId": 5,
            //     "createdAt": "2021-03-21T16:34:43.810Z",
            //     "updatedAt": "2021-03-21T16:34:43.810Z"
            // }
        ]
        
        this._countries = ['Germany', 'Italy', 'Dominicana', 'Norway', 'Netherlands', 'Show all tours'];
        this._selectedCountry = {};
        this._types = [];
        this._selectedType = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;

        makeAutoObservable(this);
    }

    setTours(tours) {
        this._tours = tours;
    }
    setAccomms(accommodation) {
        this._accommodation = accommodation;
    }

    setSelectedCountry(country) {
        this.setPage(1);
        this._selectedCountry = country;
    }
    setSelectedType(type) {
        this.setPage(1);
        this._selectedType = type;
    }

    setCountries(country) {
        this._countries = country;
    }
    setTypes(type) {
        this._types = type;
    }
    setPage(page) {
        this._page = page;
    }
    setTotalCount(count) {
        this._totalCount = count;
    }
    get tours() {
        return this._tours;
    }
    get accomms() {
        return this._accommodation;
    }
    get selectedCountry() {
        return this._selectedCountry;
    }

    get countries() {
        return this._countries;
    }
    get types() {
        return this._types;
    }

    get limit() {
        return this._limit;
    }
    get page() {
        return this._page;
    }
    get totalCount() {
        return this._totalCount;
    }
}