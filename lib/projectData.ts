// ============================================================
// PROJECT DATA LAYER
// All 23 portfolio projects + about/endorsements content
// ============================================================

export type BgTheme = 'black' | 'lightGrey' | 'white'
export type LayoutType = 'hero' | 'full' | 'double' | 'triple-big' | 'quad' | 'six' | 'contained' | 'eight' | 'four' | 'six-tall' | 'six-horizontal'

export interface ImageData {
  filename: string
  showBorder?: boolean
}

export interface ArtSection {
  layout: LayoutType
  images: (string | ImageData)[]  // Support both string and object format
  title?: string 
}

export interface Project {
  slug: string
  title: string
  bgTheme: BgTheme
  nextSlug: string | null
  deliverables: string[]
  description: string
  sections: ArtSection[]
}

// ============================================================
// NAV ORDER — matches original Webflow navigation
// ============================================================
export const PROJECT_ORDER: string[] = [
  'mars-pet-health',
  'apple',
  '3mf-branding',
  'driftroom',
  'achieve-design-system',
  'muni',
  'nokia',
  'candeloo',
  'artefacture',
  'uber',
  'mursion-design-system',
  'mursion',
  'comcast',
  'haspit',
  'corrus',
  'dojitsu',
  'mercury-soul',
  'cargill',
  'tradeclash',
  'baltik',
  'yahoo',
  'eleven-eleven',
  'logos',
  'icons',
]

