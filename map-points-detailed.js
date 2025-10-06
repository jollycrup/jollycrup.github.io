// Complete Route Points for Alberta Roadtrip with Detailed Descriptions
// Replace the routePoints array in main.html with this comprehensive version

const routePoints = [
  // DAY 0 - Arrival
  {
    coords: [53.3098, -113.5799],
    title: "Day 0: Edmonton Airport Arrival",
    category: "departure",
    description: "Arrive from Toronto at 9:30 PM. Pick up rental car, drive to friend's house for the night.",
    details: {
      time: "Oct 11 - 21:30",
      duration: "Evening arrival",
      cost: "Free (staying at friend's)",
      walking: "None",
      accessibility: "Full airport facilities",
      tips: "Have rental documents ready, download offline maps before leaving Toronto"
    }
  },

  // DAY 1 - Badlands
  {
    coords: [51.3947, -112.8855],
    title: "Day 1: Horseshoe Canyon",
    category: "photo",
    description: "Dramatic badlands canyon with accessible viewing deck. Layered rock formations tell 70 million years of geological history. Best photos late afternoon.",
    details: {
      time: "Oct 12 - 10:30",
      duration: "30-45 minutes",
      cost: "Free parking & entry",
      walking: "Accessible deck viewing, optional 500m trail",
      accessibility: "Wheelchair accessible viewing platform",
      tips: "Bring wide-angle lens, watch for rattlesnakes in summer (inactive in October)"
    }
  },

  {
    coords: [51.4683, -112.7888],
    title: "Day 1: World's Largest Dinosaur 🦕",
    category: "photo",
    description: "86-foot (25m) tall T-Rex statue in downtown Drumheller. Climb 106 stairs inside for panoramic badlands view, or just enjoy from ground level for photos.",
    details: {
      time: "Oct 12 - 10:45",
      duration: "15-20 minutes",
      cost: "$5 to climb inside (optional)",
      walking: "None to view, 106 stairs to climb inside",
      accessibility: "Ground-level viewing wheelchair accessible, stairs not accessible",
      tips: "Hilarious photo opportunity! Skip the climb to save legs - view from outside is still great"
    }
  },

  {
    coords: [51.4788, -112.7911],
    title: "Day 1: Royal Tyrrell Museum",
    category: "attraction",
    description: "WORLD-CLASS paleontology museum with 160,000+ fossils. One of the best dinosaur museums globally. Interactive exhibits, full skeletons, hands-on fossil lab. Budget minimum 1.5-2 hours.",
    details: {
      time: "Oct 12 - 11:15-13:15",
      duration: "1.5-2 hours minimum",
      cost: "$21/adult",
      walking: "Indoor museum walking",
      accessibility: "Fully wheelchair accessible, wheelchairs available",
      tips: "MUST-SEE attraction! Arrive 11:15 AM before noon crowds. Could easily spend 3 hours. Book online recommended."
    }
  },

  {
    coords: [51.4673, -112.7196],
    title: "Day 1: Drumheller Hoodoos",
    category: "photo",
    description: "Iconic mushroom-shaped rock formations (hoodoos) created by millions of years of erosion. Flat 500m boardwalk makes this very accessible. Photo backdrop of Red Deer River valley.",
    details: {
      time: "Oct 12 - 14:00",
      duration: "30-45 minutes",
      cost: "Free parking & entry",
      walking: "500m flat boardwalk (10 min round trip)",
      accessibility: "Fully paved boardwalk, wheelchair accessible",
      tips: "Classic Drumheller photo op. Easy walking, dramatic landscape formations"
    }
  },

  {
    coords: [51.4756, -112.7695],
    title: "Day 1: Rosedale Suspension Bridge (Optional)",
    category: "photo",
    description: "Historic 117m footbridge from 1931 coal mining era. Spans Red Deer River with scenic valley views. Flat walking, charming piece of Drumheller history.",
    details: {
      time: "Oct 12 - 14:45",
      duration: "15-20 minutes",
      cost: "Free",
      walking: "Flat bridge crossing, wheelchair accessible",
      accessibility: "Wheelchair accessible bridge deck",
      tips: "Optional stop between Hoodoos and Calgary drive. Great river valley views, historic landmark"
    }
  },

  {
    coords: [51.0447, -114.0629],
    title: "Day 1: Calgary Tower (Optional)",
    category: "attraction",
    description: "191m observation deck with 360° views of Calgary skyline and Rocky Mountains. Glass floor section! Elevator access to top. Open 9 AM-9 PM.",
    details: {
      time: "Oct 12 - 17:00",
      duration: "30-45 minutes",
      cost: "$18/adult",
      walking: "None - elevator access",
      accessibility: "Fully wheelchair accessible, elevator to top",
      tips: "Optional stop if time/energy. Great city views. Skip if tired to save energy for Day 3 sunrise mission"
    }
  },

  {
    coords: [51.0539, -114.0724],
    title: "Day 1: Prince's Island Park",
    category: "photo",
    description: "Urban park island on Bow River with walking paths and downtown skyline views. Flat riverside trails, peaceful green space in the city. Great for evening stroll.",
    details: {
      time: "Oct 12 - 18:00",
      duration: "30 minutes",
      cost: "Free",
      walking: "Flat paved paths, easy strolling",
      accessibility: "Wheelchair accessible paved trails",
      tips: "Peaceful walk before dinner, nice contrast to mountain scenery, downtown skyline photos"
    }
  },

  {
    coords: [51.0284, -114.0946],
    title: "Day 1: Scotsman's Hill Sunset",
    category: "photo",
    description: "Best Calgary skyline viewpoint! Drive-up access to hilltop with panoramic city views. Golden hour sunset magic over downtown and mountains. Must-do photo stop.",
    details: {
      time: "Oct 12 - 19:00",
      duration: "20-30 minutes",
      cost: "Free",
      walking: "None - drive-up viewpoint",
      accessibility: "Drive-up access, wheelchair accessible viewing",
      tips: "BEST Calgary photo spot! Time for sunset (~7:15 PM October). Bring camera. Popular spot but not too crowded"
    }
  },

  {
    coords: [51.0437, -114.0719],
    title: "Day 1: Calgary Overnight",
    category: "accommodation",
    description: "Stay overnight in Calgary. Downtown has many restaurant options for dinner. Check in, rest up for tomorrow's early Banff adventure.",
    details: {
      time: "Oct 12 - 19:45-22:00",
      duration: "Overnight stay",
      cost: "Staying at friend's house in Edmonton (drive back after trip)",
      walking: "Minimal",
      accessibility: "Full city amenities",
      tips: "Book accommodation near downtown, early bedtime recommended, prepare for Day 3's 4 AM wake-up!"
    }
  },

  // DAY 2 - Banff Town
  {
    coords: [51.2069, -115.5471],
    title: "Day 2: Cascade Ponds",
    category: "photo",
    description: "Small peaceful ponds reflecting Mt. Rundle and surrounding peaks. Morning mist common. Short 5-minute walk from parking to water's edge.",
    details: {
      time: "Oct 13 - 08:45",
      duration: "30 minutes",
      cost: "Included in park pass",
      walking: "5 min walk from parking",
      accessibility: "Gravel path, relatively flat",
      tips: "First stop after entering Banff - buy park pass here at gate station"
    }
  },

  {
    coords: [51.2460, -115.4930],
    title: "Day 2: Lake Minnewanka",
    category: "photo",
    description: "Banff's largest lake at 21km long. Multiple pullouts along scenic drive with mountain and lake views. Watch for bighorn sheep on rocks!",
    details: {
      time: "Oct 13 - 09:30",
      duration: "1 hour scenic drive",
      cost: "Included in park pass",
      walking: "Optional short walks at pullouts (2-5 min)",
      accessibility: "Many viewpoints accessible from car",
      tips: "Drive the full loop, stop at multiple viewpoints, binoculars useful for wildlife"
    }
  },

  {
    coords: [51.2328, -115.5050],
    title: "Day 2: Two Jack Lake",
    category: "photo",
    description: "Smaller, quieter alternative to nearby Lake Minnewanka. Crystal clear water, stunning mountain backdrop. Often less crowded. 2-minute walk to lakeshore.",
    details: {
      time: "Oct 13 - 11:00",
      duration: "20-30 minutes",
      cost: "Included in park pass",
      walking: "2 min walk to shore",
      accessibility: "Short flat path",
      tips: "Great spot for a peaceful break, less touristy than main attractions"
    }
  },

  {
    coords: [51.1784, -115.5708],
    title: "Day 2: Banff Town - Lunch & Shopping",
    category: "town",
    description: "Charming mountain town on Banff Avenue. Browse local shops, grab lunch at cafes, visit Cascade Gardens. 1.5 hours to explore the main street comfortably.",
    details: {
      time: "Oct 13 - 12:00-13:30",
      duration: "1.5 hours",
      cost: "Lunch ~$15-25, street parking $3/hr",
      walking: "Flat sidewalks, easy strolling",
      accessibility: "Fully accessible downtown",
      tips: "Lunch gets busy 12-2PM, side streets have free parking, lots of photo ops!"
    }
  },

  {
    coords: [51.1630, -115.5730],
    title: "Day 2: Vermilion Lakes",
    category: "photo",
    description: "Three connected lakes with Mt. Rundle reflection - THE classic Banff postcard view. Drive between 3 viewpoints along 4km road. Sunset golden hour is magical.",
    details: {
      time: "Oct 13 - 15:00",
      duration: "45 minutes",
      cost: "Included in park pass",
      walking: "Drive between viewpoints (minimal walking)",
      accessibility: "Drive-up viewpoints",
      tips: "Watch for elk! Common here especially evening. Stay 30m away, don't approach"
    }
  },

  {
    coords: [51.1750, -115.5450],
    title: "Day 2: Tunnel Mountain Drive Viewpoint",
    category: "photo",
    description: "Panoramic viewpoint overlooking Banff townsite and Bow Valley. Drive right up to parking area. 360-degree mountain views including Mt. Rundle.",
    details: {
      time: "Oct 13 - 16:00",
      duration: "15-20 minutes",
      cost: "Included in park pass",
      walking: "None - view from parking area",
      accessibility: "Fully accessible drive-up",
      tips: "Quick stop for aerial perspective of town, great for orientation"
    }
  },

  {
    coords: [51.1642, -115.5595],
    title: "Day 2: Surprise Corner Viewpoint",
    category: "photo",
    description: "Classic viewpoint of the iconic Fairmont Banff Springs Hotel (the 'Castle in the Rockies'). Quick parking lot stop with interpretive signs.",
    details: {
      time: "Oct 13 - 16:45",
      duration: "10-15 minutes",
      cost: "Included in park pass",
      walking: "None - parking lot viewpoint",
      accessibility: "Fully accessible",
      tips: "Historic hotel visible in valley, built 1888, great for postcard photos"
    }
  },

  {
    coords: [51.1656, -115.5636],
    title: "Day 2: Bow Falls",
    category: "photo",
    description: "Waterfall on the Bow River below Banff Springs Hotel. Short 50m flat paved walk to viewing platforms. Multiple angles available.",
    details: {
      time: "Oct 13 - 17:30",
      duration: "20 minutes",
      cost: "Included in park pass",
      walking: "50m flat paved path",
      accessibility: "Paved wheelchair-accessible platforms",
      tips: "Last stop before returning to Calgary, NOT as dramatic as Day 3 waterfalls but still nice"
    }
  },

  // DAY 3 - Icefields Parkway (SUNRISE MISSION!)
  {
    coords: [51.4254, -116.1773],
    title: "Day 3: Lake Louise SUNRISE 🌅",
    category: "sunrise",
    description: "THE MAIN EVENT! World-famous turquoise glacial lake at sunrise. Golden light hits Victoria Glacier creating magical reflections. Arrive 75 min before sunrise to set up.",
    details: {
      time: "Oct 14 - 06:30 (arrive) / 07:45 (sunrise)",
      duration: "2 hours (stay until 08:30)",
      cost: "$15 parking",
      walking: "5 min walk from lot to lakeshore",
      accessibility: "Paved lakefront path",
      tips: "LEAVE CALGARY BY 4 AM! Dress WARM (-2°C at dawn). Tripod recommended. Coffee/breakfast before you leave!"
    }
  },

  {
    coords: [51.4550, -116.2850],
    title: "Day 3: Herbert Lake",
    category: "photo",
    description: "Small peaceful lake often empty of tourists. Perfect mirror reflections of surrounding peaks. 2-minute walk from Icefields Parkway roadside parking.",
    details: {
      time: "Oct 14 - 09:00",
      duration: "15-20 minutes",
      cost: "Free roadside pullout",
      walking: "2 min walk",
      accessibility: "Easy flat trail",
      tips: "Often overlooked - you might have it to yourself! Great for peaceful photos post-sunrise rush"
    }
  },

  {
    coords: [51.6752, -116.4708],
    title: "Day 3: Bow Lake & Crowfoot Glacier",
    category: "photo",
    description: "Glacier-fed turquoise lake with Crowfoot Glacier visible in background. Drive-up viewpoint - glacier visible from your car! Historic Num-Ti-Jah Lodge on lakeshore.",
    details: {
      time: "Oct 14 - 09:45",
      duration: "20 minutes",
      cost: "Free roadside pullout",
      walking: "Optional - view from car or short walk",
      accessibility: "Fully accessible from parking",
      tips: "Crowfoot Glacier used to have 3 'toes' - climate change melted one in 1940s"
    }
  },

  {
    coords: [51.7256, -116.5244],
    title: "Day 3: Peyto Lake Viewpoint",
    category: "photo",
    description: "Famous wolf-head shaped lake with vibrant turquoise color. LOWER viewpoint is accessible (5 min walk, wheelchair friendly). Upper viewpoint requires steeper climb.",
    details: {
      time: "Oct 14 - 10:30",
      duration: "30-40 minutes",
      cost: "Free parking lot",
      walking: "Lower viewpoint: 5 min, Upper: 15 min uphill",
      accessibility: "Lower viewpoint wheelchair accessible",
      tips: "STAY AT LOWER VIEWPOINT to save your legs! Color most vibrant mid-morning with sun"
    }
  },

  {
    coords: [51.7183, -116.5697],
    title: "Day 3: Mistaya Canyon",
    category: "photo",
    description: "Narrow limestone canyon carved by Mistaya River. Powerful water rushing through tight gorge. 10-minute walk on flat forest trail to viewing bridge.",
    details: {
      time: "Oct 14 - 11:30",
      duration: "30 minutes",
      cost: "Free parking lot",
      walking: "10 min flat forest trail each way",
      accessibility: "Gravel trail, relatively flat",
      tips: "Longest walk of the day (20 min round trip) - worth it for dramatic canyon views!"
    }
  },

  {
    coords: [51.9836, -116.7847],
    title: "Day 3: Saskatchewan River Crossing",
    category: "services",
    description: "Gas station, small diner, and convenience store. LAST services for 130km! Fill up tank, use restrooms, grab lunch. Only food option until Jasper.",
    details: {
      time: "Oct 14 - 12:15",
      duration: "45 min lunch break",
      cost: "Lunch ~$15, gas prices high (remote location)",
      walking: "None",
      accessibility: "Full facilities",
      tips: "MANDATORY GAS STOP! Next station is 130km north. Use restrooms here!"
    }
  },

  {
    coords: [52.1419, -117.0342],
    title: "Day 3: Weeping Wall",
    category: "photo",
    description: "Massive cliff face with waterfalls. In October often frozen creating huge ice curtains popular with ice climbers. Roadside pullout - view from car!",
    details: {
      time: "Oct 14 - 13:30",
      duration: "10 minutes",
      cost: "Free roadside pullout",
      walking: "None - view from parking",
      accessibility: "Fully accessible",
      tips: "Quick photo stop, dramatic cliff face, watch for ice climbers if frozen"
    }
  },

  {
    coords: [52.2206, -117.2244],
    title: "Day 3: Columbia Icefield Discovery Centre",
    category: "services",
    description: "Visitor center with glacier views, exhibits, gift shop, restrooms. View Athabasca Glacier from building. Base for Ice Explorer tours (optional, expensive).",
    details: {
      time: "Oct 14 - 14:45",
      duration: "30 minutes (or 90 min with Ice Explorer)",
      cost: "Free visitor center | Ice Explorer $115/person optional",
      walking: "Minimal - building exploration",
      accessibility: "Fully accessible modern facility",
      tips: "Restroom stop! Ice Explorer tour is amazing but takes 90 min + $115/person - skip to stay on schedule"
    }
  },

  {
    coords: [52.2156, -117.2419],
    title: "Day 3: Glacier Skywalk 🌉",
    category: "attraction",
    description: "Glass-floor walkway extending 35m over Sunwapta Valley, suspended 280m above canyon floor. Incredible views. 5-min walk from parking, experience takes 30 min total.",
    details: {
      time: "Oct 14 - 15:15",
      duration: "30-40 minutes",
      cost: "$35/person (BOOK AHEAD!)",
      walking: "5 min walk to skywalk",
      accessibility: "Wheelchair accessible walkway",
      tips: "MUST book 2-3 days in advance online! Worth it for the experience and views. Not scary if afraid of heights - very sturdy."
    }
  },

  {
    coords: [52.5217, -117.6331],
    title: "Day 3: Sunwapta Falls",
    category: "photo",
    description: "Two-tiered waterfall on Sunwapta River. Upper viewpoint is 1-min walk, lower viewpoint is 3-min walk. Both flat and accessible.",
    details: {
      time: "Oct 14 - 16:15",
      duration: "20-25 minutes",
      cost: "Free parking",
      walking: "Upper: 1 min, Lower: 3 min (both flat)",
      accessibility: "Paved paths to both viewpoints",
      tips: "Quick stop, both viewpoints recommended, less crowded than Athabasca Falls"
    }
  },

  {
    coords: [52.6648, -117.8813],
    title: "Day 3: Athabasca Falls",
    category: "photo",
    description: "Most powerful waterfall in the Rockies! Multiple viewing platforms showing different angles. 5-min flat walk with paved paths. Dramatic carved limestone canyon.",
    details: {
      time: "Oct 14 - 16:45",
      duration: "30 minutes",
      cost: "Free parking",
      walking: "5 min to main viewpoint, paved paths throughout",
      accessibility: "Multiple wheelchair-accessible platforms",
      tips: "MUST-SEE waterfall! Multiple viewpoints, very photogenic, feels the power of water"
    }
  },

  {
    coords: [53.5444, -113.4909],
    title: "Day 3: Return to Edmonton",
    category: "arrival",
    description: "Drive back to Edmonton via Jasper. Long 3.5 hour drive. Arrive friend's house ~9 PM after epic 17-hour day. REST!",
    details: {
      time: "Oct 14 - 21:00 arrival",
      duration: "3.5 hour drive from Athabasca Falls",
      cost: "Gas ~$50",
      walking: "None",
      accessibility: "Highway driving",
      tips: "Long drive through Jasper, mostly straight highway. You EARNED this rest after 4 AM start!"
    }
  },

  // DAY 4 - Edmonton & Departure
  {
    coords: [53.5228, -113.6247],
    title: "Day 4: West Edmonton Mall",
    category: "town",
    description: "Largest mall in North America! Indoor theme park, waterpark, ice rink, 800+ stores. Spend 2-3 hours exploring and souvenir shopping.",
    details: {
      time: "Oct 15 - 11:30-14:00",
      duration: "2-3 hours",
      cost: "Free entry, shopping varies",
      walking: "Indoor mall walking",
      accessibility: "Fully accessible",
      tips: "Grab lunch here, Alberta beef jerky and maple syrup make great souvenirs"
    }
  },

  {
    coords: [53.5344, -113.5065],
    title: "Day 4: River Valley Viewpoint",
    category: "photo",
    description: "Quick stop at Edmonton's river valley parks - largest urban parkland in North America. Scenic overlook of North Saskatchewan River.",
    details: {
      time: "Oct 15 - 14:00",
      duration: "15-20 minutes",
      cost: "Free",
      walking: "Minimal",
      accessibility: "Accessible viewpoints available",
      tips: "Quick photo op, beautiful river valley system"
    }
  },

  {
    coords: [53.5191, -113.5153],
    title: "Day 4: Old Strathcona - Whyte Avenue",
    category: "town",
    description: "Historic district with trendy shops, cafes, street art, local boutiques. Grab final coffee before airport. Charming neighborhood atmosphere.",
    details: {
      time: "Oct 15 - 15:00-16:00",
      duration: "1 hour",
      cost: "Coffee/snacks ~$10-15",
      walking: "Street strolling",
      accessibility: "Sidewalk accessible",
      tips: "Last chance for souvenirs, final coffee before flight, vibrant local area"
    }
  },

  {
    coords: [53.3098, -113.5799],
    title: "Day 4: Edmonton Airport Departure",
    category: "departure",
    description: "Return rental car by 4:45 PM. Flight to Toronto at 6:45 PM. End of epic Alberta adventure!",
    details: {
      time: "Oct 15 - 16:45-18:45",
      duration: "Check-in and departure",
      cost: "None (flight pre-booked)",
      walking: "Airport walking",
      accessibility: "Full airport facilities",
      tips: "Allow 2 hours at airport, return car with full tank, take final photos, download pics from cameras!"
    }
  }
];

// Implement this in your main.html by replacing the existing routePoints array
