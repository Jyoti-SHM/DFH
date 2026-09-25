const HOTEL_TYPES = [
  { id:'resort-leisure', name:'Resort & Leisure Hotels', tag:'Where the booking decision is really a daydream.',
    challenge:'Long consideration windows, high-value packages, and guests comparing five open tabs before they book.',
    blurb:'Guests decide on a resort by imagining themselves there first — visuals, itinerary content and influencer trust close the sale before the OTA price does.' },
  { id:'business-hotels', name:'Business Hotels', tag:'Booked by a policy, chosen by a calendar.',
    challenge:'Corporate travel managers and last-minute bookers comparing location, loyalty points and Wi-Fi speed, not brochures.',
    blurb:'Business travellers decide on proximity, reliability and speed — the site needs to answer in ten seconds, and the B2B relationship needs to live on LinkedIn, not just Instagram.' },
  { id:'boutique-hotels', name:'Boutique Hotels', tag:'The property is the personality.',
    challenge:'Small inventory, high margin, guests seeking a story worth telling — competing against big-brand budgets with none of the scale.',
    blurb:'With a handful of rooms, there is no room for a generic pitch. Every touchpoint has to carry the same distinct voice, from the Instagram grid to the guest directory on the nightstand.' },
  { id:'luxury-hotels', name:'Premium & Luxury Hotels', tag:'Discretion is a marketing strategy.',
    challenge:'A guest who researches privately, trusts referral and press over ads, and expects every digital touchpoint to match the physical experience.',
    blurb:'Luxury guests rarely click an ad — they search a name they already trust. The work is building that trust everywhere, quietly, before the booking window even opens.' },
  { id:'serviced-apartments', name:'Serviced Apartments', tag:"Booked for a month, judged in a minute.",
    challenge:'Relocation agents, long-stay corporates and remote workers comparing square footage, kitchen photos and lease flexibility.',
    blurb:'The decision looks more like renting an apartment than booking a hotel room. Search visibility and honest floor-plan photography do more work than any campaign.' },
  { id:'villas-homestays', name:'Villas & Homestays', tag:"Sold on trust before it's sold on space.",
    challenge:'Owners without a hotel brand behind them, competing on Instagram-worthy photos, host reviews and word of mouth.',
    blurb:'A villa with no brand recognition earns trust entirely through what a guest can see and who has already stayed. Visuals and social proof carry the whole pitch.' },
  { id:'budget-hotels', name:'Budget Hotels', tag:'Won on price, kept on proof.',
    challenge:'Price-sensitive, high-volume, OTA-dependent bookers who need clean, honest photos and fast pages more than a brand story.',
    blurb:'Margins are thin and volume is everything. The win is showing up in the first three search results and converting fast, on a page that loads before the guest loses patience.' },
  { id:'hotel-groups', name:'Groups of Hotels', tag:'One brand, many properties, one story that has to hold.',
    challenge:'Consistent brand voice across properties with different local teams, plus the reporting complexity of marketing at portfolio scale.',
    blurb:"A group's biggest risk isn't a bad campaign at one property — it's twelve inconsistent ones running at once. The work is building a system, not a single site." },
];