// ============================================================
// PROJECT DEFINITIONS
// ============================================================
export const PROJECTS: Project[] = [
  {
    slug: 'mars-pet-health',
    title: 'Mars Pet Care',
    bgTheme: 'black',
    nextSlug: 'apple',
    deliverables: ['Product Architecture', 'Product UX/UI', 'Brand Design Systems', 'AI Generated Assets', 'Illustration'],
    description: `
    
    

## The Challenge

MARS Pet Care had developed multiple AI - powered diagnostic models for pet health - spanning oral health, skin conditions, 
digestive issues, and beyond. However, each tool was being built in isolation across different brands and divisions 
(Pedigree, Royal Canin, Mars Veterinary Health, Science & Diagnostics), creating inconsistent user experiences, 
duplicated effort, and no path to scale globally. The VP of Innovation needed a unified platform that could productize 
these AI instruments while maintaining brand flexibility and regulatory compliance across markets.

## My Role + Approach

As Lead Product Designer embedded within MARS's Digital Health team, I helped to architect and design the Digital Health Platform - a 
modular design system and SDK that enables rapid development of AI-powered health instruments for both pet parents and
veterinarians across the entire MARS ecosystem.

<strong>Platform Architecture Design:</strong> I designed a component-based system that allows any AI diagnostic tool to be configured 
for different brands, markets, and use cases without rebuilding from scratch. This included creating reusable UI patterns, 
establishing design governance processes, and developing a library of approved components that enable creative flexibility.

<strong>Multi-Brand Design System:</strong> Built design systems that work seamlessly across MARS's diverse brand portfolio - from consumer-facing apps 
(Greenies, IAMS, myVCA) to veterinary diagnostic tools to third-party retailers (Walmart, Amazon). The system maintains 
brand identity while ensuring consistent, accessible user experiences.

<strong>0-to-1 Product Development:</strong> Led design sprints to launch eight (and growing) AI-powered diagnostic tools from concept to market:

<ul>
<li>Toothcheck</li>
<li>Toothscan (oral health screening)</li>
<li>Pawscan (paw pad health assessment)</li>
<li>Dog Dermascan (skin condition detection)</li>
<li>Puppy Weightcheck</li>
<li>Kitten Weightcheck</li>
<li>Poopscan</li>
<li>Cocoascan (cocoa pod disease detection for 3rd party agricultural use)</li>
</ul>

Each tool uses computer vision models to detect visual indicators of disease, with configurable front-end and back-end architecture 
that scales across all health territories.

## Impact & Results

<strong>Speed to Market:</strong>
The platform reduced time-to-launch for new AI diagnostic tools from years to months. All four MARS divisions (PN, RC, MVH, SDX) 
deployed the same Toothscan product experience, configured to their specific brand and business requirements, demonstrating true 
platform scalability.

<strong>Adoption at Scale:</strong>
Toothscan has scanned over 30,000 teeth to date, with consumer-facing tools driving measurable KPIs 
including appointment bookings, nutrition recommendations, and product purchases - all tracked directly within the platform.

<strong>Global Extensibility:</strong>
The platform now powers diagnostic tools across consumer websites, mobile apps, veterinary portals, 
and third-party platforms globally (Europe/Asia). The component-based design system and “Call to Action” structure scale
across languages, markets, and regulatory requirements.

<strong>Innovation Unlock:</strong>
By creating reusable foundations, the platform enabled MARS to extend beyond pet health into adjacent markets (Cocoascan for cocoa pod disease detection), proving the architecture's flexibility for productizing AI across diverse use cases.

## Key Design Contributions

<ul>
<li>Platform architecture and information design for multi-brand, multi-product ecosystem</li>
<li>Design system governance ensuring compliance and consistency across 4 global divisions</li>
<li>MARS brand asset creation (internal + go-to-market)</li>
<li>Strategic design leadership bridging needs of R&D, brand and development teams</li>
</ul>

## Key Highlights

    <ul>
        <li>Digital Health Products Live at Petcare: 8</li>
        <li>MARS divisions using Digital Health Products: 4</li>
        <li>MARS brands using Digital Health Products: 10</li>
        <li>Digital Health Products globally deployed in: 27 Markets</li>
    </ul>

`,
    sections: [
      

      //==== GREENIES-TOOTHSCAN  =====//
      { layout: 'six', title: 'Mars Pet Care Digital Tools - Greenies Toothscan', images: [
        'mars-work/toothscan/greenies-1-new.png',
        'mars-work/toothscan/greenies-2-new.png',
        'mars-work/toothscan/greenies-3.png',
        'mars-work/toothscan/greenies-4.png',
        'mars-work/toothscan/greenies-5.png',
        'mars-work/toothscan/greenies-6-new.png'
      ]},

      //==== PEDIGREE-TOOTHSCAN =====//
      { layout: 'quad',  images: [
        'mars-work/toothscan/ped-1.png',
        'mars-work/toothscan/ped-2.png',
        'mars-work/toothscan/ped-3.png',
        'mars-work/toothscan/ped-5.png',]},

      //==== IAMS-POOPSCAN  =====//
      { layout: 'six', title: 'IAMS Poopscan', images: [
        'mars-work/poopscan/iams-1.png',
        'mars-work/poopscan/iams-2.png',
        'mars-work/poopscan/iams-3.png',
        'mars-work/poopscan/iams-4.png',
        'mars-work/poopscan/iams-5.png',
        'mars-work/poopscan/iams-6.png'
      ]},
      
      //==== RC-KITTEN-WEIGHT =====//
      { layout: 'quad', title: 'Royal Canin Kitten Weightcheck', images: [
        'mars-work/rc-kitten/rc-kit-1-new.png',
        'mars-work/rc-kitten/rc-kit-2.png',
        'mars-work/rc-kitten/rc-kit-3-new.png',
        'mars-work/rc-kitten/rc-kit-4.png']},

      //==== ANICURA-DERMSCAN =====//
      { layout: 'quad', title: 'Anicura Dermscan', images: [
        'mars-work/dermscan/ani-1.png',
        'mars-work/dermscan/ani-2.png',
        'mars-work/dermscan/ani-3.png',
        'mars-work/dermscan/ani-4.png']},

      //==== VCA-PAWSCAN =====//
      { layout: 'six', title: 'VCA Pawscan', images: [
        'mars-work/pawscan/vca-01.png',
        'mars-work/pawscan/vca-02.png',
        'mars-work/pawscan/vca-03.png',
        'mars-work/pawscan/vca-04.png',
        'mars-work/pawscan/vca-05.png',
        'mars-work/pawscan/vca-06.png',
      ]},
     
      //==== COCOA-SCAN =====//
      { layout: 'quad', title: 'Cocoascan', images: [
        'mars-work/cocoa-scan/coco-nu-nu-1.png',
        'mars-work/cocoa-scan/coco-nu-2.png',
        'mars-work/cocoa-scan/coco-nu-3.png',
        'mars-work/cocoa-scan/coco-nu-4.png']},

      { layout: 'double', images: [
        'mars-work/digital-health/digital-health-logo-1.svg', 
        'mars-work/digital-health/digital-health-logo-2.svg' ] },

      //==== RETAILERS =====//
      { layout: 'full', images: ['mars-work/websites/amazon.png'] },
      { layout: 'full', images: ['mars-work/websites/walmart.png'] },

      
      
     
    ],
  },
  {
    slug: 'apple',
    title: 'Apple',
    bgTheme: 'black',
    nextSlug: '3mf-branding',
    deliverables: ['Workflows', 'Icon Design', 'App UXUI'],
    description: `Working with one of the most admired brands in the world is a privilege to say the least. While engaging with Hero, I worked on multiple initiatives with Apple Computer. These projects were not consumer facing or very high profile, yet they were technically challenging as well as creatively rewarding. Whenever you walk into an Apple store or make an appointment, the sales team on the floor uses an app called Concierge that helps them help you.

The Hero team redesigned the Concierge app ux across mobile and iPad. We introduced some great innovations that improved user experience and ultimately customer experience. We also worked on the AppleCare Enterprise Portal. Here we optimized dashboards, improved case creation workflows as well as designed a new portfolio feature that helps Apple's enterprise customers track their IT infrastructure.`,
    sections: [
      { layout: 'hero', images: ['apple_screen.jpg'] },
      { layout: 'full', images: ['apple_01.png'] },
      { layout: 'full', images: ['apple_02.png'] },
      { layout: 'full', images: ['apple_03.png'] },
      { layout: 'contained', images: ['apple_ipad_01.png'] },
      { layout: 'contained', images: ['apple_ipad_02.png'] },
      { layout: 'contained', images: ['apple_ipad_03.png'] },
      { layout: 'full', images: ['apple_04.png'] },
      { layout: 'full', images: ['apple_05.png'] },
      { layout: 'full', images: ['apple_06.png'] },
      { layout: 'full', images: ['apple_07.png'] },
      { layout: 'full', images: ['apple_08.png'] },
      { layout: 'full', images: ['apple_09.png'] },
    ],
  },
  {
    slug: '3mf-branding',
    title: '3MF',
    bgTheme: 'lightGrey',
    nextSlug: 'driftroom',
    deliverables: ['Creative Direction', 'Art Direction', 'Brand Identity', 'Graphic Design'],
    description: `3MF is a groundbreaking CAD file format designed specifically for 3D printing. 3MF (3D Manufacturing Format)
    optimizes accuracy and performance by enabling faster part prototyping, communication of complete model information, and flexible file creation. 
    The 3MF Consortium was founded by industry leaders including Microsoft, Autodesk, HP, Dassault Systèmes, and others.

I developed a brand concept that communicates the technical precision and forward-thinking nature of the format, while remaining accessible to a broad audience of designers, engineers, and manufacturers.`,
    sections: [
      { layout: 'hero', images: ['3MF_logo_01.jpg'] },
      { layout: 'full', images: ['3MF_logo_02.jpg'] },
      { layout: 'full', images: ['3MF_logo_03.jpg'] },
      { layout: 'full', images: ['3MF_logo_04.jpg'] },
      { layout: 'full', images: ['3MF_website.jpg'] },
      { layout: 'full', images: ['3MF_BusinessCard_newest.jpg'] },
      { layout: 'double', images: ['3MF_bag.jpg', '3MF_shirt.jpg'] },
      { layout: 'full', images: ['3MF_2Poster_Bustop_Master.jpg'] },
      { layout: 'full', images: ['3MF_Advert_One.jpg'] },
      { layout: 'full', images: ['3MF_Advert_Icons.jpg'] },
    ],
  },
  {
    slug: 'driftroom',
    title: 'Driftroom',
    bgTheme: 'lightGrey',
    nextSlug: 'achieve-design-system',
    deliverables: ['Product Concept', 'Business Plan', 'Brand Identity', 'Illustration', 'UXUI Design'],
    description: `Driftroom is a startup idea that introduces an alternative to the typical dating apps that
    currently exist on the market. Most of these apps share the same premise and user experience but they don't
    offer what many people really want - a safe, meaningful connection based on shared interests and authentic
    conversation before visual judgment takes over.
    Driftroom leads with personality and shared interests, allowing users to connect through conversations and
    mutual passions before photos are revealed. The platform uses a progressive reveal model that builds genuine chemistry first.`,
    sections: [
      { layout: 'hero', images: ['logo_01.svg'] },
      { layout: 'full', images: ['logo_02_new.svg'] },
      { layout: 'full', images: ['logo_03.svg'] },
      { layout: 'full', images: ['colors_04.svg'] },
      { layout: 'triple-big', title: 'Sign In', images: ['m-sign-up-1.svg', 'm-sign-in-2.svg', 'm-sign-up-3.svg'] },

      
      { layout: 'eight', title: 'Profile', images: [
        { filename: 'm-profile-1.svg', showBorder: true }, 
        { filename: 'm-profile-2.svg', showBorder: true },
        { filename: 'm-profile-3.svg', showBorder: true },
        { filename: 'm-profile-4.svg', showBorder: true },
        { filename: 'm-profile-5.svg', showBorder: true },
        { filename: 'm-profile-6.svg', showBorder: true },
        { filename: 'm-profile-7.svg', showBorder: true },
        { filename: 'm-profile-8_new.svg', showBorder: true }
        ] },
      
      { layout: 'full', title: 'Profile', images: ['profile_complete_01.svg'] },
      { layout: 'full', title: 'Dashboard', images: ['dashboard-desktop.jpg'] },

//==== ADD RULE =====//

      { layout: 'quad', images: [
        { filename: 'm-dashboard-1.svg', showBorder: true },
        { filename: 'm-dashboard-2.svg', showBorder: true },
        { filename: 'm-dashboard-3.jpg', showBorder: true }, 
        { filename: 'm-dashboard-4.jpg', showBorder: true },  
        ] },
     

      { layout: 'full', title: 'Group Chat', images: ['chat_01.jpg'] },
      { layout: 'full', images: ['chat_02.jpg'] },
      { layout: 'full', images: ['chat_03.jpg'] },

      //==== ADD RULE =====//

      { layout: 'quad', title: 'Private Chat', images: [
        { filename: 'private-chat-01.jpg', showBorder: true },
        { filename: 'private-chat-02.jpg', showBorder: true },
        { filename: 'private-chat-03.jpg', showBorder: true },
        { filename: 'private-chat-04.jpg', showBorder: true },
        ] },


//==== ADD RULE =====//

      { layout: 'triple-big', title: 'Messaging', images: [
      { filename: 'messaging-01.jpg', showBorder: true },
      { filename: 'messaging-02.jpg', showBorder: true }, 
      { filename: 'messaging-03.jpg', showBorder: true }, 
      ] },
      
//==== ADD RULE =====//

      { layout: 'quad', title: 'Plans', images: [
      { filename: 'account-01.jpg', showBorder: true },
      { filename: 'account-02.jpg', showBorder: true }, 
      { filename: 'account-03.jpg', showBorder: true }, 
      { filename: 'account-04.jpg', showBorder: true },  
      ] },

      { layout: 'full', images: ['laptop-01.jpg'] },
    ],
  },
  {
    slug: 'achieve-design-system',
    title: 'Achieve DS',
    bgTheme: 'black',
    nextSlug: 'muni',
    deliverables: ['Design System', 'UX Design', 'FE Collaboration Process'],
    description: `Achieve is a leading digital personal finance company helping everyday people move forward on the path to a better financial future.

As the design system lead designer, I helped the company complete a ux product design transformation. The main thrust of this work was to leverage Achieve's new brand identity (designed by Pentagram) and create a complimentary design language and scaleable, robust design system.

Managing a design systems focused team, we created a new, on-brand design system for native and desktop web/mobile. I also led the process of integrating the design system with all product development initiatives across the company.
`,
    sections: [
      { layout: 'hero', images: ['achieve_ds_01.jpg'] },
      { layout: 'full', images: ['achieve_ds_02.jpg'] },
      { layout: 'full', images: ['achieve_ds_03.png'] },
      { layout: 'full', images: ['achieve_ds_04.png'] },
      { layout: 'full', images: ['achieve_ds_05.png'] },
      { layout: 'full', images: ['achieve_ds_06.png'] },
      { layout: 'full', images: ['achieve_ds_07.png'] },
      { layout: 'full', images: ['achieve_ds_08.png'] },
      { layout: 'full', images: ['achieve_ds_09.png'] },
      { layout: 'full', images: ['achieve_ds_10.png'] },
      { layout: 'full', images: ['achieve_ds_11.png'] },
      { layout: 'full', images: ['achieve_ds_12.png'] },
      { layout: 'full', images: ['achieve_ds_13.png'] },
      { layout: 'full', images: ['achieve_ds_14.png'] },
      { layout: 'full', images: ['achieve_ds_15.png'] },
      { layout: 'full', images: ['achieve_ds_16.png'] },
      { layout: 'full', images: ['achieve_ds_17.png'] },
    ],
  },
  {
    slug: 'muni',
    title: 'Muni',
    bgTheme: 'lightGrey',
    nextSlug: 'nokia',
    deliverables: ['Brand Concept'],
    description: `Self initiated project - a new visual identity for San Francisco's MUNI public transportation system.
    The inspiration comes from the phrase ‘City by the Bay’ - bay meaning water. I felt this quality
    would be compelling to convey in the idenity, hence the inter-locking wave forms and blue color.
    The wave forms can be de-constructed to form M - U - N - I. Ultimately I wanted to create something that felt different, trustworthy, as well as human.`,
    sections: [
      { layout: 'hero', images: ['muni_01.png'] },
      { layout: 'full', images: ['muni_02.png'] },
      { layout: 'full', images: ['muni_03.png'] },
      { layout: 'full', images: ['muni_04.png'] },
      { layout: 'full', images: ['muni_05.png'] },
      { layout: 'full', images: ['muni_06.jpg'] },
      { layout: 'full', images: ['muni_07.jpg'] },
      { layout: 'full', images: ['muni_08.jpg'] },
      { layout: 'contained', images: ['muni_09.jpg'] },
    ],
  },
  {
    slug: 'nokia',
    title: 'Nokia',
    bgTheme: 'white',
    nextSlug: 'candeloo',
    deliverables: ['Product Concept', 'App UXUI'],
    description: `Time Traveler is a mobile app concept that focuses on the specific use case of leaving for a destination. It focuses on time as 
    a core component of the travel experience rather than the route itself - answering the fundamental question: 
    “When do I need to leave?” - rather than - “How do I get there?”

The app intelligently calculates departure times based on current traffic, transit schedules, and user preferences, delivering a calm, confident travel experience.`,
    sections: [
      { layout: 'triple-big', images: ['device01.jpg', 'device02.jpg', 'device03.jpg'] },
      { layout: 'triple-big', images: ['traveler_icons.jpg', 'detail05.png', 'detail02.jpg'] },
      { layout: 'triple-big', images: ['traveler_gallery.jpg', 'detail03.jpg', 'detail04.jpg'] },
    ],
  },
  {
    slug: 'candeloo',
    title: 'Candeloo',
    bgTheme: 'white',
    nextSlug: 'artefacture',
    deliverables: ['Concept', 'Form Development', '3D CAD'],
    description: `I designed Candeloo while doing an industrial design internship at Vessel, a housewares and furniture design studio based in Boston. 
    The brief called for a children's version of Candela - Vessel's elegant candle holder - that would be safe, durable, and delightful for young users.
    Candeloo uses an LED “flame” inside a translucent form, making it safe for children while retaining the warm, ambient quality of real candlelight.`,
    sections: [
      { layout: 'hero', images: ['candeloo_01.jpg'] },
      { layout: 'triple-big', images: ['candeloo_02.jpg', 'candeloo_04.jpg', 'candeloo_03.jpg'] },
    ],
  },
  {
    slug: 'artefacture',
    title: 'Artefacture',
    bgTheme: 'black',
    nextSlug: 'uber',
    deliverables: ['Branding', 'Illustration', 'Art Direction', 'Graphic Design', 'Website'],
    description: `In its first incarnation Artefacture was a graphic t-shirt brand. Our inaugural release included two marquee 
    designs: “Design Will Save the World” and “I Will Pay For Good Design”. Profiles by influential and trend conscious blogs 
    like Josh Spear, Core77 and Cool Hunting helped establish Artefacture as the go to t-shirt for designers and creatives alike. 
    We did countless art shows in San Francisco and twice attended the Pool Streetwear Trade Show in Las Vegas.

Artefacture t-shirts sold in museum shops across the US including the SF Museum of Modern Art and the Museum of Contemporary Art in Chicago. 
We shipped our graphic tees to customers all over the world and we were carried by independent fashion boutiques in Boston, LA, NY, SF as 
well as in the UK and Europe.`,
    sections: [
      { layout: 'hero', images: ['2dudes.jpg'] },
      { layout: 'double', images: ['dwstw.jpg', 'icta.jpg'] },
      { layout: 'triple-big', images: ['goodesign.jpg', 'wimsays.jpg','discomexico.jpg' ] },
      { layout: 'double', images: ['hero.jpg', 'metatran.jpg'] },
      { layout: 'triple-big', images: ['juggernaut.jpg', 'formmatters2.jpg', 'recyclo.jpg'] },
      { layout: 'double', images: ['glasscase.jpg', 'moka.jpg'] },
      { layout: 'six', images: ['Artefacture_Elevates.jpg', 'Artefacture_AE.jpg', 'Artefacture_TMTM.jpg', 'Artefacture_Grid.jpg', 'Artefacture_TY.jpg','Artefacture_RE.jpg'  ] },
      { layout: 'double', images: ['hard_disc.jpg', 'formmatters.jpg'] },
      { layout: 'triple-big', images: ['artekard_2.jpg', 'artekard.jpg', 'artekard_3.jpg'] },
      { layout: 'double', images: ['womens_goodesign.jpg', 'womens_dwstw.jpg' ] },
      { layout: 'double', images: ['black_01.jpg', 'white_02.jpg'] },
      { layout: 'triple-big', images: ['live_01.jpg', 'live_02.jpg', 'live_03.jpg' ] },
      { layout: 'hero', images: ['nu_arte_logo.png'] },
      { layout: 'double', images: ['tmtm.jpg', 'geob.jpg'] },
      { layout: 'double', images: ['double_figure.jpg', 'yes.jpg'] },
      { layout: 'double', images: ['stop_hate.jpg', 'arty.jpg'] },
    ],
  },
  {
    slug: 'uber',
    title: 'Uber',
    bgTheme: 'lightGrey',
    nextSlug: 'mursion-design-system',
    deliverables: ['Brand Concept'],
    description: `A brand concept exploration for Uber, reimagining how the company might present itself with a more unique, confident visual identity. 
    The concept explores the boundaries between typography + pure form - moving away from cliché aesthetics toward something that reflects the true ambition 
    and scale of the company.`,
    sections: [
      { layout: 'hero', images: ['uber_01.png'] },
      { layout: 'full', images: ['uber_09.png'] },
      { layout: 'full', images: ['uber_02.jpg'] },
      { layout: 'full', images: ['uber_03.jpg'] },
      { layout: 'full', images: ['uber_04.jpg'] },
      { layout: 'full', images: ['uber_05.jpg'] },
      { layout: 'full', images: ['uber_06.jpg'] },
      { layout: 'full', images: ['uber_07.jpg'] },
      { layout: 'contained', images: ['uber_08.jpg'] },
    ],
  },
  {
    slug: 'mursion-design-system',
    title: 'Mursion DS',
    bgTheme: 'black',
    nextSlug: 'mursion',
    deliverables: ['Design System', 'FE Collaboration Process'],
    description: `Mursion is an ed tech platform that helps professionals develop their human interaction and emotional intelligence. Mursion does this by simulating real-world scenarios; a manager confronting a problematic employee, a teacher facing a 4th grade class for the very first time or helping a new CEO refine their leadership skills.

As Head of UX Design at Mursion, my team and I optimized the Mursion Portal (user admin tool) and designed the next-gen Mursion Magic web application. This work also entailed the development of a new design system to reinforce the Mursion brand as well as to power and support our app user experiences. I led the development of the design system work and later created a process to collaborate with various FE teams for implementation across desktop and mobile web.`,
    sections: [
      { layout: 'hero', images: ['mursion_ds_01.jpg'] },
      { layout: 'full', images: ['mursion_ds_02.jpg'] },
      { layout: 'full', images: ['mursion_ds_03.jpg'] },
      { layout: 'full', images: ['mursion_ds_04.jpg'] },
      { layout: 'full', images: ['mursion_ds_05.jpg'] },
      { layout: 'full', images: ['mursion_ds_06.png'] },
      { layout: 'full', images: ['mursion_ds_07.png'] },
      { layout: 'full', images: ['mursion_ds_08.png'] },
      { layout: 'full', images: ['mursion_ds_09.png'] },
      { layout: 'full', images: ['mursion_ds_10.png'] },
      { layout: 'full', images: ['mursion_ds_11.png'] },
      { layout: 'full', images: ['mursion_ds_12.png'] },
      { layout: 'full', images: ['mursion_ds_13.png'] },
      { layout: 'full', images: ['mursion_ds_14.png'] },
      { layout: 'full', images: ['mursion_ds_15.png'] },
      { layout: 'full', images: ['mursion_ds_16.png'] },
      { layout: 'full', images: ['mursion_ds_17.png'] },
      { layout: 'full', images: ['mursion_ds_18.png'] },
      { layout: 'full', images: ['mursion_ds_19.jpg'] },
      { layout: 'full', images: ['mursion_ds_20.jpg'] },
    ],
  },
  {
    slug: 'mursion',
    title: 'Mursion',
    bgTheme: 'lightGrey',
    nextSlug: 'comcast',
    deliverables: ['Web App UXUI', 'Design System'],
    description: `Mursion is an ed tech platform that helps professionals develop their human interaction and emotional intelligence. Mursion does this by simulating real-world scenarios; a manager confronting a problematic employee, a teacher facing a 4th grade class for the very first time or helping a new CEO refine their leadership skills.

Mursion Magic is the ground breaking software that simulates these scenarios by pairing users - or learners with advanced CGI avatars and custom designed environments via a remote video session. These avatars are driven by a real person behind the scenes but also leverage AI which automatically drive facial expressions and hand movements.

As Head of UX Design at Mursion, my team and I helped create the vision and designed the next generation of the Mursion Magic web application. We also helped redesign the Mursion Portal which is the main hub for scheduling new simulations, reviewing performance analytics of previous simulations as well as providing usage and business metrics via a variety of dashboards.`,
    sections: [
      { layout: 'hero', images: ['sim_magic_calibration_01.png'] },
      { layout: 'full', images: ['sim_magic_calibration_02.png'] },
      { layout: 'full', images: ['sim_magic_calibration_03.png'] },
      { layout: 'full', images: ['sim_magic_calibration_04.png'] },
      { layout: 'full', images: ['sim_magic_screen_01.png'] },
      { layout: 'full', images: ['sim_magic_screen_02.png'] },
      { layout: 'full', images: ['sim_magic_screen_03.png'] },
      { layout: 'full', images: ['mursion_magic_new.png'] },
      { layout: 'full', images: ['voice_analytics.png'] },
      { layout: 'full', images: ['dashboard.png'] },
    ],
  },
  {
    slug: 'comcast',
    title: 'Comcast',
    bgTheme: 'lightGrey',
    nextSlug: 'haspit',
    deliverables: ['Design System', 'Icon Design', 'App UXUI'],
    description: `During my time at Hero, I was fortunate enough to work on the Comcast account and help the team create new mobile experiences for their Xfinity modem service customers. Work included designing new, improved device setup flows, improved troubleshooting experiences, a redesigned icon set, and new design system components that extended Comcast's existing visual language.`,
    sections: [
      { layout: 'hero', images: ['comcast_01.png'] },
      { layout: 'full', images: ['comcast_02.png'] },
      { layout: 'full', images: ['comcast_03.png'] },
      { layout: 'full', images: ['comcast_04.png'] },
      { layout: 'triple-big', images: ['comcast_05.png', 'comcast_06.png', 'comcast_07.png'] },
      
    ],
  },
  {
    slug: 'haspit',
    title: 'Haspit',
    bgTheme: 'lightGrey',
    nextSlug: 'corrus',
    deliverables: ['Branding', 'Art Direction', 'Website', 'App UXUI'],
    description: `Bay area tech startup Haspit approached me with a dream project. They needed a brand identity, marketing website as
    well as zero to one product design for their blockchain based file sharing and storage app.

Working with both founders, we quickly designed the marketing website and developed a feature-rich, working prototype showcasing
app primary use cases (i.e. filing a tax return). Work included branding, website design, design language, product uxui, art direction
of illustrations and email design.`,
    sections: [
      { layout: 'hero', images: ['haspit_logo_01.png'] },
      { layout: 'double', images: ['haspit_logo_03.png', 'haspit_logo_02.png'] },
      { layout: 'full', images: ['haspit_homepage.png'] },
      { layout: 'triple-big', images: ['haspit_icon_01.png', 'haspit_icon_02.png','haspit_icon_03.png' ] },
      { layout: 'full', images: ['haspit_product_05.png'] },
      { layout: 'full', images: ['haspit_product_04.png'] },
      { layout: 'full', images: ['haspit_product_03.png'] },
      { layout: 'full', images: ['haspit_product_01.png'] },
      { layout: 'full', images: ['haspit_product_02.png'] },
      { layout: 'double', images: ['haspit_email_04.png', 'haspit_email_02.png' ] },
      { layout: 'full', images: ['haspit_product_06.png'] },
      { layout: 'full', images: ['haspit_product_08.png'] },
      { layout: 'double', images: ['haspit_email_03.png', 'haspit_email_01.png'] },
      { layout: 'full', images: ['haspit_product_07.png'] },
    ],
  },
  {
    slug: 'corrus',
    title: 'Corrus',
    bgTheme: 'lightGrey',
    nextSlug: 'dojitsu',
    deliverables: ['Info Architecture Revision', 'Design System', 'App UXUI'],
    description: `I was approached by the Corrus team to help improve the user experience of their work management app as it was not testing well with internal users. The first thing I did was to interview current users as well as perform a design audit, focusing on key user journeys. The feedback and audit revealed a confusing mental model, an overly complex navigation scheme and a poorly executed visual ui design.

My recommendation was to abandon the current flawed design and re-architect the entire app experience from the ground up. Utilizing insights from the design audit as well as user research, we selected a key user journey and began the redesign process. Once we had established a few core user journeys, we developed a new visual ui design language that extended the product's brand identity. We completed the entire app uxui redesign for both desktop and mobile in less than 12 months.`,
    sections: [
      { layout: 'hero', images: ['corrus_01.png'] },
      { layout: 'full', images: ['corrus_02.png'] },
      { layout: 'triple-big', images: ['corrus_03.png', 'corrus_04.png','corrus_05.png' ] },
      { layout: 'full', images: ['corrus_06.png' ] },
      { layout: 'triple-big', images: ['illustration_01.png', 'illustration_02.png', 'illustration_03.png'] },
      { layout: 'full', images: ['corrus_08.png'] },
      { layout: 'full', images: ['corrus_09.png'] },
      { layout: 'full', images: ['corrus_10.png'] },
      { layout: 'full', images: ['corrus_11.png'] },
      { layout: 'full', images: ['corrus_12.png'] },
    ],
  },
  {
    slug: 'dojitsu',
    title: 'Dojitsu',
    bgTheme: 'lightGrey',
    nextSlug: 'mercury-soul',
    deliverables: ['Naming', 'Branding', 'App Illustration', 'App UXUI'],
    description: `Dojitsu was a startup with the idea of crowdsourcing lists for any life task. For example, one could find lists for what to bring for a trip to Maui, creating a wildlife photography starter kit or what to bring to the DMV when applying for a drivers license. I partnered with startup founders and helped them create a unique name, brand identity and app uxui design.`,
    sections: [
      { layout: 'hero', images: ['dojitsu_logo_01.png'] },
      { layout: 'triple-big', images: ['dojitsu_logo_06.png', 'dojitsu_logo_05.png', 'dojitsu_logo_04.jpg'] },
      { layout: 'full', images: ['dojitsu_logo_03.png'] },
      { layout: 'full', images: ['dojitsu_logo_02.jpg'] },
      { layout: 'full', images: ['dojitsu_01.png'] },
      { layout: 'full', images: ['dojitsu_02.png'] },
      { layout: 'full', images: ['dojitsu_03.png'] },
    ],
  },
  {
    slug: 'mercury-soul',
    title: 'Mercury',
    bgTheme: 'lightGrey',
    nextSlug: 'cargill',
    deliverables: ['Brand Identity', 'Art Direction'],
    description: `Mercury Soul is a San Francisco nightclub experience that merges classical music performance with 
    electronic dance music culture. Founded by violinist Mason Bates, Mercury Soul needed a visual identity that honored both worlds - 
    the prestige of the concert hall and the energy of the club. The resulting brand balances elegance with edge.`,
    sections: [
      { layout: 'hero', images: ['ms_01.png'] },
      { layout: 'full', images: ['ms_02.png'] },
      { layout: 'full', images: ['ms_03.png'] },
      { layout: 'full', images: ['ms_04.png'] },
      { layout: 'full', images: ['ms_05.png'] },
      { layout: 'full', images: ['ms_06.png'] },
      { layout: 'full', images: ['ms_07.png'] },
    ],
  },
  {
    slug: 'cargill',
    title: 'Cargill',
    bgTheme: 'black',
    nextSlug: 'tradeclash',
    deliverables: ['Product Concept', 'App UXUI'],
    description: `I worked on this with the Head of BI of Cargill in Singapore. The proposed concept allowed users to search a 
    phrase within the Cargill global network. Resulting data visualizations showed where the phrase was being used geographically, 
    in which business units, and over time - giving leadership unprecedented insight into how ideas, concerns, and themes 
    travel through a 155,000-person global organization.`,
    sections: [
      { layout: 'hero', images: ['cargill_01.png'] },
      { layout: 'full', images: ['cargill_02.png'] },
      { layout: 'full', images: ['cargill_03.png'] },
      { layout: 'full', images: ['cargill_04.png'] },
      { layout: 'full', images: ['cargill_05.png'] },
      { layout: 'full', images: ['cargill_06.png'] },
      { layout: 'full', images: ['cargill_07.png'] },
    ],
  },
  {
    slug: 'tradeclash',
    title: 'TradeClash',
    bgTheme: 'lightGrey',
    nextSlug: 'baltik',
    deliverables: ['Branding', 'App Illustration', 'App UXUI'],
    description: `TradeClash was a fantasy daily stock trading app. Players picked a portfolio of stocks and
    competed one-on-one or in multi-player games. The player with the highest gaining portfolio at the end of the trading day won. 
    I designed the complete brand identity, design system, and full product UXUI - creating a bold, high-energy visual language that made financial competition feel like sport.`,
    sections: [
      { layout: 'hero', images: ['tradeclash_01.png'] },
      { layout: 'full', images: ['tradeclash_02.png'] },
      { layout: 'double', images: ['tradeclash_03.png', 'tradeclash_04.png'] },
      { layout: 'full', images: ['tradeclash_mobile_01.png'] },
      { layout: 'full', images: ['tradeclash_mobile_02.png'] },
      { layout: 'full', images: ['tradeclash_mobile_03.png'] },
    ],
  },
  {
    slug: 'baltik',
    title: 'Baltik',
    bgTheme: 'black',
    nextSlug: 'yahoo',
    deliverables: ['Naming', 'Logo Design', 'Illustration', 'Industrial Design', 'Rhino 3D CAD'],
    description: `Baltik is a ready to assemble, customizable standing computer desk. After realizing it’s healthier and more comfortable to stand instead of sitting while working, I decided to design my own custom desk. My design features hardware free assembly and custom shelf heights. The baltic birch plywood components are cut out via a platform CNC router from CAD generated DXF files.`,
    sections: [
      { layout: 'hero', images: ['baltik_logo_big.png'] },
      { layout: 'four', images: ['baltik_image_04.jpg', 'baltik_image_05.jpg','baltik_image_03.jpg', 'baltik_image_01.jpg'  ] },
     
      { layout: 'full', images: ['baltik_image_02.jpg'] },


      { layout: 'triple-big', images: ['baltik_detail_05.jpg', 'baltik_detail_06.jpg', 'baltik_detail_07.jpg' ] },

      
      { layout: 'contained', images: ['baltik_detail_08.jpg'] },


      { layout: 'six-tall', images: ['baltik_tech_01.svg', 'baltik_tech_02.svg', 'baltik_tech_03.svg', 'baltik_tech_04.svg', 'baltik_tech_05.svg', 'baltik_tech_06.svg' ] },
  
      { layout: 'triple-big', images: ['baltik_detail_03.jpg', 'baltik_detail_02.jpg', 'baltik_detail_01.jpg'] },
    ],
  },
  {
    slug: 'yahoo',
    title: 'Yahoo',
    bgTheme: 'lightGrey',
    nextSlug: 'eleven-eleven',
    deliverables: ['Design System', 'Product Concept', 'Web/App UXUI'],
    description: `While at Yahoo, I worked on a variety of initiatives. This ranged from the creation of a new design 
    language and design system following Yahoo's rebrand, designing the next generation Yahoo homepage, as well as the design 
    of a topic-based social app concept called “Quips”. I also worked on the design and illustration of various data visualization 
    components deployed across Yahoo mobile + desktop web products.`,
    sections: [
      { layout: 'hero', images: ['yahoo_01.jpg'] },
      { layout: 'full', images: ['yahoo_02.jpg'] },
      { layout: 'full', images: ['yahoo_03.jpg'] },
      { layout: 'full', images: ['yahoo_quips_01.jpg'] },
      { layout: 'full', images: ['yahoo_quips_02.jpg'] },
      { layout: 'full', images: ['yahoo_05.png'] },
      { layout: 'full', images: ['yahoo_04.png'] },
      { layout: 'triple-big', images: ['autos_icon_small_01.jpg', 'autos_icon_small_02.jpg', 'autos_icon_small_03.jpg' ] },
      { layout: 'triple-big', images: ['utility_med_01.jpg', 'utility_small_01.jpg', 'utility_small_02.jpg'] },
    ],
  },
  {
    slug: 'eleven-eleven',
    title: 'Eleven Eleven',
    bgTheme: 'black',
    nextSlug: 'logos',
    deliverables: ['Branding', 'Illustration', 'Art Direction', 'Graphic Design', 'Website UXUI + Dev'],
    description: `Eleven Eleven was a soccer brand inspired by a love of the world's game, new ideas, and novel graphic form. 
    I developed the brand, products, and website - all inside of 5 months. Eleven Eleven was the realization of a long-held dream 
    to create a soccer brand that combined world-class design with authentic passion for the sport.`,
    sections: [
      { layout: 'hero', images: ['e2_nuhome.jpg'] },
      { layout: 'full', images: ['e2_med_shirtpage_detail.jpg'] },
      { layout: 'double', images: ['e2_small_process02.jpg', 'e2_small_process03.jpg'] },
      
      { layout: 'full', images: ['e2_biglogo.jpg'] },

      { layout: 'double', images: ['e2_smalldouble_oltra.jpg', 'e2_smalldouble_antagonist.jpg'] },
      
      { layout: 'four', images: ['e2_small_street_oltra.jpg', 'e2_small_sleeve.jpg', 'e2_small_hoodies.jpg', 'e2_small_hangtag.jpg'] },
     
      { layout: 'full', images: ['e2_med_play.jpg'] },

      { layout: 'double', images: ['e2_smalldouble_play.jpg', 'e2_smalldouble_ffc.jpg'] },
      
      { layout: 'four', images: ['e2_small_futbolismo.jpg', 'e2_about_new.jpg', 'e2_alley.jpg', 'e2_small_nations.jpg' ] },
      
      { layout: 'double', images: ['e2_smalldouble_pitch.jpg', 'e2_smalldouble_mickey.jpg'] },
      
      { layout: 'four', images: ['e2_small_prints.jpg', 'e2_small_alley.jpg', 'e2_small_tees.jpg', 'e2_small_family.jpg' ] },
      
    ],
  },
  {
    slug: 'logos',
    title: 'Logos',
    bgTheme: 'white',
    nextSlug: 'icons',
    deliverables: ['Logo Design'],
    description: `A curated selection of logo and identity work spanning startups, consumer brands, nonprofits, and personal projects.`,
    sections: [
      { layout: 'hero', images: ['group-one.png'] },
     
      
      { layout: 'triple-big', images: ['s2m_med.jpg', 'ehs_small.jpg', 'ptav_small.jpg'] },

      { layout: 'triple-big', images: ['artelabseries_small.jpg', 'hificircus_small.jpg', 'flyingtable_small.jpg'] },
     
      { layout: 'triple-big', images: ['nanarema_small.jpg', 'osika_small.jpg', 'nuroom_small.jpg' ] },
      
      { layout: 'triple-big', images: ['hcsf_small.jpg', 'e2_small.jpg', 'enviromax_small.jpg'] },
      
      { layout: 'contained', images: ['kph_01.png'] },

      { layout: 'double', images: ['kph_02.png', 'kph_03.png'] },

      { layout: 'triple-big', images: ['monarch_small.jpg', 'ips_small.jpg', 'eagles_small.jpg' ] },
      
    ],
  },
  {
    slug: 'icons',
    title: 'Icons',
    bgTheme: 'white',
    nextSlug: null,
    deliverables: ['Icon Design', 'Illustration'],
    description: `A collection of icon systems and illustration work across a variety of past projects and clients.`,
    sections: [
      
      { layout: 'hero', images: ['icons_med_yahoomail.jpg'] },
      { layout: 'full', images: ['icons_big_pyxis.jpg'] },
      { layout: 'full', images: ['icons_med_nokiavvm.jpg'] },
      { layout: 'triple-big', images: ['icons_small_mailtrio.jpg', 'icons_small_toolbar.jpg', 'icons_med_android.jpg'] },
      
      { layout: 'triple-big', images: ['utility_med_01.jpg', 'utility_small_01.jpg', 'utility_small_02.jpg'] },
      { layout: 'contained', images: ['satmetrix_characters_sun.svg'] },
      { layout: 'contained', images: ['satmetrix_characters_sammy.svg'] },
      { layout: 'contained', images: ['satmetrix_characters_dot.svg'] },
      { layout: 'full', images: ['mars-work/icons/platform-icons-nu.svg'] }
    ],
  },
]

