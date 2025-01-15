import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
    resources: {
        ar: {
            translation: {
                welcome: "مرحبًا بك!",
                switch: "تبديل اللغة",
                enter: "الدخول",
                LoggingIn:"يتم تسجيل الدخول...",
                registerFreeNow: "سجل مجاناً الآن",
                english: "الإنجايزية",
                arabic: "العربية",
                registration_title: "تسجيل قدرات",
                Carousel1:"تعليمك عالي و بتعاني في البحث عن الوظيفة المناسبة لقدراتك؟",
                Carousel2:"هل سئمت من البحث عن الوظيفة المناسبة في المئات من المواقع؟",
                Carousel3:"نساعدك بجع فرص العمل المناسبة لقدراتك و المتوفره في العديد من المواقع في مكان واحد",
                Carousel4:"هل تبحث عن خدمات استشارية تساعدك في تطوير موقعك في سوق العمل؟",
                Carousel5:"نساعدك أيضا في معرفة الدورات التدريبية المطلوبة لوظيفة احلامك",
                Box1Header: "ماذا تنتظر؟",
                Box1P1: "سجل الآن و تمتّع بخدمات استشارية للتوظيف لك و لأولادك من منزلك",
                Box1P2: "احصل على قسيمة خصم بقيمة ",
                Sale: "50 جنيها",
                Box2P22: " فور التسجيل",
                Box1Button: "التسجيل مجاني",
                footer_h1:"معلومات تهمك",
                footer_p1: "من نحن؟\nعن قدرات\nدوافع إنشاء قدرات\nالرؤية\nسرية المعلومات",
                footer_h2:"شركاء التعاون",
                footer_p2: "المؤسسات التعليمية\nمراكز التدريب\nشركات التوظيف\nالمستثمرين و رجال الأعمال\nالمؤسسات الحكومية",
                footer_h3: "تواصل معنا",
                footer_h4:"التطبيقات على الهواتف",
                welcomeqod:"مرحبــا بك في قدرات",
                email:" البريد الإلكتروني",
                Password:"كلمة المرور",
                forgot:"هل نسيت اسم المستخدم / كلمة المرور؟",
                noAccount:"ليس لديك حساب؟",
                signUp:"أنشئ حساب",
                FirstName:"الاسم الأول",
                SecondName:"الاسم الثاني",
                FamilyName:"اسم العائلة",
                BirthDate:"تاريخ الميلاد",
                BirthPlace:"مكان الميلاد",
                Gender:"النوع",
                Male:"ذكر",
                Female:"أنثى",
                Select:"اختر",
                PreferredWorkLocation:"موقع العمل المفضل",
                MilitaryStatus:"حالة التجنيد",
                NotApplicable:"غير مطبق",
                Exempted:"معفي",
                Completed:"مكتمل",
                Postponed:"مؤجل",
                EgyptianNationalNumber:"الرقم القومي",
                check1:"هل تعمل على الحصول على درجة الدكتوراه أو أكملتها؟",
                check2:"هل تعمل على الحصول على درجة الماجيستير أو أكملتها؟",
                check3:"هل تعمل على الحصول على درجة البكاليريوس أو أكملتها؟",
                check4:"هل تعمل على الحصول على درجة دبلوم مهني/تقني أو أكملته؟",
                Policy:"أوافق على شروط الاستخدام وسياسة الخصوصية",
                DrivingLicense:"رخصة القيادة",
                disabilities:"هل أنت من ذوي الهمم؟",
                VisualImpairment:"ضعف البصر",
                HearingImpairment:"ضعف السمع",
                MobilityImpairment:"ضعف الحركة",
                CognitiveImpairment:"ضعف الإدراك",
                Other:"أخرى",
                MobileNumber:"رقم الهاتف",
                PostalCode:"كود البريد",
                no:"لا يوجد",
                ThirdDegree:"درجة أولى",
                SecondDegree:"درجة ثانية",
                FirstDegree:"درجة ثالثة",
                Private:"خاص",
                ConfirmMail:"تأكيد البريد الإلكتروني",
                ConfirmPassword:"تأكيد كلمة المرور",
                Register:"تسجيل",
                Status:"الحالة",
                InProgress:"في تقدم",
                GraduationYear:"عام التخرج",
                UniversityName:"الكلية",
                CollegeName:"الجامعة",
                Grade:"التقدير",
                NameofSpecialization:"اسم التخصص",
                sunburst1:"الأنشطة المنزلية",
                sunburst2:"النقل والتخزين",
                sunburst3:"التجارة بالجملة والتجزئة",
                sunburst4:"الإقامة وخدمات الطعام",
                sunburst5:"المعلومات والاتصالات",
                sunburst6:"الوساطة المالية والتأمين",
                sunburst7:"العقارات والتأجير",
                sunburst8:"الأنشطة العلمية والتقنية",
                sunburst9:"الخدمات الإدارية والدعم",
                sunburst10:"أنشطة الخدمات الأخرى",
                sunburst11:"الإدارة العامة والدفاع",
                sunburst12:"المؤسسات خارج الإقليم",
                sunburst13:"مرافق الطاقة",
                sunburst14:"مرافق المياه",
                sunburst15:"التعليم",
                sunburst16:"الصحة والعمل الاجتماعي",
                sunburst17:"الفنون والترفيه",
                sunburst18:"الصناعات التحويلية",
                sunburst19:"التشييد والبناء",
                sunburst20:"الزراعة والغابات وصيد الأسماك",
                sunburst21:"التعدين وإستغلال المحاجر",
                homeBtn1:"سوق العمل المصري",
                homeBtn2:"وظائف تناسبك",
                homeBtn3:"وظائف تتمناها",
                homeBtn4:"قدراتك",
                homeBtn5:"اعرف قدراتك",
                homeBtn6:"نمّي قدراتك",
                Experience:"خبرة",
                part1:"الخدمات والتجارة",
                part2:"القطاع العام والمرافق العامة",
                part3:"الخدمات الإنسانية والاجتماعية",
                part4:"التصنيع والبناء",
                part5:"الصناعات الأولية",
                AddExperience:"إضافة خبرة",
                Title:"اسم الوظيفة*",
                ExTitle:"مثل: مدير مبيعات التجزئة",

            }
        },
        en: {
            translation: {
                welcome: "Welcome!",
                switch: "Switch Language",
                enter: "Login",
                LoggingIn:"Logging in...",
                registerFreeNow: "Register Free Now",
                english: "English",
                arabic: "Arabic",
                registration_title: "Qodourat Registration",
                Carousel1:"University educated and struggling to find a suitable job?",
                Carousel2:"Are you tired of looking for the right job in hundreds of websites?",
                Carousel3:"Seeking career consulting services that will help position your capabilities in the job market?",
                Carousel4:"We help you find the right job opportunities and bring them all in one place",
                Carousel5:"We also help you know the training courses required for your dream job",
                Box1Header:"What are you waiting for?",
                Box1P1: "Register now at Engie Th Bed Consulting Services and Over for You at Your Child, from the Comfort of Your Home",
                Box1P2: "Receive a ",
                Sale: "50 EGP",
                Box2P22: " discount voucher upon registration",
                Box1Button: "Free Registration",
                footer_h1:"Good to know",
                footer_p1: "Who we are?\nAbout Qodourat\nMotives behind Qodourat\nOur Vision\nPrivacy Note\nSite Map\nFAQ",
                footer_h2:"Employment Ecosystem",
                footer_p2: "Education Institutes?\nTraining Centers\nRecruitment Agencies\nInvestors and incubators\nGovernment Entities",
                footer_h3: "Social Media",
                footer_h4:"Mobile Apps",
                welcomeqod:"Welcome To Qodourat",
                email:"Email address",
                Password:"Password",
                forgot:"Forgot Username / Password?",
                noAccount:"Don't have an account?",
                signUp:"Sign Up",
                FirstName:"First Name",
                SecondName:"Second Name",
                FamilyName:"Family Name",
                BirthDate:"Birth Date",
                BirthPlace:"Birth Place",
                Gender:"Gender",
                Male:"Male",
                Female:"Female",
                Select:"Select",
                PreferredWorkLocation:"Preferred Work Location",
                MilitaryStatus:"Military Status",
                NotApplicable:"Not Applicable",
                Exempted:"Exempted",
                Completed:"Completed",
                Postponed:"Postponed",
                EgyptianNationalNumber:"Egyptian National Number",
                check1:"Are you working on or have completed a Doctoral Degree",
                check2:"Are you working on or have completed a Master's Degree?",
                check3:"Are you working on or have completed a Bachelor’s Degree?",
                check4:"Are you working on or have completed a Vocational/Technical Diploma?",
                Policy:"I agree to the Terms of Use and Privacy Policy",
                DrivingLicense:"Driving License",
                disabilities:"Do you have any disabilities?",
                VisualImpairment:"Visual Impairment",
                HearingImpairment:"Hearing Impairment",
                MobilityImpairment:"Mobility Impairment",
                CognitiveImpairment:"Cognitive Impairment",
                Other:"Other",
                MobileNumber:"Mobile Number",
                PostalCode:"Postal Code",
                no:"Not exist",
                ThirdDegree:"Third Degree",
                SecondDegree:"Second Degree",
                FirstDegree:"First Degree",
                Private:"Private",
                ConfirmMail:"Confirm Email",
                ConfirmPassword:"ConfirmPassword",
                Register:"Register",
                Status:"Status",
                InProgress:"In Progress",
                GraduationYear:"Graduation Year",
                UniversityName:"University Name",
                CollegeName:"College Name",
                Grade:"Grade",
                NameofSpecialization:"Name of Specialization",
                sunburst1:"Household Activities",
                sunburst2:"Transportation and Storage",
                sunburst3:"Wholesale and Retail Trade",
                sunburst4:"Accommodation and Food Services",
                sunburst5:"Information and Communication",
                sunburst6:"Financial and Insurance Activities",
                sunburst7:"Real Estate Activities",
                sunburst8:"Professional and Technical Services",
                sunburst9:"Administrative and Support Services",
                sunburst10:"Other service activities",
                sunburst11:"Public Administration",
                sunburst12:"Extraterritorial Organizations",
                sunburst13:"Energy Utilities",
                sunburst14:"Water Utilities",
                sunburst15:"Education",
                sunburst16:"Health and Social Work",
                sunburst17:"Arts, Entertainment, and Recreation",
                sunburst18:"Manufacturing",
                sunburst19:"Construction",
                sunburst20:"Agriculture, Forestry, and Fishing",
                sunburst21:"Mining and Quarrying",
                homeBtn1:"Egyptian labor market",
                homeBtn2:"Jobs For You",
                homeBtn3:"Jobs You Wish",
                homeBtn4:"Your Skills",
                homeBtn5:"Know your Skills",
                homeBtn6:"Develop your Skills",
                Experience:"Experience",
                part1:"Services and Trade",
                part2:"Public Sector and Utilities",
                part3:"Human and Social Services",
                part4:"Manufacturing and Construction",
                part5:"Primary Industries",
                AddExperience:"Add Experience",
                Title:"Title*",
                ExTitle:"Ex: Retail Sales Manager",

            }
        },
    },
    lng: 'ar', // Default language
    fallbackLng: 'ar',
    interpolation: { escapeValue: false },
});

export default i18n;
