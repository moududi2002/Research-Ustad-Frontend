export const RESEARCH_SERVICES = [
  {
    id: "one-to-one-mentorship",
    title: "One-to-One Mentorship & Support",
    description:
      "আপনার গবেষণার লক্ষ্য, সমস্যা ও বর্তমান অগ্রগতি অনুযায়ী ব্যক্তিগত মেন্টরশিপ এবং ধাপে ধাপে পরামর্শ।",
    highlights: ["Research roadmap", "Personalized feedback", "Problem solving"],
  },
  {
    id: "research-group-support",
    title: "Research Group Support",
    description:
      "গবেষণা দলের পরিকল্পনা, দায়িত্ব বণ্টন, নিয়মিত আলোচনা, সমন্বয় ও গবেষণার মান উন্নয়নে সহায়তা।",
    highlights: ["Team planning", "Research coordination", "Progress review"],
  },
  {
    id: "lab-report-writing",
    title: "Lab Report Writing",
    description:
      "ল্যাব রিপোর্টের গঠন, ফলাফল বিশ্লেষণ, গ্রাফ, আলোচনা এবং সঠিক একাডেমিক উপস্থাপনায় গাইডলাইন।",
    highlights: ["Report structure", "Data interpretation", "Academic format"],
  },
  {
    id: "academic-project-support",
    title: "Academic Project Support",
    description:
      "একাডেমিক প্রজেক্টের বিষয় নির্বাচন, পরিকল্পনা, বাস্তবায়ন, টেস্টিং ও ডকুমেন্টেশনে সহযোগিতা।",
    highlights: ["Project planning", "Implementation guidance", "Documentation"],
  },
  {
    id: "thesis-writing",
    title: "Thesis Writing & Research Guidance",
    description:
      "টপিক নির্বাচন, লিটারেচার রিভিউ, মেথডোলজি, ডেটা অ্যানালাইসিস ও থিসিস লেখার প্রতিটি গুরুত্বপূর্ণ ধাপে সহায়তা।",
    highlights: ["Topic & methodology", "Analysis guidance", "Thesis review"],
  },
  {
    id: "thesis-defence",
    title: "Thesis Defence Preparation",
    description:
      "ডিফেন্স প্রেজেন্টেশন তৈরি, গবেষণার অবদান ব্যাখ্যা এবং সম্ভাব্য প্রশ্নোত্তরের অনুশীলনে দিকনির্দেশনা।",
    highlights: ["Slide preparation", "Mock Q&A", "Confident presentation"],
  },
  {
    id: "paper-writing",
    title: "Academic & Research Paper Writing",
    description:
      "রিসার্চ পেপারের স্ট্রাকচার, একাডেমিক রাইটিং, রেফারেন্সিং, রিভিশন ও উপযুক্ত জার্নাল নির্বাচনে সহায়তা।",
    highlights: ["Paper structure", "Academic editing guidance", "Journal selection"],
  },
  {
    id: "journal-publication",
    title: "Journal Publication Support",
    description:
      "জার্নাল নির্বাচন, সাবমিশন ও পিয়ার রিভিউ প্রক্রিয়ায় গাইডলাইন। উপযুক্ত পেপারের জন্য শর্তসাপেক্ষে Zero Publication Fee-এর সুযোগ খুঁজে পেতে সহায়তা।",
    highlights: ["Submission guidance", "Peer-review response", "Conditional zero-fee options"],
  },
  {
    id: "premium-paper-access",
    title: "Premium Paper Access",
    description:
      "বিশ্বের বিভিন্ন জার্নালের পেইড রিসার্চ পেপারের আইনসম্মত বিনামূল্যের সংস্করণ (open access, preprint বা author-shared copy) খুঁজে পেতে সহায়তা।",
    highlights: ["Open-access discovery", "Preprint search", "Authorized copies"],
  },
] as const;

export type ResearchServiceId = (typeof RESEARCH_SERVICES)[number]["id"];

export const ACADEMIC_LEVELS = [
  "Undergraduate",
  "Masters",
  "MPhil",
  "PhD",
  "Postdoctoral",
  "Faculty / Researcher",
  "Other",
] as const;