const SERVICES = [
  { id:'social-media', name:'Social Media Marketing', tag:'The feed guests scroll before they ever open a booking site.',
    desc:'Ongoing content, community management and platform strategy built around your occupancy calendar, not a generic content bank.',
    ai:'AI-assisted caption drafting and trend-spotting keep the calendar full without slowing the team down.',
    perType:{ 'resort-leisure':'Content built around packages, seasons and the daydream of a holiday, not room specs.',
      'business-hotels':'Fewer posts, more proof — Wi-Fi speed, meeting rooms and loyalty perks, answered fast.',
      'boutique-hotels':"Every post carries the property's specific voice — no stock hospitality captions.",
      'luxury-hotels':'Restrained posting, high production value — presence over volume.',
      'serviced-apartments':'Floor plans, neighbourhood life and long-stay value, not turndown service.',
      'villas-homestays':'Guest photos and reviews reshared as proof, since the owner has no brand behind them.',
      'budget-hotels':"High-frequency, low-frills posts that answer 'is it clean and is it close.'",
      'hotel-groups':'One voice, adapted per property, run on a shared content system.' } },

  { id:'seo', name:'SEO', tag:'Ranking for the search that happens before the OTA does.',
    desc:'Technical, local and content SEO built for how travellers actually search — by destination, by experience, by comparison.',
    ai:'AI-assisted keyword clustering and content briefs speed up what used to take a full content sprint.',
    perType:{ 'resort-leisure':'Ranks for destination + experience searches, not just the hotel name.',
      'business-hotels':"Optimized for 'near [business district]' and last-minute, high-intent searches.",
      'boutique-hotels':'Long-tail content around the story, not a head-on fight for generic hotel keywords.',
      'luxury-hotels':'Authority-building content and reputation — luxury guests search a name they trust.',
      'serviced-apartments':'Optimized like a rental listing — square footage, lease terms, neighbourhood.',
      'villas-homestays':"Local and long-tail SEO, since there's no brand search volume to lean on.",
      'budget-hotels':'Fast technical SEO — page speed and local-pack ranking win the volume game.',
      'hotel-groups':'Portfolio-wide architecture so each property ranks without competing with its sister properties.' } },

  { id:'ppc', name:'PPC', tag:'Paid visibility for the exact week your rooms are empty.',
    desc:'Search, display and metasearch campaigns tuned to occupancy gaps, not a flat monthly budget.',
    ai:'AI-driven bid management and ad-copy testing keep cost-per-booking down as seasons shift.',
    perType:{ 'resort-leisure':'Seasonal campaigns timed to shoulder-season gaps and package promotions.',
      'business-hotels':'Always-on search campaigns for last-minute, high-intent corporate bookers.',
      'boutique-hotels':"Small, precise budgets — a handful of the right searches, not broad reach.",
      'luxury-hotels':'Selective, brand-safe placements; volume is never the goal.',
      'serviced-apartments':'Campaigns built around relocation and corporate-housing search terms.',
      'villas-homestays':'Retargeting-led — most of the budget goes to people who already looked.',
      'budget-hotels':'Volume-driven campaigns optimized purely for cost-per-booking.',
      'hotel-groups':'Centralized budget allocation across properties based on real-time occupancy gaps.' } },

  { id:'content-shoot', name:'Content Shoot', tag:'The photos that do the selling before anyone reads a word.',
    desc:'Professional photography and video, planned around light, season and the story each room type needs to tell.',
    ai:'AI-assisted shot-listing and post-production shortlisting keep turnaround fast without cutting the shoot day short.',
    perType:{ 'resort-leisure':'Pool, beach and activity coverage shot at the golden-hour moment guests imagine.',
      'business-hotels':'Meeting rooms, business centre and work-desk shots, shot clean and fast.',
      'boutique-hotels':'Every corner shot — the design details are the whole pitch.',
      'luxury-hotels':'Editorial-grade photography and video that matches a five-star print campaign.',
      'serviced-apartments':'Honest, wide-angle floor-plan photography — no wide-lens exaggeration.',
      'villas-homestays':'Lifestyle-first shoot styled like a magazine feature, not a listing photo set.',
      'budget-hotels':'Clean, well-lit, honest photos — the goal is trust, not glamour.',
      'hotel-groups':'A shared visual style guide applied consistently, property by property.' } },

  { id:'influencer-marketing', name:'Influencer Marketing', tag:'Borrowed trust, aimed at the right audience.',
    desc:'Curated influencer partnerships matched to your guest profile — not the biggest follower count, the right one.',
    ai:'AI-assisted influencer shortlisting filters for audience match and engagement quality, not vanity metrics.',
    perType:{ 'resort-leisure':'Travel and lifestyle creators who sell the getaway, not just the room.',
      'business-hotels':'Business-travel and productivity creators over lifestyle influencers.',
      'boutique-hotels':'Niche creators whose aesthetic genuinely matches the property, not reach alone.',
      'luxury-hotels':'A small number of high-trust creators and press, never volume-driven seeding.',
      'serviced-apartments':'Relocation, remote-work and expat-life creators.',
      'villas-homestays':'Creator stays that generate the photo and review proof the villa needs most.',
      'budget-hotels':'Budget-travel and backpacker creators focused on honest value content.',
      'hotel-groups':'Coordinated creator campaigns run once across the portfolio, not property by property.' } },

  { id:'youtube-marketing', name:'YouTube Marketing', tag:'Long-form trust for a long-stay decision.',
    desc:'Channel strategy, video content and optimization for the searches that happen when a guest is seriously considering, not just scrolling.',
    ai:'AI-assisted script drafting and chapter/SEO tagging cut production time per video.',
    perType:{ 'resort-leisure':'Property tours and destination guides for the long research phase before booking.',
      'business-hotels':'Short, practical videos — location, amenities, meeting spaces — no fluff.',
      'boutique-hotels':"Story-driven video that gives the property the narrative big brands can't fake.",
      'luxury-hotels':'Cinematic property films built for press and referral, not ad inventory.',
      'serviced-apartments':'Walkthrough videos that function like a rental viewing.',
      'villas-homestays':"Host-led video tours that build trust a listing photo can't.",
      'budget-hotels':'Short, honest walkthroughs that answer questions before a guest asks them.',
      'hotel-groups':'A recurring format applied across properties, cut down for local relevance.' } },

  { id:'website-design', name:'Website Design', tag:'The one property page you actually control.',
    desc:'Fast, mobile-first booking websites built to convert direct — not to lose the margin to OTA commission.',
    ai:'AI-assisted copywriting and layout drafts speed up build time without flattening the design into a template.',
    perType:{ 'resort-leisure':'Visual-first design with a booking engine built for package upsells.',
      'business-hotels':'Fast-loading, mobile-first, built for a traveller booking in the departure lounge.',
      'boutique-hotels':'Fully custom design — a template would undercut the whole brand.',
      'luxury-hotels':"Restrained, editorial design that matches the physical property's discretion.",
      'serviced-apartments':'Built like a rental platform — filters, floor plans, lease terms up front.',
      'villas-homestays':'Simple, trust-first design with reviews and photos doing the heavy lifting.',
      'budget-hotels':'Stripped down for speed — every extra element is a lost booking.',
      'hotel-groups':'One architecture, multiple properties, consistent booking flow across all of them.' } },

  { id:'pre-opening', name:'Pre-Opening', tag:'Building the waitlist before the doors do.',
    desc:'A structured digital build-up — brand, booking readiness and buzz — timed to your opening date, not your marketing budget.',
    ai:'AI-assisted launch-content planning keeps the pre-opening calendar consistent across a compressed timeline.',
    perType:{ 'resort-leisure':'Builds anticipation around the destination and experience before a room is live.',
      'business-hotels':'Positions the property to corporate accounts and travel managers before launch.',
      'boutique-hotels':"Introduces the story and the owner's point of view before the ribbon-cutting.",
      'luxury-hotels':'Press- and referral-first build-up, timed for a quiet, high-trust launch.',
      'serviced-apartments':'Targets relocation agents and corporate-housing buyers ahead of first occupancy.',
      'villas-homestays':'Builds the review and photo base fast, since trust starts at zero.',
      'budget-hotels':'Focuses on OTA readiness and local search visibility from day one.',
      'hotel-groups':'A repeatable pre-opening playbook, run per property as the portfolio expands.' } },

  { id:'linkedin-marketing', name:'LinkedIn Marketing', tag:'Where the corporate booking relationship actually lives.',
    desc:'B2B presence and outreach for the travel managers, event planners and MICE buyers who never see your Instagram.',
    ai:'AI-assisted outreach drafting and lead-list building shorten the B2B sales cycle.',
    perType:{ 'resort-leisure':'Reaches MICE and event planners booking resort conferences and offsites.',
      'business-hotels':'The primary channel — corporate travel managers live here, not on Instagram.',
      'boutique-hotels':'Used sparingly, mostly for press and partnership relationships.',
      'luxury-hotels':'Executive-level presence for referral partnerships and high-value corporate accounts.',
      'serviced-apartments':'Direct outreach to relocation agents and corporate housing desks.',
      'villas-homestays':'Rarely the priority channel — used mainly for event or retreat bookings.',
      'budget-hotels':'Used for procurement and corporate-rate partnerships, not brand-building.',
      'hotel-groups':'Portfolio-level presence for investor, partnership and corporate-account relationships.' } },

  { id:'brand-collaterals', name:'Brand Collaterals', tag:"Everything a guest touches that isn't a screen.",
    desc:'Menus, signage, in-room directories and print collateral designed to match the digital brand, not undercut it.',
    ai:'AI-assisted copy drafting for menus and directories keeps tone consistent across dozens of touchpoints.',
    perType:{ 'resort-leisure':'Menus and signage that carry the same resort-holiday feel as the ads.',
      'business-hotels':'Clean, functional collateral — directories and signage that just work.',
      'boutique-hotels':'Every printed piece is a brand touchpoint, designed with the same care as the logo.',
      'luxury-hotels':'Print quality and material choices that match a five-star physical experience.',
      'serviced-apartments':'Practical collateral — welcome guides, lease info, neighbourhood directories.',
      'villas-homestays':'A simple welcome book and signage that make an unbranded stay feel considered.',
      'budget-hotels':'Straightforward, cost-efficient signage and directories, built for durability.',
      'hotel-groups':'A single collateral system templated and rolled out property by property.' } },
];