// ============================================================
// LOOKUP HELPERS
// ============================================================
export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return PROJECTS.map((p) => p.slug)
}

export function getNextProject(slug: string): Project | undefined {
  const current = PROJECTS.find((p) => p.slug === slug)
  if (!current?.nextSlug) return undefined
  return PROJECTS.find((p) => p.slug === current.nextSlug)
}

// ============================================================
// ENDORSEMENTS DATA
// ============================================================
export interface Endorsement {
  name: string
  role: string
  year: string
  quote: string
  photo?: string
}

export const ENDORSEMENTS: Endorsement[] = [
  {
    name: 'Tyler Munson',
    role: 'Munson Design',
    year: '2023',
    photo: 'tyler_profile_image.jpg',
    quote: `I've known Andreu for more than 25 years, back to the days when we were classmates in design school together. Andreu has worked with me as a trusted contract art director and design partner for several online advertising and paid social media campaigns. He is certainly a pleasure to work with - reliable, friendly, and punctual.
    
    His deliverables hit all the marks. He's great at taking strategic business vision and translating that into aesthetically beautiful and functional solutions. When facing tight deadlines, he has gone the extra mile to deliver excellent work, on-time. He's a fantastic resource, and I hope to partner with him more.`,
  },
  {
    name: 'Cat Ferrez',
    role: 'Achieve',
    year: '2023',
    photo: 'cat.jpeg',
    quote: `Both Andreu and I work at Achieve. Andreu was hired as our resident design system expert. Andreu came into the design org and hit the ground running by single handedly building the Achieve design system. He is very quick and covers the details under tight timelines.
‍
    He works really well with our engineering team and other members of the design team. Andreu is a consummate professional and an all around nice human to work with. He also educates other designers along the way and has also enlightened many a leader on how design systems work and the benefits of having a design system in place.

    Andreu is an asset to any organization who is looking to start net new on a design system or improve upon an existing system.`,
  },
  {
    name: 'UV Mathoda',
    role: 'Achieve',
    year: '2023',
    photo: 'uv.jpeg',
    quote: `I had the pleasure of working with Andreu recently. Product strategy and positioning come naturally to Andreu. I worked closely with him on an authentication project @ Achieve.

He led the User Experience Design for the project and delivered beautifully. He also lead and managed the complex work of building out a new design system with excellent results. A great person to work with!`,
  },
  {
    name: 'Chris Barnard',
    role: 'Achieve',
    year: '2023',
    photo: 'chris.jpeg',
    quote: `It was truly great working with, and learning from Andreu while he built our design system from 0 to 1. He managed a rebrand, and many new component sets from multiple newly branded BUs all the while acting as a great design leader and partner.

Andreu’s professionalism and eye for detail were another source of inspiration and I could not be more happy that I had the chance to work alongside him.`,
  },
  {
    name: 'Joshua Danielson',
    role: 'Mursion',
    year: '2022',
    photo: 'josh.jpeg',
    quote: `Andreu is someone you definitely want leading your design team. He’s obsessed with making both internal and external customers successful, leads with empathy, is a creative powerhouse, and delivers results with a great attitude and strong work ethic.

He rebuilt Mursion’s design system across our web, mobile apps and desktop software - and designed from the ground up a whole new product all with impeccable detail. Above all, he’s a pleasure to work with!`,
  },
  {
    name: 'Daniel Venegas',
    role: 'Hero Digital',
    year: '2021',
    photo: 'daniel.jpeg',
    quote: `Had the pleasure of working with Andreu while tackling a prominent enterprise design project for Hero Digital.

I found he was consistently engaged, creative in his approach, and had a confident team attitude. I look forward to overcoming product design challenges with Andreu anytime.`,
  },
  {
    name: 'Andrew Ries',
    role: 'Hero Digital',
    year: '2020',
    photo: 'andrew.jpeg',
    quote: `Andreu is a very talented UX/Product designer and helped our team deliver a number of high profile projects for one of the world’s biggest tech companies. He mergers excellent CX thinking, high quality designs along with a collaborative attitude.

His confidence in product design and comfort working directly with stakeholders helped drive creative solutions while his humility and humor helped create a fun working environment. I look forward to working with Andreu again (the sooner the better)!`,
  },
  {
    name: 'Kelvin Young',
    role: 'Houzz',
    year: '2019',
    photo: 'kelvin.jpeg',
    quote: `I've had the pleasure of working with Andreu twice. We were on the same team at Yahoo, and most recently he helped me out on a handful of projects at Houzz. His professionalism is top notch, clearly communicating needs and expectations from the beginning.

He is definitely someone you want if you are looking for someone with great design sensibilities and collaborates very well with others.`,
  },
  {
    name: 'Craig Peters',
    role: 'Awasu',
    year: '2018',
    photo: 'craig.jpeg',
    quote: `Andreu has been an excellent addition to our team over multiple projects. He’s smart, thoughtful, and cares about the user. He weaves together great UX and visual design. Most important, Andreu is creative and fast while bringing strong collaboration skills. Pleasure to work with.`,
  },
  {
    name: 'Varun Mehra',
    role: 'Awasu',
    year: '2018',
    photo: 'varun.jpeg',
    quote: `Andreu is a kickass designer with an ability to tackle complex user experience workflows as well as produce solid visual designs.

As a contractor on our team, he’s always been flexible with his bandwidth, able to balance his workload efficiently and manage client relationships. He’s also a total team player and a pleasure to work with!`,
  },
  {
    name: 'Mark Baerenrodt',
    role: 'Procept BioRobotics',
    year: '2018',
    photo: 'mark.jpeg',
    quote: `Andreu has been a graphic design and GUI resource for over 10 years. His vision, passion for usability, and exquisite design sense make him an excellent development partner.

Andreu is very hands on and interactive, an unusually easy to work with designer, and an all around great guy. I highly recommend him to help solve the most challenging design programs.`,
  },
  {
    name: 'Arnab Paul',
    role: 'Corrus',
    year: '2018',
    photo: 'arnab.jpeg',
    quote: `Andreu played a critical role in the execution of our customer-focused product vision, with meaningful UX designs, and by ensuring brand guidelines were established and met.

Our distributed team utilized his strong leadership, collaboration and communication skills to meet and exceed strict quality guidelines. His ability to relate to our vision and participate as a strategic partner is one of the most enjoyable aspects of working with Andreu.`,
  },
   {
    name: 'Lokesh Tripathi',
    role: 'Satmetrix',
    year: '2017',
    photo: 'lokesh.jpeg',
    quote: `I have worked with Andreu on multiple design projects in Satmetrix. He is a product manager's delight. He has an amazing ability to understand really complex product scenarios & flows and translate them into intuitive visual designs. He is able to empathise with the user and also appreciates Engineering challenges.

I strongly recommend Andreu for his User Experience Design excellence. He is a great team player and an awesome human being. I have thoroughly enjoyed working with him.`,
  },
  {
    name: 'Lakshmi Kumar',
    role: 'Satmetrix',
    year: '2017',
    photo: 'lakshmi.jpeg',
    quote: `Andreu is a UX Rockstar. Hire this guy! We worked together for over 18 months at Satmetrix. He came on-board to help us establish our pattern library (design system) and stayed on to design key features for our CEM software: NPX. Typically Andreu led the projects from start to finish.

He is a meticulous professional. He always delivered well thought out and well-detailed designs. He can handle gnarly UX hairballs and keep his cool under pressure. I told you: Rockstar material. I wish you all the best Andreu. It was such a pleasure working with you.`,
  },
  {
    name: 'Maneesh Agawal ',
    role: 'Satmetrix',
    year: '2016',
    photo: 'maneesh.jpeg',
    quote: `Andreu is a product UX design consultant with whom I fortunately had many opportunities to work very closely.

He has helped me successfully address a lot of design requirements for some of our very critical and complex projects. He is very professional and always brings in fresh perspective on the table. He is not afraid to challenge ideas and that has hugely benefited the team and the project.

I have been immensely satisfied by his ability to perform under pressure and deliver great results. I can definitely rely on him to help meet our company's product design goals and always welcome an opportunity to work with him in future.`,
  },
  {
    name: 'Todd Silverstein',
    role: 'Yahoo',
    year: '2015',
    photo: 'todd.jpeg',
    quote: `If you're considering working with Andreu, I'd highly recommend you take that opportunity. In addition to being a fast and fantastic visual designer, he's empathetic, and always-thoughtful about higher-level experience considerations, and also a pleasure to work with.

He was a true partner to me and to the product teams he worked with most recently at Yahoo, helping to craft experiences that have delighted millions of Yahoo's end users.`,
  },
   {
    name: 'Angelika Stalman',
    role: 'Nokia',
    year: '2012',
    photo: 'angelika.jpeg',
    quote: `We hit a jackpot with Andreu. His craft is in his ability to quickly translate technology into product UI scenarios that bring to life a vision that would otherwise only exist on paper.

He's done a tremendous job building out product concepts on the web and on device, that our incumbent UI engineers ended up adopting for their final product.

He's also created the most spectacular vector based UI art illustrating our location services apps that ended up in Stephen Elop's 2011 MWC keynote presentation. And on top of his talent, he's a wonderful person to work with. Extremely detail oriented and a great listener.`,
  },
]


