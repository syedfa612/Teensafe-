export interface ScenarioQuestion {
  id: string;
  scenario: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TopicData {
  slug: string;
  title: string;
  description: string;
  icon: string;
  readingTime: string;
  lessonContent: string[];
  takeaways: string[];
  questions: ScenarioQuestion[];
}

export const TOPICS: TopicData[] = [
  {
    slug: "cyberbullying",
    title: "Cyberbullying & Online Harassment",
    description: "Learn how to identify subtle harassment, resist peer pressure, and document digital abuse safely.",
    icon: "ShieldAlert",
    readingTime: "3 min read",
    lessonContent: [
      "Cyberbullying involves using digital communication (texts, social media, game lobbies) to intimidate, humiliate, or harass someone repeatedly.",
      "Forms include exclusion (deliberately leaving people out of group chats), outing (sharing private photos or secrets without consent), and masquerading (creating fake accounts to bully).",
      "Crucial Rule: Do not retaliate or engage directly. Bullies seek a reaction. Document everything with timestamped screenshots, block the offender, and report to a trusted adult or platform moderator.",
    ],
    takeaways: [
      "Never retaliate in anger; save screenshot evidence first.",
      "Use platform mute, restrict, and block features early.",
      "Anonymously report persistent harassment to school counselors or helplines.",
    ],
    questions: [
      {
        id: "cb-1",
        scenario: "A classmate posts an embarrassing, edited photo of you in a public group chat and others are laughing. What is the most effective first step?",
        options: [
          "Post an even worse picture of them in revenge",
          "Take a screenshot showing the username and timestamp, then leave the group and inform a counselor",
          "Delete your social media account permanently without saving proof",
          "Beg the person privately to remove it",
        ],
        correctIndex: 1,
        explanation: "Preserving timestamped evidence is essential before blocking or exiting. Retaliating escalates the harassment and can get you penalized as well.",
      },
      {
        id: "cb-2",
        scenario: "You notice several friends constantly creating new gaming lobbies and intentionally kicking out one specific player to make them feel isolated. This is an example of:",
        options: [
          "Healthy competitive gaming",
          "Social exclusion cyberbullying",
          "Accidental server glitch",
          "Harmless friendly banter",
        ],
        correctIndex: 1,
        explanation: "Deliberate and repeated exclusion from shared digital spaces is a recognized form of relational cyberbullying that causes emotional distress.",
      },
      {
        id: "cb-3",
        scenario: "An anonymous profile sends you threatening direct messages demanding you stop talking to a mutual friend. What should you do?",
        options: [
          "Reply asking who they are and argue with them",
          "Screenshot the messages, report the profile to platform moderation, and block without responding",
          "Ignore it and keep it completely secret",
          "Agree to their demands out of fear",
        ],
        correctIndex: 1,
        explanation: "Never feed anonymous trolls. Collect evidence, report the profile for harassment, and block.",
      },
      {
        id: "cb-4",
        scenario: "Why is screenshotting with the timestamp and handle important when handling digital harassment?",
        options: [
          "To show everyone at school for revenge",
          "Because messages can be unsent or deleted by the sender, destroying necessary proof",
          "It automatically bans the user from the internet",
          "It earns you extra points in social apps",
        ],
        correctIndex: 1,
        explanation: "Modern messaging platforms allow users to 'unsend' or delete messages. Saving immediate proof preserves evidence for parents, school officials, or cyber police.",
      },
      {
        id: "cb-5",
        scenario: "A friend tells you they feel overwhelmed and sad because of continuous cruel comments on their TikTok videos. How should you support them?",
        options: [
          "Tell them to 'just toughen up, it's just the internet'",
          "Help them turn on comment filters, report the bullies together, and encourage speaking to a counselor",
          "Go attack the commenters from your own account",
          "Advise them to post more provocative content to prove their courage",
        ],
        correctIndex: 1,
        explanation: "Empathetic support combined with technical filtering and adult escalation creates safe boundaries without escalating hostility.",
      },
    ],
  },
  {
    slug: "phishing",
    title: "Phishing & Social Engineering Scams",
    description: "Spot fake giveaways, urgent verification traps, and lookalike domains designed to steal your logins.",
    icon: "Fish",
    readingTime: "4 min read",
    lessonContent: [
      "Phishing is an attack where cybercriminals impersonate brands (Instagram, Discord, banks, gaming platforms) to trick you into revealing passwords or credit cards.",
      "Scammers exploit emotional triggers: extreme urgency ('Account closing in 1 hour!'), fake authority ('Official Security Team'), or unbelievable excitement ('Free $50 Steam card!').",
      "Look carefully at the sender email, URL spelling (e.g. 'instagrarn.com' or 'disc0rd.gifts.xyz'), and unexpected attachments.",
    ],
    takeaways: [
      "Official companies never ask for your password or 2FA codes via DM.",
      "Check domain URLs letter-by-letter before typing login credentials.",
      "Enable Two-Factor Authentication (2FA) via authenticator apps.",
    ],
    questions: [
      {
        id: "ph-1",
        scenario: "You receive a DM on Discord from a friend's account saying: 'Hey I entered a tournament, please vote for my team on steam-giveaway-tourney.xyz!' What should you do?",
        options: [
          "Immediately click the link and log in with your Steam account to help your friend",
          "Recognize this is a classic token-stealing scam and verify with your friend through a different channel (call or text)",
          "Forward the link to all your Discord servers",
          "Reply with your credit card number",
        ],
        correctIndex: 1,
        explanation: "Hacked accounts are frequently used to spread malicious phishing links to friends. Always verify unusual requests through a secondary channel.",
      },
      {
        id: "ph-2",
        scenario: "Which of the following domain names is a deceptive lookalike (typosquatting) attempt?",
        options: [
          "https://instagram.com/help",
          "https://login-instagrarn-security.net",
          "https://support.google.com",
          "https://store.steampowered.com",
        ],
        correctIndex: 1,
        explanation: "'instagrarn' uses 'rn' to look like 'm'. Typosquatting is a prime social engineering tactic.",
      },
      {
        id: "ph-3",
        scenario: "An email with an Instagram logo claims your account has copyright violations and will be permanently deleted unless you click a link within 15 minutes. This relies on:",
        options: [
          "Routine platform policy",
          "Artificial urgency to cause panic and bypass your critical thinking",
          "Standard copyright legal protocol",
          "Friendly customer care",
        ],
        correctIndex: 1,
        explanation: "Artificial panic and short deadlines are designed to force victims to act before verifying validity.",
      },
      {
        id: "ph-4",
        scenario: "What should you do if you accidentally typed your password into a suspicious phishing page?",
        options: [
          "Wait a few weeks to see if anything bad happens",
          "Immediately navigate to the genuine website, change your password, and enable 2-factor authentication",
          "Delete your browser history",
          "Turn off your computer and leave it unplugged",
        ],
        correctIndex: 1,
        explanation: "Immediate password reset on the real site cuts off the attacker's window of opportunity before they exploit stolen credentials.",
      },
      {
        id: "ph-5",
        scenario: "A caller claims to be your phone provider and asks for the 6-digit SMS verification code just sent to your phone. What should you do?",
        options: [
          "Read them the code quickly",
          "Refuse and hang up; legitimate companies explicitly state 'never share this code with anyone, including employees'",
          "Text them the code along with your home address",
          "Ask them to call back in 5 minutes and then share it",
        ],
        correctIndex: 1,
        explanation: "SMS OTPs and 2FA tokens are personal keys. Legitimate customer service agents never need your OTP.",
      },
    ],
  },
  {
    slug: "passwords-privacy",
    title: "Password Hygiene & Privacy Controls",
    description: "Create unbreakable passphrases, protect account metadata, and control who can see your digital footprint.",
    icon: "KeyRound",
    readingTime: "3 min read",
    lessonContent: [
      "Password reuse is the number one cause of secondary account breaches. If a minor game forum gets breached, attackers test that same email/password on Gmail, Discord, and Instagram.",
      "Use passphrases of 4+ random words (e.g., 'purple-battery-staple-cloud') rather than complex short strings that are easily forgotten.",
      "Review app privacy settings quarterly: disable precise location sharing for social cameras, restrict friend-list visibility, and audit connected third-party apps.",
    ],
    takeaways: [
      "Never reuse the same password across multiple platforms.",
      "Passphrases (long memorable phrases) beat short complex passwords.",
      "Turn off precise location permissions on photo and social apps.",
    ],
    questions: [
      {
        id: "pp-1",
        scenario: "Why is using 'Alex2026!' for your email, gaming accounts, and social media dangerous?",
        options: [
          "It uses too many capital letters",
          "If any single platform suffers a data breach, hackers will use credential stuffing to unlock all your other accounts",
          "It takes too long to type",
          "Websites do not allow exclamation marks",
        ],
        correctIndex: 1,
        explanation: "Credential stuffing bots automatically test breached credentials across hundreds of popular services.",
      },
      {
        id: "pp-2",
        scenario: "Which method is the most secure for managing unique passwords for 30+ services?",
        options: [
          "Writing them on a sticky note attached to your laptop",
          "Using a reputable password manager protected by a strong master passphrase and biometric/2FA",
          "Using your pet's name followed by 1, 2, 3...",
          "Saving them in a public Google Doc",
        ],
        correctIndex: 1,
        explanation: "Password managers generate and store cryptographically random passwords, eliminating password reuse completely.",
      },
      {
        id: "pp-3",
        scenario: "You post a selfie outside your house. Which hidden risk should you be aware of?",
        options: [
          "The photo might reveal your house number, street name, or embedded EXIF GPS coordinates to strangers",
          "The photo will use too much cloud storage",
          "The camera flash can damage the internet",
          "Instagram doesn't allow outdoor pictures",
        ],
        correctIndex: 0,
        explanation: "Street signs, unique house features, and metadata can allow online stalkers to triangulate your exact physical location.",
      },
      {
        id: "pp-4",
        scenario: "What does Two-Factor Authentication (2FA) protect against?",
        options: [
          "Slow Wi-Fi speeds",
          "An attacker accessing your account even if they somehow obtained your password",
          "Hardware screen cracks",
          "Computer viruses on thumb drives",
        ],
        correctIndex: 1,
        explanation: "2FA requires a secondary verification step (like an authenticator app prompt) that an attacker lacks even with the password.",
      },
      {
        id: "pp-5",
        scenario: "A quiz game on social media asks: 'What was your first pet's name and the street you grew up on?' This is often a trap to:",
        options: [
          "Calculate your horoscope",
          "Harvest answers to common security questions used for password recovery",
          "Benchmark your memory skills",
          "Create a customized character skin",
        ],
        correctIndex: 1,
        explanation: "Viral quizzes are often designed by identity thieves to harvest answers to standard security questions.",
      },
    ],
  },
  {
    slug: "fake-profiles",
    title: "Fake Profiles & Impersonation",
    description: "Detect catfishing, AI-generated synthetic avatars, and impersonation attempts before trusting online strangers.",
    icon: "UserX",
    readingTime: "3 min read",
    lessonContent: [
      "Catfishing involves creating deceptive online identities using stolen photos or AI-generated faces (StyleGAN) to manipulate minors.",
      "Warning signs of synthetic avatars: mismatched earrings, distorted background blur, unnatural pupil shapes, and refusal to do a live video call.",
      "Grooming red flags: showering you with excessive flattery, asking to move conversations to unmoderated encrypted apps (Telegram, Snapchat), and demanding secrecy from parents.",
    ],
    takeaways: [
      "Refusal to video call is a major indicator of identity deception.",
      "Beware of strangers asking you to keep digital friendships secret.",
      "Use reverse image search on suspicious profile pictures.",
    ],
    questions: [
      {
        id: "fp-1",
        scenario: "An attractive person messages you online claiming to be a 15-year-old from your city, but repeatedly makes excuses to avoid video calling. What is the smartest reaction?",
        options: [
          "Send them your personal phone number and home address",
          "Recognize this as a high-risk red flag for catfishing/impersonation and refuse to meet or share private media",
          "Agree to meet them alone in a secluded park",
          "Send them money for a new webcam",
        ],
        correctIndex: 1,
        explanation: "Catfishers routinely claim technical issues to avoid showing their real identity on camera.",
      },
      {
        id: "fp-2",
        scenario: "An online gaming acquaintance asks you to switch from the monitored Discord server to private encrypted messaging and says 'Don't tell your parents, it's our special secret.' This is:",
        options: [
          "A classic grooming and manipulation tactic to isolate you from safety support systems",
          "A sign of true friendship",
          "Standard competitive gamer etiquette",
          "A privacy feature required by Discord",
        ],
        correctIndex: 0,
        explanation: "Predators deliberately try to isolate minors by insisting on secrecy from parents and mentors.",
      },
      {
        id: "fp-3",
        scenario: "How can you check if a stranger's profile picture is stolen from a model or someone else?",
        options: [
          "Ask them if they stole it",
          "Use Google Reverse Image Search or TinEye to check where else the picture appears on the web",
          "Assume all pictures on the internet are genuine",
          "Look at the picture with sunglasses",
        ],
        correctIndex: 1,
        explanation: "Reverse image search traces whether a photo has been ripped from public modeling portfolios or existing social media accounts.",
      },
      {
        id: "fp-4",
        scenario: "What is an anomaly often seen in AI-generated fake profile photos?",
        options: [
          "Asymmetrical earrings, warped hair textures blending into the background, or odd pupils",
          "The photo is black and white only",
          "The person is always smiling",
          "The file size is always over 50 GB",
        ],
        correctIndex: 0,
        explanation: "Generative AI models often struggle with symmetrical jewelry, eyeglasses alignment, teeth boundaries, and background coherence.",
      },
      {
        id: "fp-5",
        scenario: "An account with your friend's exact name and picture suddenly follows you and asks you to send them money because 'they lost their wallet'. What should you do?",
        options: [
          "Transfer the cash immediately",
          "Call your friend on their known phone number or speak to them in person to confirm if the profile is an imposter clone",
          "Post their request on your story",
          "Send half the amount just in case",
        ],
        correctIndex: 1,
        explanation: "Cloned accounts impersonate existing contacts to exploit mutual trust. Always verify out-of-band.",
      },
    ],
  },
  {
    slug: "screen-time",
    title: "Screen Time & Algorithmic Wellness",
    description: "Understand doom-scrolling, algorithmic dopamine loops, and actionable boundary habits for mental health.",
    icon: "Clock",
    readingTime: "3 min read",
    lessonContent: [
      "Social media algorithms are engineered using variable reward schedules (like slot machines) to maximize time spent on screen.",
      "Doom-scrolling late at night suppresses melatonin production (due to blue light) and elevates cortisol levels, triggering anxiety and poor academic focus.",
      "Regaining control: turn off non-essential notifications, enforce a 'no phone in bedroom 30 mins before sleep' rule, and replace endless scrolling with active digital creation.",
    ],
    takeaways: [
      "Algorithms are designed to trigger dopamine hits, not to promote well-being.",
      "Charge your phone outside your bedroom to protect sleep quality.",
      "Set app limits to break automatic mindless scrolling loops.",
    ],
    questions: [
      {
        id: "st-1",
        scenario: "Why do short-form video feeds (Reels, TikTok, Shorts) make it difficult to stop scrolling?",
        options: [
          "The internet automatically slows down after 20 minutes",
          "They use intermittent variable rewards: you never know if the next swipe will be boring or hilarious, mimicking casino psychology",
          "The phone physically locks until 100 videos are watched",
          "Videos only work when swiped rapidly",
        ],
        correctIndex: 1,
        explanation: "Intermittent variable reinforcement releases unpredictable dopamine hits, leading to compulsive swiping behavior.",
      },
      {
        id: "st-2",
        scenario: "What is the biological impact of looking at bright smartphone screens right before bed?",
        options: [
          "It improves night vision",
          "Blue light suppresses melatonin synthesis, delaying sleep onset and degrading REM recovery",
          "It accelerates cell repair in the brain",
          "It has no proven biological effect",
        ],
        correctIndex: 1,
        explanation: "Blue wavelength light signals daylight to the brain, suppressing natural sleep hormones like melatonin.",
      },
      {
        id: "st-3",
        scenario: "Which habit is most effective for reducing mindless phone usage during study hours?",
        options: [
          "Keeping the phone right next to your keyboard with notifications on full volume",
          "Placing the phone on Do Not Disturb in another room or inside a drawer",
          "Checking notifications every 3 minutes",
          "Setting the screen brightness to maximum",
        ],
        correctIndex: 1,
        explanation: "Physical friction (placing the device out of arm's reach) breaks the subconscious habit loop of reaching for the phone.",
      },
      {
        id: "st-4",
        scenario: "What does 'doom-scrolling' refer to?",
        options: [
          "Playing games with monsters",
          "Compulsively scrolling through negative, distressing news and media feeds despite feeling anxious or depressed",
          "Deleting old text messages",
          "Upgrading your operating system",
        ],
        correctIndex: 1,
        explanation: "Doom-scrolling describes the compulsive consumption of catastrophic content despite recognized emotional harm.",
      },
      {
        id: "st-5",
        scenario: "How can you tell if your screen time is becoming unhealthy?",
        options: [
          "When you use a computer for homework",
          "When digital usage displaces real-world sleep, physical activity, offline friendships, and emotional balance",
          "When your battery percentage drops below 50%",
          "When your device receives software updates",
        ],
        correctIndex: 1,
        explanation: "Healthy screen time is defined by functional balance. When digital consumption harms sleep, academics, or health, boundaries are needed.",
      },
    ],
  },
];