const TIER_META = {
  standard:{ label:'Standard', desc:'The essentials, run properly — for properties starting to take digital seriously.' },
  gold:{ label:'Gold', desc:'Broader reach and more frequent output — for properties actively growing direct bookings.' },
  platinum:{ label:'Platinum', desc:'A dedicated specialist and full-scale execution — for properties treating marketing as core infrastructure.' },
  custom:{ label:'Custom', desc:'A scoped, negotiated version of Platinum for properties with specific needs — priced on request.' },
};

const WHY_US = {
  hotelTypes: {
    'resort-leisure': [
      { title:'We think in seasons, not sprints', blurb:'Campaigns and content are planned around your shoulder-season gaps and peak pricing, not a flat monthly retainer.' },
      { title:'A visual-first team', blurb:'In-house content shoots and reels built to sell the holiday, not just the hotel.' },
      { title:'Package-ready booking flow', blurb:'Website and PPC built to upsell add-ons and offers, not just book a room.' }
    ],
    'business-hotels': [
      { title:'We speak corporate travel', blurb:'LinkedIn and B2B outreach handled by people who understand travel managers, not just hashtags.' },
      { title:'Built for speed', blurb:'Fast, mobile-first sites and PPC tuned for a traveller booking in ten seconds.' },
      { title:'Reliability over flash', blurb:'Reporting and account management run on a schedule your ops team can plan around.' }
    ],
    'boutique-hotels': [
      { title:'One voice, everywhere', blurb:"Every touchpoint, from Instagram to your in-room directory, carries the same specific brand voice." },
      { title:'Small inventory, sharp focus', blurb:'Budgets aimed at the searches and creators that actually match your property, not broad reach.' },
      { title:"We don't hand you a template", blurb:"Every design and campaign is built from your property's own story." }
    ],
    'luxury-hotels': [
      { title:'Discretion, done deliberately', blurb:'Campaigns built for referral and trust, not volume.' },
      { title:'Editorial-grade output', blurb:'Photography, video and copy held to a five-star standard, matching the physical experience.' },
      { title:'A dedicated strategist', blurb:'Platinum-tier properties get one point of contact who knows the brand, not a rotating account team.' }
    ],
    'serviced-apartments': [
      { title:'We market like a rental, not a resort', blurb:'Floor plans, lease terms and neighbourhood content take priority over spa photos.' },
      { title:'Built for long-stay decisions', blurb:'SEO and PPC tuned for corporate housing and relocation searches.' },
      { title:'Honest photography', blurb:'No wide-lens exaggeration — what you see is what a guest gets.' }
    ],
    'villas-homestays': [
      { title:'Trust-building from zero', blurb:'Social proof, reviews and host-led content do the work a hotel brand would normally do.' },
      { title:'Lean plans that still convert', blurb:'Standard and Gold tiers built for owner-run properties without agency-sized budgets.' },
      { title:'Creator partnerships that fit', blurb:'Influencer matches chosen for aesthetic fit, not follower count.' }
    ],
    'budget-hotels': [
      { title:'Every rupee aimed at bookings', blurb:'Lean Standard and Gold plans built for cost-per-booking, not brand theatre.' },
      { title:'Fast, honest, searchable', blurb:'Pages built for speed and local search — the two things that actually move volume bookings.' },
      { title:"No wasted spend", blurb:"We skip the expensive tactics that don't pay back at budget rates." }
    ],
    'hotel-groups': [
      { title:'One system, many properties', blurb:'A shared playbook and reporting structure that scales without twelve inconsistent campaigns.' },
      { title:'Portfolio-level strategy', blurb:'Budget and creative decisions made with the whole group in view, not property by property.' },
      { title:'Built for handoffs', blurb:'Documentation and brand systems that survive local team turnover.' }
    ],
  },
  services: {
    'social-media': [
      { title:'Content built around your calendar', blurb:'Planned against your actual occupancy and events, not a generic monthly content bank.' },
      { title:'AI-assisted, human-approved', blurb:'Trend-spotting and draft captions speed up the work; a strategist still signs off on every post.' },
      { title:'Reporting you can act on', blurb:'Benchmarks tied to bookings, not just likes.' }
    ],
    'seo': [
      { title:'We rank for how travellers actually search', blurb:"By destination and experience, not just your hotel's name." },
      { title:'Technical fundamentals first', blurb:'Site speed and crawlability fixed before a single blog post gets written.' },
      { title:'Local search taken seriously', blurb:'Google Business Profile and citations treated as a core deliverable, not an afterthought.' }
    ],
    'ppc': [
      { title:'Spend follows the empty rooms', blurb:'Campaigns tuned to occupancy gaps, not a flat monthly budget regardless of season.' },
      { title:"Tracking that's actually set up right", blurb:'Conversions tied to real bookings, so you know what is working.' },
      { title:'No budget wasted on browsers', blurb:'Remarketing and audience targeting built to catch people who already looked.' }
    ],
    'content-shoot': [
      { title:'Shot for how the room actually books', blurb:'Coverage planned around the story each space needs to tell, not a generic shot list.' },
      { title:'Fast turnaround', blurb:'Edited galleries delivered in days, not months.' },
      { title:'One shoot, every channel', blurb:'A single day of production stocks your website, social and print for a full season.' }
    ],
    'influencer-marketing': [
      { title:'Matched, not just booked', blurb:'Creators chosen for audience fit, not follower count.' },
      { title:'We handle the awkward part', blurb:"Negotiation, briefing and usage rights managed so you don't have to chase anyone." },
      { title:'AI-assisted shortlisting', blurb:'Engagement and audience quality checked before a single DM goes out.' }
    ],
    'youtube-marketing': [
      { title:'Built for the research phase', blurb:"Long-form content for the guest who's seriously considering, not just scrolling." },
      { title:'Search-optimized from the start', blurb:'Every video tagged and structured to actually get found.' },
      { title:'A format that scales', blurb:'One recurring series concept, produced consistently instead of one-off uploads.' }
    ],
    'website-design': [
      { title:'Built to convert direct', blurb:'Every page designed to win bookings back from OTA commission.' },
      { title:'Fast by default', blurb:'Mobile-first, built for a traveller with a slow connection and no patience.' },
      { title:'Booking engine integration, not just a pretty homepage', blurb:'The site is judged on bookings, not awards.' }
    ],
    'pre-opening': [
      { title:'A real countdown, not a scramble', blurb:'A structured calendar building toward your opening date, not a rushed launch week.' },
      { title:'Buzz before the brand is even finished', blurb:'Waitlist and social presence built while construction is still underway.' },
      { title:'Press and local outreach handled', blurb:'Media and local relationships built before you need them.' }
    ],
    'linkedin-marketing': [
      { title:'We reach the people who actually book corporate stays', blurb:'Travel managers and MICE planners, not just followers.' },
      { title:'Executive presence, not ghostwriting awkwardness', blurb:'Leadership content that still sounds like your GM.' },
      { title:'B2B lead lists, not just posts', blurb:'Outreach built to fill a pipeline, not just an engagement report.' }
    ],
    'brand-collaterals': [
      { title:'Every printed touchpoint matches the brand online', blurb:'Menus and signage held to the same standard as the website.' },
      { title:'One system, not one-off requests', blurb:'A style guide that makes every future request faster.' },
      { title:'Print-ready, not just pretty', blurb:'Files delivered ready for your vendor, no back-and-forth.' }
    ],
  }
};

