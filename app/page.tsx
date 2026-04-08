'use client'

import { useMemo, useState } from 'react'

type Place = {
  id: number
  name: string
  image: string
  category: string
  area: string
  description: string
  bestTime: string
  duration: string
  familyFriendly: string
}

type Restaurant = {
  id: number
  name: string
  image: string
  cuisine: string
  area: string
  price: string
  description: string
  idealFor: string
}

type Itinerary = {
  id: number
  title: string
  duration: string
  description: string
  stops: string[]
  premium: boolean
}

const places: Place[] = [
  {
    id: 1,
    name: 'Valletta',
    image: "/images/valletta.jpg",
    category: 'Historic City',
    area: 'Valletta',
    description: "Malta's capital, ideal for history, architecture, museums and walking routes.",
    bestTime: 'Morning to sunset',
    duration: '3 to 6 hours',
    familyFriendly: 'Yes',
  },
  {
    id: 2,
    name: 'Mdina',
    image: "/images/mdina.jpg",
    category: 'Historic City',
    area: 'Mdina',
    description: 'The silent city with old streets, calm atmosphere and scenic viewpoints.',
    bestTime: 'Late afternoon',
    duration: '2 to 4 hours',
    familyFriendly: 'Yes',
  },
  {
    id: 3,
    name: 'Blue Lagoon',
    image: "/images/blue-lagoon.jpg",
    category: 'Beach & Sea',
    area: 'Comino',
    description: 'Crystal clear turquoise water and one of Malta’s most iconic spots.',
    bestTime: 'Early morning',
    duration: 'Half day',
    familyFriendly: 'Yes',
  },
  {
    id: 4,
    name: 'Marsaxlokk',
    image: "/images/marsaxlokk.jpg",
    category: 'Village',
    area: 'South Malta',
    description: 'Fishing village known for colorful boats, seafood and local vibe.',
    bestTime: 'Morning to lunch',
    duration: '2 to 4 hours',
    familyFriendly: 'Yes',
  },
  {
    id: 5,
    name: 'Dingli Cliffs',
    image: "/images/dingli-cliffs.jpg",
    category: 'Nature',
    area: 'Dingli',
    description: 'One of the best places in Malta for sunset views and open sea scenery.',
    bestTime: 'Sunset',
    duration: '1 to 2 hours',
    familyFriendly: 'Yes',
  },
  {
    id: 6,
    name: 'Cittadella, Gozo',
    image: "/images/cittadella.jpg",
    category: 'Historic Site',
    area: 'Gozo',
    description: 'Fortified historic site in Gozo with panoramic island views.',
    bestTime: 'Late afternoon',
    duration: '1.5 to 3 hours',
    familyFriendly: 'Yes',
  },
]

const restaurants: Restaurant[] = [
  {
    id: 101,
    name: 'Nenu the Artisan Baker',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    cuisine: 'Maltese',
    area: 'Valletta',
    price: '€€',
    description: 'Traditional Maltese dishes in a central and tourist-friendly location.',
    idealFor: 'Local food',
  },
  {
    id: 102,
    name: "Ta' Kris",
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    cuisine: 'Maltese',
    area: 'Sliema',
    price: '€€',
    description: 'Authentic local comfort food with a relaxed atmosphere.',
    idealFor: 'Casual lunch or dinner',
  },
  {
    id: 103,
    name: 'Rampila',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    cuisine: 'Mediterranean',
    area: 'Valletta',
    price: '€€€',
    description: 'Scenic dinner spot with a unique setting near Valletta’s historic walls.',
    idealFor: 'Dinner atmosphere',
  },
  {
    id: 104,
    name: 'Blue Elephant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    cuisine: 'Thai',
    area: "St Julian's",
    price: '€€€',
    description: 'Good Asian option for visitors wanting a different cuisine in Malta.',
    idealFor: 'Different cuisine',
  },
  {
    id: 105,
    name: 'Tartarun',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    cuisine: 'Seafood',
    area: 'Marsaxlokk',
    price: '€€€',
    description: 'Seafood-focused dining in one of Malta’s best-known coastal areas.',
    idealFor: 'Lunch by the sea',
  },
  {
    id: 106,
    name: 'Terrone',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    cuisine: 'Italian',
    area: 'Birgu',
    price: '€€€',
    description: 'Italian dining with scenic waterfront feel and stronger date-night vibe.',
    idealFor: 'Scenic dinner',
  },
]