const PLANS = {"social-media":{"name":"Social Media Marketing","tiers":[{"key":"standard","name":"Standard","note":null,"code":"SMSD","price":10000,"priceLabel":null,"items":["Social media strategy & planning","Monthly content calendar","Content creation","2 posts","4 reels","Social media reporting & analytics"]},{"key":"gold","name":"Gold","note":null,"code":"SMGL","price":25000,"priceLabel":null,"items":["Social media strategy & planning","Monthly content calendar","Content creation & copywriting","4 posts","8 reels","15 Stories","Community management","Social media reporting & analytics","2 competitor benchmarking","Festive & seasonal campaigns"]},{"key":"platinum","name":"Platinum","note":null,"code":"SMPT","price":60000,"priceLabel":null,"items":["Social media strategy & planning","Monthly content calendar","Content creation & copywriting","Creative design","6 posts","12 reels","Stories & daily updates","Community management","Social media reporting & analytics","4 competitor benchmarking","Festive & seasonal campaigns","Staycation campaigns","Wedding & banquet promotions","Spa & wellness promotions","Influencer coordination"]},{"key":"custom","name":"Custom","note":null,"code":"SMCT","price":null,"priceLabel":"Pricing on request","items":["Social media strategy & planning","Monthly content calendar","Content creation & copywriting","Creative design","posts","reels","Stories & daily updates","Community management","Social media reporting & analytics","competitor benchmarking","Festive & seasonal campaigns","Staycation campaigns","Wedding & banquet promotions","Spa & wellness promotions","Influencer coordination"]}]},"seo":{"name":"SEO","tiers":[{"key":"standard","name":"Standard","note":null,"code":"SEOSD","price":10000,"priceLabel":null,"items":["Google Business Profile (GBP) Aggressive Optimization","On-Page SEO Optimization (One Time)","Basic Technical SEO Audit (One Time)","Keywords","Foundational Backlinks","Deliverable & Reporting","Foundational GEO"]},{"key":"gold","name":"Gold","note":null,"code":"SEOGL","price":25000,"priceLabel":null,"items":["Full technical audit with priority fixes & core code cleanup","Schema + Robots.txt Optimization","3 high-intent SEO blogs/articles per month with FAQ schema","15 high-quality, relevant backlinks per month","15 keywords ( 10 primary + 5 secondary )","Standard page-speed optimization, basic monitoring","GBP optimization for local visibility + 5 GBP Posts","2 competitors tracked per month","Setup + monitoring + monthly insights report","Booking/enquiry CTA & landing page recommendations","Strategic internal linking across the site","Detailed Report Discussions (Once in a month)","Foundational GEO"]},{"key":"platinum","name":"Platinum","note":null,"code":"SEOPT","price":60000,"priceLabel":null,"items":["Advanced technical SEO, speed, crawlability & Core Web Vitals fixes + continuous optimization","Schema + Robots.txt Optimization","6 high-intent SEO blogs/articles per month with FAQs","40 high-quality, relevant backlinks per month","25 keywords (15 primary + 10 secondary)","AEO for top 10 primary keywords for maximum AI-answer coverage","Content structured for AI-answer eligibility","GBP + local search optimization + 12 GBP Posts","5 competitors tracked per month","AI-driven report with YoY & MoM growth intelligence (Every 15 Days)","Booking/enquiry CTA & landing page recommendations","Strategic internal linking across the site","Detailed Report Discussions (Once in a month)","Virtual meet every 15 days to discuss updates","Foundational GEO"]},{"key":"custom","name":"Custom","note":null,"code":"SEOCT","price":null,"priceLabel":"Pricing on request","items":["Advanced technical SEO, speed, crawlability & Core Web Vitals fixes + continuous optimization","Schema + Robots.txt Optimization","high-intent SEO blogs/articles per month with FAQs","high-quality, relevant backlinks per month","keywords","AEO for top primary keywords for maximum AI-answer coverage","Content structured for AI-answer eligibility","GBP + local search optimization + GBP Posts","competitors tracked per month","AI-driven report with YoY & MoM growth intelligence (Every 15 Days)","Booking/enquiry CTA & landing page recommendations","Strategic internal linking across the site","Detailed Report Discussions (Once in a month)","Virtual meet","Foundational GEO"]}]},"ppc":{"name":"PPC","tiers":[{"key":"standard","name":"Standard","note":null,"code":"PPCSD","price":10000,"priceLabel":null,"items":["Ad account setup","1 Platform ad management","Ad Performance Reporting"]},{"key":"gold","name":"Gold","note":null,"code":"PPCGL","price":20000,"priceLabel":null,"items":["Ad account setup","2 Platforms ad management","Remarketing & Retargeting","Budget & Bid Management","Lead Generation & Direct Booking Campaigns","Revenue & ROAS Optimisation","Ad Performance Reporting"]},{"key":"platinum","name":"Platinum","note":null,"code":"PPCPT","price":30000,"priceLabel":null,"items":["Ad account setup","4 Platforms ad management","Paid Media Strategy","Creative & Ad Copy Strategy","Landing Page & Conversion Optimisation","Remarketing & Retargeting","Budget & Bid Management","Lead Generation & Direct Booking Campaigns","Revenue & ROAS Optimisation","Ad Performance Reporting"]},{"key":"custom","name":"Custom","note":null,"code":"PPCCT","price":null,"priceLabel":"Pricing on request","items":["Ad account setup","Platforms ad management","Paid Media Strategy","Creative & Ad Copy Strategy","Landing Page & Conversion Optimisation","Remarketing & Retargeting","Budget & Bid Management","Lead Generation & Direct Booking Campaigns","Revenue & ROAS Optimisation","Ad Performance Reporting"]}]},"content-shoot":{"name":"Content Shoot","tiers":[{"key":"standard","name":"Standard","note":"Standard (half-day shoot)","code":"CSSD","price":30000,"priceLabel":null,"items":["1 basic content shoot","Concept development","Creative direction","Shot lists","References","12-15 edited images","4 reels"]},{"key":"gold","name":"Gold","note":"Gold (full-day shoot)","code":"CSGL","price":60000,"priceLabel":null,"items":["1 conceptual or 2 basic content shoots","Concept development","Creative direction","Shot lists","Moodboard","30 edited images","1 Main reel","9 reels","Raw Data","Event coverage","500 GB cloud data storage"]},{"key":"platinum","name":"Platinum","note":"Platinum (multi-day shoot)","code":"CSPT","price":100000,"priceLabel":null,"items":["2 conceptual or 4 basic content shoots","Concept development","Creative direction","Shot lists","Moodboard","60 edited images","12 reels","Raw Data","1 Hero film","Drone photography*","Drone videography*","Podcast shoot","OTA photography","Event coverage","Model shoots","2 TB cloud data storage"]},{"key":"custom","name":"Custom","note":null,"code":"CSCT","price":null,"priceLabel":"Pricing on request","items":["conceptual or basic content shoots","Concept development","Creative direction","Shot lists","Moodboard","edited images","reels","Raw Data","Hero film","Drone photography*","Drone videography*","Podcast shoot","OTA photography","Event coverage","Model shoots","cloud data storage"]}]},"influencer-marketing":{"name":"Influencer Marketing","tiers":[{"key":"gold","name":"Gold","note":null,"code":"IMGL","price":10000,"priceLabel":null,"items":["Influencer strategy","Influencer discovery & research","Influencer shortlisting","3 Nano/micro influencer","Influencer coordination","Negotiation & commercial management","Content approval","Performance reporting"]},{"key":"platinum","name":"Platinum","note":null,"code":"IMPT","price":20000,"priceLabel":null,"items":["Influencer strategy","Influencer discovery & research","Influencer shortlisting","6 Nano/micro influencer","1 Macro/Celebrity influencer","Content brief development","Influencer coordination","Negotiation & commercial management","Content approval","Campaign tracking","Performance reporting","UGC generation"]},{"key":"custom","name":"Custom","note":null,"code":"IMCT","price":null,"priceLabel":"Pricing on request","items":["Influencer strategy","Influencer discovery & research","Influencer shortlisting","Nano/micro influencer","Macro/Celebrity influencer","Content brief development","Influencer coordination","Negotiation & commercial management","Content approval","Campaign tracking","Performance reporting","UGC generation"]}]},"youtube-marketing":{"name":"YouTube marketing","tiers":[{"key":"gold","name":"Gold","note":null,"code":"YTGL","price":10000,"priceLabel":null,"items":["Channel setup & optimisation","Channel branding","Video Uploads","Basic Video SEO","Monthly Performance analytics"]},{"key":"platinum","name":"Platinum","note":null,"code":"YTPT","price":20000,"priceLabel":null,"items":["YouTube channel strategy","Channel setup & optimisation","Channel branding","Video content strategy","Video Uploads","Video SEO","Thumbnail design","Playlist strategy","Channel management","15 day Performance analytics"]},{"key":"custom","name":"Custom","note":null,"code":"YTCT","price":null,"priceLabel":"Pricing on request","items":["YouTube channel strategy","Channel setup & optimisation","Channel branding","Video content strategy","Video Uploads","Video SEO","Thumbnail design","Playlist strategy","Channel management","Performance analytics"]}]},"website-design":{"name":"Website Design","tiers":[{"key":"standard","name":"Standard","note":null,"code":"WDSD","price":30000,"priceLabel":null,"items":["Hotel website design upto 6 pages","UX/UI design","Mobile-first design","1 Contact Us/Lead-generation form","SEO-friendly architecture","Analytics & conversion tracking"]},{"key":"gold","name":"Gold","note":null,"code":"WDGL","price":60000,"priceLabel":null,"items":["Hotel website design upto 12 pages","UX/UI design","Mobile-first design","Events pages","2 Contact Us/Lead-generation form","WhatsApp integration","Booking engine integration","Website speed optimisation","SEO-friendly architecture","Analytics & conversion tracking"]},{"key":"platinum","name":"Platinum","note":null,"code":"WDPT","price":100000,"priceLabel":null,"items":["Hotel website design upto 24 pages","Website redesign","UX/UI design","Mobile-first design","Hotel booking journey optimisation","Events pages","4 Contact Us/Lead-generation form","2 Landing-page designs","WhatsApp integration","Booking engine integration","CRM/API integrations","Website speed optimisation","SEO-friendly architecture","Analytics & conversion tracking"]},{"key":"custom","name":"Custom","note":null,"code":"WDCT","price":null,"priceLabel":"Pricing on request","items":["Hotel website design upto 24 pages","Website redesign","UX/UI design","Mobile-first design","Hotel booking journey optimisation","Events pages","Contact Us/Lead-generation form","Landing-page design","WhatsApp integration","Booking engine integration","CRM/API integrations","Website speed optimisation","SEO-friendly architecture","Analytics & conversion tracking"]}]},"pre-opening":{"name":"Pre-Opening Marketing","tiers":[{"key":"standard","name":"Standard","note":null,"code":"POSD","price":10000,"priceLabel":null,"items":["Pre-opening marketing strategy","Brand launch strategy","Digital launch roadmap","Social media pre-launch campaign","Coming-soon campaign"]},{"key":"gold","name":"Gold","note":null,"code":"POGL","price":20000,"priceLabel":null,"items":["Pre-opening marketing strategy","Brand launch strategy","Digital launch roadmap","Social media pre-launch campaign","Coming-soon campaign","Brand photography","Property shoot","Room & F&B content creation","Influencer strategy","Google Business Profile setup"]},{"key":"platinum","name":"Platinum","note":null,"code":"POPT","price":30000,"priceLabel":null,"items":["Pre-opening marketing strategy","Brand launch strategy","Digital launch roadmap","Social media pre-launch campaign","Coming-soon campaign","Brand photography","Property shoot","Room & F&B content creation","Influencer strategy","PR/digital buzz campaigns","Google Business Profile setup","Recruitment branding","Post-opening campaign strategy"]},{"key":"custom","name":"Custom","note":null,"code":"POCT","price":null,"priceLabel":"Pricing on request","items":["Pre-opening marketing strategy","Brand launch strategy","Digital launch roadmap","Social media pre-launch campaign","Coming-soon campaign","Brand photography","Property shoot","Room & F&B content creation","Influencer strategy","PR/digital buzz campaigns","Google Business Profile setup","Recruitment branding","Post-opening campaign strategy"]}]},"linkedin-marketing":{"name":"LinkedIn Marketing","tiers":[{"key":"standard","name":"Standard","note":null,"code":"LMSD","price":10000,"priceLabel":null,"items":["LinkedIn strategy","Corporate brand positioning","Company page management","Content calendar","8 posts & 1 video","Corporate storytelling","Leadership communication","Analytics & reporting"]},{"key":"gold","name":"Gold","note":null,"code":"LMGL","price":20000,"priceLabel":null,"items":["LinkedIn strategy","Corporate brand positioning","Company page management","Content calendar","12 posts & 3 videos","Corporate storytelling","Leadership communication","GM / leadership profiles","Employer branding","Employee advocacy","Recruitment communication","Awards & achievements","Analytics & reporting"]},{"key":"platinum","name":"Platinum","note":null,"code":"LMPT","price":30000,"priceLabel":null,"items":["LinkedIn strategy","Corporate brand positioning","Company page management","Content calendar","15 posts & 5 videos","Corporate storytelling","Leadership communication","GM / leadership profiles","Employer branding","Employee advocacy","Recruitment communication","Awards & achievements","CSR communication","Sustainability communication","Corporate events","MICE communication","Business partnerships","Industry thought leadership","Hotel milestones","LinkedIn campaigns","Analytics & reporting"]},{"key":"custom","name":"Custom","note":null,"code":"LMCT","price":null,"priceLabel":"Pricing on request","items":["LinkedIn strategy","Corporate brand positioning","Company page management","Content calendar","posts & videos","Corporate storytelling","Leadership communication","GM / leadership profiles","Employer branding","Employee advocacy","Recruitment communication","Awards & achievements","CSR communication","Sustainability communication","Corporate events","MICE communication","Business partnerships","Industry thought leadership","Hotel milestones","LinkedIn campaigns","Analytics & reporting"]}]},"brand-collaterals":{"name":"Brand Collaterals","tiers":[{"key":"standard","name":"Standard","note":null,"code":"BCSD","price":10000,"priceLabel":null,"items":["Brand guidelines","Hotel brand presentations","1 Sales presentation","1 Corporate brochure","1 Hotel brochures","1 F&B menus","1 Menu card","1 Tent card","2 Flyers","2 Posters","1 Standee","Digital invitations","Event invitations"]},{"key":"gold","name":"Gold","note":null,"code":"BCGL","price":20000,"priceLabel":null,"items":["Brand guidelines","Hotel brand presentations","1 presentation","1 Corporate brochure","1 Hotel brochures","1 F&B menus","2 Menu cards","2 Tent cards","2 Flyers","2 Posters","1 Standees","1 Digital invitations","1 Event invitations","1 Wedding collateral","4 Banquet collateral","4 Spa collateral","4 Room collateral","2 In-room dining collateral","1 Welcome cards","1 Guest communication material","4 Signage & wayfinding"]},{"key":"platinum","name":"Platinum","note":null,"code":"BCPT","price":50000,"priceLabel":null,"items":["Brand guidelines","Hotel brand presentations","1 presentation","1 Corporate brochure","1 Hotel brochures","1 F&B menus","3 Menu cards","4 Tent card","4 Flyers","4 Posters","1 Standees","1 Digital invitations","1 Event invitations","1 Wedding collateral","4 Banquet collateral","4 Spa collateral","4 Room collateral","2 In-room dining collateral","1 Welcome cards","1 Guest communication material","4 Signage & wayfinding","1 Outdoor branding","4 Digital screens","2 Emailers","2 Corporate gifting collateral","4 Social media templates","2 Campaign key visuals"]},{"key":"custom","name":"Custom","note":null,"code":"BCCT","price":null,"priceLabel":"Pricing on request","items":["Brand guidelines","Hotel brand presentations","Sales presentations","Corporate brochures","Hotel brochures","F&B menus","Menu cards","Tent cards","Flyers","Posters","Standees","Digital invitations","Event invitations","Wedding collateral","Banquet collateral","Spa collateral","Room collateral","In-room dining collateral","Welcome cards","Guest communication material","Signage & wayfinding","Outdoor branding","Digital screens","Emailers","Corporate gifting collateral","Social media templates","Campaign key visuals"]}]}}
;
const HOTEL_PLAN_MAP = {"resort-leisure":{"social-media":["gold","platinum","custom"],"seo":["gold","platinum","custom"],"ppc":["gold","platinum","custom"],"content-shoot":["gold","platinum","custom"],"influencer-marketing":["gold","platinum","custom"],"youtube-marketing":["gold","platinum","custom"],"website-design":["gold","platinum","custom"],"pre-opening":["gold","platinum","custom"],"linkedin-marketing":["gold","platinum","custom"],"brand-collaterals":["gold","platinum","custom"]},"business-hotels":{"social-media":["gold","platinum","custom"],"seo":["gold","platinum","custom"],"ppc":["gold","platinum","custom"],"content-shoot":["gold","platinum","custom"],"influencer-marketing":["gold","platinum","custom"],"youtube-marketing":["gold","platinum","custom"],"website-design":["gold","platinum","custom"],"pre-opening":["gold","platinum","custom"],"linkedin-marketing":["gold","platinum","custom"],"brand-collaterals":["gold","platinum","custom"]},"boutique-hotels":{"social-media":["gold","platinum","custom"],"seo":["gold","platinum","custom"],"ppc":["gold","platinum","custom"],"content-shoot":["gold","platinum","custom"],"influencer-marketing":["gold","platinum","custom"],"youtube-marketing":["gold","platinum","custom"],"website-design":["gold","platinum","custom"],"pre-opening":["gold","platinum","custom"],"linkedin-marketing":["gold","platinum","custom"],"brand-collaterals":["gold","platinum","custom"]},"luxury-hotels":{"social-media":["gold","platinum","custom"],"seo":["gold","platinum","custom"],"ppc":["gold","platinum","custom"],"content-shoot":["gold","platinum","custom"],"influencer-marketing":["gold","platinum","custom"],"youtube-marketing":["gold","platinum","custom"],"website-design":["gold","platinum","custom"],"pre-opening":["gold","platinum","custom"],"linkedin-marketing":["gold","platinum","custom"],"brand-collaterals":["gold","platinum","custom"]},"serviced-apartments":{"social-media":["standard","gold"],"seo":["standard","gold"],"ppc":["standard","gold"],"content-shoot":["standard","gold"],"influencer-marketing":["gold","platinum"],"youtube-marketing":["gold","platinum"],"website-design":["standard","gold"],"pre-opening":["standard","gold"],"linkedin-marketing":["standard","gold"],"brand-collaterals":["standard","gold"]},"villas-homestays":{"social-media":["gold","platinum","custom"],"seo":["gold","platinum","custom"],"ppc":["gold","platinum","custom"],"content-shoot":["gold","platinum","custom"],"influencer-marketing":["gold","platinum","custom"],"youtube-marketing":["gold","platinum","custom"],"website-design":["gold","platinum","custom"],"pre-opening":["gold","platinum","custom"],"linkedin-marketing":["gold","platinum","custom"],"brand-collaterals":["gold","platinum","custom"]},"budget-hotels":{"social-media":["standard","gold"],"seo":["standard","gold"],"ppc":["standard","gold"],"content-shoot":["standard","gold"],"influencer-marketing":["gold","platinum"],"youtube-marketing":["gold","platinum"],"website-design":["standard","gold"],"pre-opening":["standard","gold"],"linkedin-marketing":["standard","gold"],"brand-collaterals":["standard","gold"]},"hotel-groups":{"social-media":["gold","platinum","custom"],"seo":["gold","platinum","custom"],"ppc":["gold","platinum","custom"],"content-shoot":["gold","platinum","custom"],"influencer-marketing":["gold","platinum","custom"],"youtube-marketing":["gold","platinum","custom"],"website-design":["gold","platinum","custom"],"pre-opening":["gold","platinum","custom"],"linkedin-marketing":["gold","platinum","custom"],"brand-collaterals":["gold","platinum","custom"]}}
;