const itineraries: Itinerary[] = [
  {
    id: 201,
    title: 'Malta in 1 Day',
    duration: '1 day',
    description: 'Fast route for first-time visitors who want history, views and a smooth day plan.',
    stops: ['Valletta', 'Upper Barrakka area', 'Mdina', 'Sunset stop'],
    premium: true,
  },
  {
    id: 202,
    title: 'Malta in 3 Days',
    duration: '3 days',
    description: 'Best overall route for culture, villages and coast.',
    stops: ['Valletta', 'Three Cities', 'Mdina', 'Rabat', 'Marsaxlokk', 'Blue Grotto'],
    premium: true,
  },
  {
    id: 203,
    title: 'Malta in 5 Days',
    duration: '5 days',
    description: 'More complete experience including Gozo and extra food stops.',
    stops: ['Valletta', 'Mdina', 'Dingli', 'Marsaxlokk', 'Gozo', 'Beach day'],
    premium: true,
  },
  {
    id: 204,
    title: 'Best of Gozo in 1 Day',
    duration: '1 day',
    description: 'Practical Gozo route for travelers with limited time.',
    stops: ['Victoria', 'Cittadella', 'Xlendi style stop', 'Coastal viewpoint'],
    premium: true,
  },
]

const tips = [
  'Best first-time Malta combo: Valletta + Mdina + one coastal village.',
  'Gozo works best as a full-day trip.',
  'Blue Lagoon is better early in the day.',
  'Use Bolt or taxi for faster movement when time is short.',
]

type Tab = 'home' | 'places' | 'restaurants' | 'itineraries' | 'tips' | 'favorites'
type DetailItem =
  | { type: 'place'; data: Place }
  | { type: 'restaurant'; data: Restaurant }
  | { type: 'itinerary'; data: Itinerary }
  | null

export default function Home() {
  const [premiumUnlocked, setPremiumUnlocked] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>('home')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCuisine, setSelectedCuisine] = useState('All')
  const [search, setSearch] = useState('')
  const [detailItem, setDetailItem] = useState<DetailItem>(null)
  const [savedPlaces, setSavedPlaces] = useState<number[]>([])
  const [savedRestaurants, setSavedRestaurants] = useState<number[]>([])
  const [savedItineraries, setSavedItineraries] = useState<number[]>([])

  const placeCategories = ['All', 'Historic City', 'Historic Site', 'Beach & Sea', 'Village', 'Nature']
  const cuisines = ['All', 'Maltese', 'Mediterranean', 'Thai', 'Seafood', 'Italian']

  const visiblePlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesCategory = selectedCategory === 'All' || place.category === selectedCategory
      const matchesSearch =
        place.name.toLowerCase().includes(search.toLowerCase()) ||
        place.area.toLowerCase().includes(search.toLowerCase()) ||
        place.category.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, search])

  const visibleRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine
      const matchesSearch =
        restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
        restaurant.area.toLowerCase().includes(search.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(search.toLowerCase())
      return matchesCuisine && matchesSearch
    })
  }, [selectedCuisine, search])

  function savePlace(id: number) {
    if (!premiumUnlocked) {
      alert('Favorites are part of Malta Explorer Premium.')
      return
    }
    setSavedPlaces((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  function saveRestaurant(id: number) {
    if (!premiumUnlocked) {
      alert('Favorites are part of Malta Explorer Premium.')
      return
    }
    setSavedRestaurants((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  function saveItinerary(id: number) {
    if (!premiumUnlocked) {
      alert('Saving itineraries is part of Malta Explorer Premium.')
      return
    }
    setSavedItineraries((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  function isPlaceSaved(id: number) {
    return savedPlaces.includes(id)
  }

  function isRestaurantSaved(id: number) {
    return savedRestaurants.includes(id)
  }

  function isItinerarySaved(id: number) {
    return savedItineraries.includes(id)
  }

  function openPlaceDetails(place: Place) {
    setDetailItem({ type: 'place', data: place })
  }

  function openRestaurantDetails(restaurant: Restaurant) {
    setDetailItem({ type: 'restaurant', data: restaurant })
  }

  function openItineraryDetails(itinerary: Itinerary) {
    if (!premiumUnlocked && itinerary.premium) {
      alert('This itinerary is part of Malta Explorer Premium.')
      return
    }
    setDetailItem({ type: 'itinerary', data: itinerary })
  }

  function renderHome() {
    return (
      <>
        <section className="mb-8 rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl">
          <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
            Malta Explorer
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Explore Malta the smart way</h1>

          <p className="mt-4 max-w-3xl text-base text-slate-300 md:text-lg">
            Discover the best places to visit, restaurants by cuisine, useful travel tips and premium itineraries that help travelers enjoy Malta with less stress.
          </p>

          <div className="mt-6">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Valletta, Gozo, seafood, Mdina..."
              className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            />
          </div>
{premiumUnlocked && (
  <div className="mt-6">
    <a
      href="/api/download-premium-guide"
      className="rounded-xl bg-green-500 px-4 py-2 text-black font-semibold inline-block"
    >
      📘 Download Premium Guide
    </a>
  </div>
)}
          {!premiumUnlocked && (
            <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-yellow-400 p-4 text-black md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-bold">Malta Explorer Premium — €14.99</div>
                <div className="text-sm">
                  Unlock ready-made itineraries, save favorites and get premium travel planning tools.
                </div>
              </div>

              <button
  onClick={() => window.open("https://buy.stripe.com/cNibJ072y5lu5GVbYQfnO00", "_blank")}
  className="rounded-xl bg-black px-4 py-2 font-medium text-white"
>
  Unlock premium
</button>
            </div>
          )}
        </section>

        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Featured places</h2>
            <button
              onClick={() => setActiveTab('places')}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              View all places
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {places.slice(0, 3).map((place) => (
              <button
                key={place.id}
                onClick={() => openPlaceDetails(place)}
                className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 text-left shadow-lg transition hover:scale-[1.01]"
              >
                <img src={place.image} alt={place.name} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <div className="mb-2 text-xs uppercase tracking-widest text-cyan-300">{place.category}</div>
                  <h3 className="text-xl font-semibold">{place.name}</h3>
                  <div className="mt-1 text-sm text-slate-400">{place.area}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{place.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Featured restaurants</h2>
            <button
              onClick={() => setActiveTab('restaurants')}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              View all restaurants
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {restaurants.slice(0, 3).map((restaurant) => (
              <button
                key={restaurant.id}
                onClick={() => openRestaurantDetails(restaurant)}
                className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 text-left shadow-lg transition hover:scale-[1.01]"
              >
                <img src={restaurant.image} alt={restaurant.name} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <div className="mb-2 text-xs uppercase tracking-widest text-emerald-300">{restaurant.cuisine}</div>
                  <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                  <div className="mt-1 text-sm text-slate-400">
                    {restaurant.area} • {restaurant.price}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{restaurant.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Itineraries</h2>
            <button
              onClick={() => setActiveTab('itineraries')}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              View itineraries
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {itineraries.map((itinerary) => (
              <button
                key={itinerary.id}
                onClick={() => openItineraryDetails(itinerary)}
                className="rounded-[28px] border border-slate-800 bg-slate-900 p-5 text-left transition hover:scale-[1.01]"
              >
                <div className={`mb-2 text-xs uppercase tracking-widest ${itinerary.premium ? 'text-yellow-300' : 'text-cyan-300'}`}>
                  {itinerary.premium ? 'Premium' : 'Free'}
                </div>
                <h3 className="text-xl font-semibold">{itinerary.title}</h3>
                <div className="mt-1 text-sm text-slate-400">{itinerary.duration}</div>
                <p className="mt-3 text-sm text-slate-300">{itinerary.description}</p>
              </button>
            ))}
          </div>
        </section>
      </>
    )
  }

  function renderPlaces() {
    return (
      <>
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Best places to visit</h2>
          <div className="text-sm text-slate-400">{visiblePlaces.length} results</div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {placeCategories.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={`rounded-full px-4 py-2 text-sm ${
                selectedCategory === item
                  ? 'bg-white text-slate-900'
                  : 'border border-slate-700 bg-slate-900 text-slate-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visiblePlaces.map((place) => (
            <div key={place.id} className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-lg">
              <button onClick={() => openPlaceDetails(place)} className="w-full text-left">
                <img src={place.image} alt={place.name} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <div className="mb-2 text-xs uppercase tracking-widest text-cyan-300">{place.category}</div>
                  <h3 className="text-xl font-semibold">{place.name}</h3>
                  <div className="mt-1 text-sm text-slate-400">{place.area}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{place.description}</p>
                </div>
              </button>

              <div className="flex gap-3 px-5 pb-5">
                <button
                  onClick={() => openPlaceDetails(place)}
                  className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900"
                >
                  View details
                </button>
                <button
                  onClick={() => savePlace(place.id)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200"
                >
                  {isPlaceSaved(place.id) ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }

  function renderRestaurants() {
    return (
      <>
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Restaurants</h2>
          <div className="text-sm text-slate-400">{visibleRestaurants.length} results</div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {cuisines.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedCuisine(item)}
              className={`rounded-full px-4 py-2 text-sm ${
                selectedCuisine === item
                  ? 'bg-white text-slate-900'
                  : 'border border-slate-700 bg-slate-900 text-slate-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-lg">
              <button onClick={() => openRestaurantDetails(restaurant)} className="w-full text-left">
                <img src={restaurant.image} alt={restaurant.name} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <div className="mb-2 text-xs uppercase tracking-widest text-emerald-300">{restaurant.cuisine}</div>
                  <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                  <div className="mt-1 text-sm text-slate-400">
                    {restaurant.area} • {restaurant.price}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{restaurant.description}</p>
                </div>
              </button>

              <div className="flex gap-3 px-5 pb-5">
                <button
                  onClick={() => openRestaurantDetails(restaurant)}
                  className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900"
                >
                  View details
                </button>
                <button
                  onClick={() => saveRestaurant(restaurant.id)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200"
                >
                  {isRestaurantSaved(restaurant.id) ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }

  function renderItineraries() {
    return (
      <>
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Itineraries</h2>
          <div className="text-sm text-slate-400">
            {premiumUnlocked ? 'Premium unlocked' : 'Premium required for full access'}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {itineraries.map((itinerary) => (
            <div key={itinerary.id} className="rounded-[28px] border border-slate-800 bg-slate-900 p-5 shadow-lg">
              <button onClick={() => openItineraryDetails(itinerary)} className="w-full text-left">
                <div className={`mb-2 text-xs uppercase tracking-widest ${itinerary.premium ? 'text-yellow-300' : 'text-cyan-300'}`}>
                  {itinerary.premium ? 'Premium' : 'Free'}
                </div>
                <h3 className="text-xl font-semibold">{itinerary.title}</h3>
                <div className="mt-1 text-sm text-slate-400">{itinerary.duration}</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{itinerary.description}</p>
              </button>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => openItineraryDetails(itinerary)}
                  className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900"
                >
                  View details
                </button>
                <button
                  onClick={() => saveItinerary(itinerary.id)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200"
                >
                  {isItinerarySaved(itinerary.id) ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {!premiumUnlocked && (
          <div className="mt-6 rounded-[28px] border border-yellow-500/30 bg-yellow-500/10 p-6">
            <div className="mb-2 text-sm uppercase tracking-widest text-yellow-300">Premium only</div>
            <h3 className="text-2xl font-semibold">Ready-made travel plans</h3>
            <p className="mt-3 max-w-2xl text-slate-300">
              Premium gives users practical day-by-day itineraries, the ability to save trip ideas, and a smoother planning experience.
            </p>
          </div>
        )}
      </>
    )
  }

  function renderTips() {
    return (
      <>
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Travel tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map((tip, index) => (
            <div key={index} className="rounded-[28px] border border-slate-800 bg-slate-900 p-5 text-slate-300">
              {tip}
            </div>
          ))}
        </div>
      </>
    )
  }

  function renderFavorites() {
    const favoritePlaces = places.filter((place) => savedPlaces.includes(place.id))
    const favoriteRestaurants = restaurants.filter((restaurant) => savedRestaurants.includes(restaurant.id))
    const favoriteItineraries = itineraries.filter((itinerary) => savedItineraries.includes(itinerary.id))

    if (!premiumUnlocked) {
      return (
        <div className="rounded-[28px] border border-yellow-500/30 bg-yellow-500/10 p-6">
          <div className="mb-2 text-sm uppercase tracking-widest text-yellow-300">Premium only</div>
          <h2 className="text-2xl font-semibold md:text-3xl">Favorites</h2>
          <p className="mt-3 text-slate-300">
            Save places, restaurants and itineraries with Malta Explorer Premium.
          </p>
        </div>
      )
    }

    return (
      <>
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Favorites</h2>

        <div className="mb-8">
          <h3 className="mb-3 text-xl font-semibold">Saved places</h3>
          {favoritePlaces.length === 0 ? (
            <div className="rounded-[28px] border border-slate-800 bg-slate-900 p-5 text-slate-400">
              No saved places yet.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {favoritePlaces.map((place) => (
                <button
                  key={place.id}
                  onClick={() => openPlaceDetails(place)}
                  className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 text-left"
                >
                  <img src={place.image} alt={place.name} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <div className="font-semibold">{place.name}</div>
                    <div className="mt-1 text-sm text-slate-400">{place.area}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-xl font-semibold">Saved restaurants</h3>
          {favoriteRestaurants.length === 0 ? (
            <div className="rounded-[28px] border border-slate-800 bg-slate-900 p-5 text-slate-400">
              No saved restaurants yet.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {favoriteRestaurants.map((restaurant) => (
                <button
                  key={restaurant.id}
                  onClick={() => openRestaurantDetails(restaurant)}
                  className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 text-left"
                >
                  <img src={restaurant.image} alt={restaurant.name} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <div className="font-semibold">{restaurant.name}</div>
                    <div className="mt-1 text-sm text-slate-400">{restaurant.area}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold">Saved itineraries</h3>
          {favoriteItineraries.length === 0 ? (
            <div className="rounded-[28px] border border-slate-800 bg-slate-900 p-5 text-slate-400">
              No saved itineraries yet.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {favoriteItineraries.map((itinerary) => (
                <button
                  key={itinerary.id}
                  onClick={() => openItineraryDetails(itinerary)}
                  className="rounded-[28px] border border-slate-800 bg-slate-900 p-5 text-left"
                >
                  <div className="font-semibold">{itinerary.title}</div>
                  <div className="mt-1 text-sm text-slate-400">{itinerary.duration}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </>
    )
  }

  function renderDetailPanel() {
    if (!detailItem) return null

    if (detailItem.type === 'place') {
      const place = detailItem.data
      return (
        <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-6">
          <img src={place.image} alt={place.name} className="mb-5 h-64 w-full rounded-[24px] object-cover" />
          <div className="mb-2 text-sm uppercase tracking-widest text-cyan-300">{place.category}</div>
          <h3 className="text-3xl font-semibold">{place.name}</h3>
          <div className="mt-2 text-slate-400">{place.area}</div>
          <p className="mt-4 leading-7 text-slate-300">{place.description}</p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950 p-4">
              <div className="text-sm text-slate-400">Best time</div>
              <div className="mt-1 font-medium">{place.bestTime}</div>
            </div>
            <div className="rounded-2xl bg-slate-950 p-4">
              <div className="text-sm text-slate-400">Duration</div>
              <div className="mt-1 font-medium">{place.duration}</div>
            </div>
            <div className="rounded-2xl bg-slate-950 p-4">
              <div className="text-sm text-slate-400">Family friendly</div>
              <div className="mt-1 font-medium">{place.familyFriendly}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => savePlace(place.id)}
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900"
            >
              {isPlaceSaved(place.id) ? 'Saved' : 'Save'}
            </button>
            <button
              onClick={() => setDetailItem(null)}
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200"
            >
              Close
            </button>
          </div>
        </div>
      )
    }

    if (detailItem.type === 'restaurant') {
      const restaurant = detailItem.data
      return (
        <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-6">
          <img src={restaurant.image} alt={restaurant.name} className="mb-5 h-64 w-full rounded-[24px] object-cover" />
          <div className="mb-2 text-sm uppercase tracking-widest text-emerald-300">{restaurant.cuisine}</div>
          <h3 className="text-3xl font-semibold">{restaurant.name}</h3>
          <div className="mt-2 text-slate-400">
            {restaurant.area} • {restaurant.price}
          </div>
          <p className="mt-4 leading-7 text-slate-300">{restaurant.description}</p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-950 p-4">
              <div className="text-sm text-slate-400">Cuisine</div>
              <div className="mt-1 font-medium">{restaurant.cuisine}</div>
            </div>
            <div className="rounded-2xl bg-slate-950 p-4">
              <div className="text-sm text-slate-400">Ideal for</div>
              <div className="mt-1 font-medium">{restaurant.idealFor}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => saveRestaurant(restaurant.id)}
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900"
            >
              {isRestaurantSaved(restaurant.id) ? 'Saved' : 'Save'}
            </button>
            <button
              onClick={() => setDetailItem(null)}
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200"
            >
              Close
            </button>
          </div>
        </div>
      )
    }

    const itinerary = detailItem.data
    return (
      <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-6">
        <div className="mb-2 text-sm uppercase tracking-widest text-yellow-300">
          {itinerary.premium ? 'Premium itinerary' : 'Free itinerary'}
        </div>
        <h3 className="text-3xl font-semibold">{itinerary.title}</h3>
        <div className="mt-2 text-slate-400">{itinerary.duration}</div>
        <p className="mt-4 leading-7 text-slate-300">{itinerary.description}</p>

        <div className="mt-6">
          <div className="mb-3 text-sm uppercase tracking-widest text-slate-400">Suggested stops</div>
          <div className="grid gap-3 md:grid-cols-2">
            {itinerary.stops.map((stop, index) => (
              <div key={index} className="rounded-2xl bg-slate-950 p-4">
                <div className="text-sm text-slate-400">Stop {index + 1}</div>
                <div className="mt-1 font-medium">{stop}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => saveItinerary(itinerary.id)}
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900"
          >
            {isItinerarySaved(itinerary.id) ? 'Saved' : 'Save'}
          </button>
          <button
            onClick={() => setDetailItem(null)}
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 flex flex-wrap gap-3">
          <button onClick={() => setActiveTab('home')} className={`rounded-full px-4 py-2 text-sm ${activeTab === 'home' ? 'bg-white text-slate-900' : 'border border-slate-700 bg-slate-900 text-slate-200'}`}>Home</button>
          <button onClick={() => setActiveTab('places')} className={`rounded-full px-4 py-2 text-sm ${activeTab === 'places' ? 'bg-white text-slate-900' : 'border border-slate-700 bg-slate-900 text-slate-200'}`}>Best Places</button>
          <button onClick={() => setActiveTab('restaurants')} className={`rounded-full px-4 py-2 text-sm ${activeTab === 'restaurants' ? 'bg-white text-slate-900' : 'border border-slate-700 bg-slate-900 text-slate-200'}`}>Restaurants</button>
          <button onClick={() => setActiveTab('itineraries')} className={`rounded-full px-4 py-2 text-sm ${activeTab === 'itineraries' ? 'bg-white text-slate-900' : 'border border-slate-700 bg-slate-900 text-slate-200'}`}>Itineraries</button>
          <button onClick={() => setActiveTab('tips')} className={`rounded-full px-4 py-2 text-sm ${activeTab === 'tips' ? 'bg-white text-slate-900' : 'border border-slate-700 bg-slate-900 text-slate-200'}`}>Travel Tips</button>
          <button onClick={() => setActiveTab('favorites')} className={`rounded-full px-4 py-2 text-sm ${activeTab === 'favorites' ? 'bg-white text-slate-900' : 'border border-slate-700 bg-slate-900 text-slate-200'}`}>Favorites</button>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <div>
            {activeTab === 'home' && renderHome()}
            {activeTab === 'places' && renderPlaces()}
            {activeTab === 'restaurants' && renderRestaurants()}
            {activeTab === 'itineraries' && renderItineraries()}
            {activeTab === 'tips' && renderTips()}
            {activeTab === 'favorites' && renderFavorites()}
          </div>

          <div>
            <div className="sticky top-6">
              {detailItem ? (
                renderDetailPanel()
              ) : (
                <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-6">
                  <div className="mb-2 text-sm uppercase tracking-widest text-slate-400">Details panel</div>
                  <h3 className="text-2xl font-semibold">Click any card</h3>
                  <p className="mt-3 text-slate-300">
                    Select a place, restaurant or itinerary to view details here.
                  </p>
{premiumUnlocked && (
  <div className="mt-6">
    <a
      href="/api/download-premium-guide"
      className="rounded-xl bg-green-500 px-4 py-2 text-black font-semibold inline-block"
    >
      📘 Download Premium Guide
    </a>
  </div>
)}
                  {!premiumUnlocked && (
                    <div className="mt-6 rounded-2xl bg-yellow-400 p-4 text-black">
                      <div className="font-bold">Premium features</div>
                      <div className="mt-1 text-sm">
                        Save favorites and unlock full itinerary access for €14.99.
                      </div>
                      <button
  onClick={() => window.open("https://buy.stripe.com/cNibJ072y5lu5GVbYQfnO00", "_blank")}
  className="mt-3 rounded-xl bg-black px-4 py-2 text-white font-medium"
>
  Unlock premium

                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

