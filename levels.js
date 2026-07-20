// قاعدة بيانات المراحل الكاملة (100 مرحلة بدون أي اختصارات)
const ANIME_LEVELS = [
    // === 1. Naruto (المراحل 1 - 10) ===
    {
        id: 1,
        anime: "Naruto",
        question: "البطل الرئيسي للسلسلة والنينجا الذي يحلم بأن يصبح الهوكاجي ويحب الرامين.",
        answer: "ناروتو",
        image: "assets/images/naruto_1.jpg"
    },
    {
        id: 2,
        anime: "Naruto",
        question: "النينجا العبقري من عشيرة الأوتشيها والمنافس الأول لناروتو.",
        answer: "ساسكي",
        image: "assets/images/naruto_2.jpg"
    },
    {
        id: 3,
        anime: "Naruto",
        question: "الأستاذ قائد الفريق السابع، معروف بنينجا النسخ ووقناع وجهه الحاضر دائمًا.",
        answer: "كاكاشي",
        image: "assets/images/naruto_3.jpg"
    },
    {
        id: 4,
        anime: "Naruto",
        question: "لقب الهوكاجي الرابع، وهو والد ناروتو ومخترع الراسينجان.",
        answer: "ميناتو",
        image: "assets/images/naruto_4.jpg"
    },
    {
        id: 5,
        anime: "Naruto",
        question: "شقيق ساسكي الأكبر الذي أباد عشيرته لحماية القرية وانضم للأكاتسكي.",
        answer: "إيتاشي",
        image: "assets/images/naruto_5.jpg"
    },
    {
        id: 6,
        anime: "Naruto",
        question: "اسم قرية النينجا المخفية التي ينتمي إليها ناروتو وساسكي.",
        answer: "كونوها",
        image: "assets/images/naruto_6.jpg"
    },
    {
        id: 7,
        anime: "Naruto",
        question: "النينجا الأسطوري والكاتب المنحرف الذي درب ناروتو وجيرايا كان اسمه...",
        answer: "جيرايا",
        image: "assets/images/naruto_7.jpg"
    },
    {
        id: 8,
        anime: "Naruto",
        question: "الوحش ذو الذيول التسعة المختوم بداخل جسد ناروتو.",
        answer: "كوراما",
        image: "assets/images/naruto_8.jpg"
    },
    {
        id: 9,
        anime: "Naruto",
        question: "التقنية القتالية الشهيرة لناروتو التي تعتمد على تدوير التشاكرا في كف اليد.",
        answer: "راسينجان",
        image: "assets/images/naruto_9.jpg"
    },
    {
        id: 10,
        anime: "Naruto",
        question: "مؤسس عشيرة الأوتشيها والخصم الأسطوري الذي أيقظ التسوكيومي اللانهائية.",
        answer: "مادارا",
        image: "assets/images/naruto_10.jpg"
    },

    // === 2. One Piece (المراحل 11 - 20) ===
    {
        id: 11,
        anime: "One Piece",
        question: "قائد طاقم قبعة القش الذي يطمح لأن يصبح ملك القراصنة.",
        answer: "لوفي",
        image: "assets/images/one_piece_1.jpg"
    },
    {
        id: 12,
        anime: "One Piece",
        question: "السياف الأقوى في الطاقم الذي يقاتل بأسلوب الثلاثة سيوف ويعاني من ضياع الاتجاهات.",
        answer: "زورو",
        image: "assets/images/one_piece_2.jpg"
    },
    {
        id: 13,
        anime: "One Piece",
        question: "طباخ الطاقم الذكي ذو الساق السوداء الذي يرفض استخدام يديه في القتال.",
        answer: "سانجي",
        image: "assets/images/one_piece_3.jpg"
    },
    {
        id: 14,
        anime: "One Piece",
        question: "شقيق لوفي بالتبني وقائد فرقة اللحية البيضاء الثاني، مستخدم فاكهة النار.",
        answer: "إيس",
        image: "assets/images/one_piece_4.jpg"
    },
    {
        id: 15,
        anime: "One Piece",
        question: "القرصان ذو الشعر الأحمر الذي ألهم لوفي وأعطاه قبعة القش الأسطورية.",
        answer: "شانكس",
        image: "assets/images/one_piece_5.jpg"
    },
    {
        id: 16,
        anime: "One Piece",
        question: "طبيب الطاقم الرنة اللطيف المحب للحلويات والقطن الحلو.",
        answer: "تشوبر",
        image: "assets/images/one_piece_6.jpg"
    },
    {
        id: 17,
        anime: "One Piece",
        question: "ملاحة الطاقم الذكية البارعة في رسم الخرائط وتوقعات الطقس وتعشق الأموال.",
        answer: "نامي",
        image: "assets/images/one_piece_7.jpg"
    },
    {
        id: 18,
        anime: "One Piece",
        question: "القرصان الأسطوري الذي أعدم وبدأت كلماته عصر القراصنة العظيم.",
        answer: "روجير",
        image: "assets/images/one_piece_8.jpg"
    },
    {
        id: 19,
        anime: "One Piece",
        question: "المقر الرئيسي للحكومة والعالم السفلي الذي تجتمع فيه قوى العدالة ومكان الإعدام الشهير.",
        answer: "مارينفورد",
        image: "assets/images/one_piece_9.jpg"
    },
    {
        id: 20,
        anime: "One Piece",
        question: "الاسم العام للفواكه السحرية التي تمنح قوى خارقة مقابل خسارة القدرة على السباحة.",
        answer: "الشيطان",
        image: "assets/images/one_piece_10.jpg"
    },

    // === 3. Dragon Ball (المراحل 21 - 30) ===
    {
        id: 21,
        anime: "Dragon Ball",
        question: "محارب السايان الأسطوري الذي حما كوكب الأرض مرارًا ويعشق التدريب والقتال.",
        answer: "غوكو",
        image: "assets/images/dragon_ball_1.jpg"
    },
    {
        id: 22,
        anime: "Dragon Ball",
        question: "أمير السايان المتكبر ومنافس غوكو الدائم الذي يسعى لتخطيه باستمرار.",
        answer: "فيجيتا",
        image: "assets/images/dragon_ball_2.jpg"
    },
    {
        id: 23,
        anime: "Dragon Ball",
        question: "الابن الأكبر لغوكو الذي يمتلك طاقة كامنة مرعبة وظهرت بوضوح ضد سيل.",
        answer: "غوهان",
        image: "assets/images/dragon_ball_3.jpg"
    },
    {
        id: 24,
        anime: "Dragon Ball",
        question: "الشرير الإمبراطوري المرعب الذي دمر كوكب السايان وقتل ك those المقربين لغوكو في ناميك.",
        answer: "فريزا",
        image: "assets/images/dragon_ball_4.jpg"
    },
    {
        id: 25,
        anime: "Dragon Ball",
        question: "المدرب العجوز الحكيم لغوكو وكريلين ومبتكر ضربة الكاميهاميها الشهيرة.",
        answer: "روشي",
        image: "assets/images/dragon_ball_5.jpg"
    },
    {
        id: 26,
        anime: "Dragon Ball",
        question: "التحول الأسطوري المتميز بالشعر الذهبي الطائر والهالة الحارقة الكثيفة.",
        answer: "سايان",
        image: "assets/images/dragon_ball_6.jpg"
    },
    {
        id: 27,
        anime: "Dragon Ball",
        question: "التنين الأسطوري الذي يظهر عند جمع الكرات السبع ليحقق الأمنيات.",
        answer: "شينرون",
        image: "assets/images/dragon_ball_7.jpg"
    },
    {
        id: 28,
        anime: "Dragon Ball",
        question: "اندماج غوكو وفيجيتا عن طريق رقصة الاندماج لمواجهة برولي.",
        answer: "غوجيتا",
        image: "assets/images/dragon_ball_8.jpg"
    },
    {
        id: 29,
        anime: "Dragon Ball",
        question: "الكوكب الأصلي لبيكولو المتميز ببيئته الخضراء والكرات السحرية الخاصة به.",
        answer: "ناميك",
        image: "assets/images/dragon_ball_9.jpg"
    },
    {
        id: 30,
        anime: "Dragon Ball",
        question: "الشرير الاصطناعي الذي أقام مسابقة قتالية مهددًا بتدمير كوكب الأرض بالكامل.",
        answer: "سيل",
        image: "assets/images/dragon_ball_10.jpg"
    },

    // === 4. Attack on Titan (المراحل 31 - 40) ===
    {
        id: 31,
        anime: "Attack on Titan",
        question: "البطل الذي أقسم على إبادة جميع العمالقة وامتلك قوة العملاق المهاجم والعملاق المؤسس.",
        answer: "إيرين",
        image: "assets/images/aot_1.jpg"
    },
    {
        id: 32,
        anime: "Attack on Titan",
        question: "أقوى جندي لدى البشرية وقائد فرقة العمليات الخاصة، مهووس بالنظافة وصاحب مهارات خارقة.",
        answer: "ليفاي",
        image: "assets/images/aot_2.jpg"
    },
    {
        id: 33,
        anime: "Attack on Titan",
        question: "أخت إيرين بالتبني والمحاربة البارعة التي تحميه وتضع وشاحًا أحمر دائمًا.",
        answer: "ميكاسا",
        image: "assets/images/aot_3.jpg"
    },
    {
        id: 34,
        anime: "Attack on Titan",
        question: "القائد الأسطوري لفيلق الاستطلاع صاحب العقلية العبقرية وخطبة الموت الشهيرة.",
        answer: "إروين",
        image: "assets/images/aot_4.jpg"
    },
    {
        id: 35,
        anime: "Attack on Titan",
        question: "العملاق الضخم والذكي المقنع الذي دمر سور ماريا في أول حلقة من الأنمي.",
        answer: "بريتولد",
        image: "assets/images/aot_5.jpg"
    },
    {
        id: 36,
        anime: "Attack on Titan",
        question: "الصديق المقرب لإيرين وميكاسا، يتميز بذكائه الاستراتيجي العالي وأصبح العملاق الضخم لاحقًا.",
        answer: "أرمين",
        image: "assets/images/aot_6.jpg"
    },
    {
        id: 37,
        anime: "Attack on Titan",
        question: "الاسم العام للأسوار الضخمة الثلاثة التي تحمي البشرية: ماريا، روز، و...",
        answer: "سينا",
        image: "assets/images/aot_7.jpg"
    },
    {
        id: 38,
        anime: "Attack on Titan",
        question: "العملاق المدرع القادم من مارلي وصاحب الهوية المزدوجة المحطمة داخل الجدران.",
        answer: "راينر",
        image: "assets/images/aot_8.jpg"
    },
    {
        id: 39,
        anime: "Attack on Titan",
        question: "شقيقة إيرين غير الشقيقة وصاحبة قوة عملاق الحيوان الكرد المخطط للخلاص.",
        answer: "زيك",
        image: "assets/images/aot_9.jpg"
    },
    {
        id: 40,
        anime: "Attack on Titan",
        question: "القائدة المهووسة بالبحوث والتجارب على العمالقة وأصبحت قائدة الفيلق بعد إروين.",
        answer: "هانجي",
        image: "assets/images/aot_10.jpg"
    },

    // === 5. Demon Slayer (المراحل 41 - 50) ===
    {
        id: 41,
        anime: "Demon Slayer",
        question: "قاتل الشياطين الطيب الذي يسعى لإيجاد علاج لشقيقته مستخدمًا تنفس الماء والشنس.",
        answer: "تانجيرو",
        image: "assets/images/demon_slayer_1.jpg"
    },
    {
        id: 42,
        anime: "Demon Slayer",
        question: "شقيقة تانجيرو التي تحولت إلى شيطانة ولكنها تحمي البشر وتضع قطعة خيزران في فمها.",
        answer: "نيزوكو",
        image: "assets/images/demon_slayer_2.jpg"
    },
    {
        id: 43,
        anime: "Demon Slayer",
        question: "المقاتل الغريب ذو الرأس الخنزير البري البري الذي يقاتل بأسلوب تنفس الوحش.",
        answer: "إينوسكي",
        image: "assets/images/demon_slayer_3.jpg"
    },
    {
        id: 44,
        anime: "Demon Slayer",
        question: "المقاتل الجبان الذي ينام أثناء القتال ليتحول إلى وحش كاسر مستخدمًا تنفس الرعد.",
        answer: "زينيتسو",
        image: "assets/images/demon_slayer_4.jpg"
    },
    {
        id: 45,
        anime: "Demon Slayer",
        question: "هاشيرا اللهب الأسطوري صاحب العزيمة المشتعلة الذي قاتل ببسالة في قطار اللانهائية.",
        answer: "رينغوكو",
        image: "assets/images/demon_slayer_5.jpg"
    },
    {
        id: 46,
        anime: "Demon Slayer",
        question: "ملك الشياطين الخالد والخصم الرئيسي الذي قتل عائلة تانجيرو.",
        answer: "موزان",
        image: "assets/images/demon_slayer_6.jpg"
    },
    {
        id: 47,
        anime: "Demon Slayer",
        question: "هاشيرا الماء الهادئ والغامض الذي أنقذ تانجيرو ونيزوكو في أول حلقة.",
        answer: "غيو",
        image: "assets/images/demon_slayer_7.jpg"
    },
    {
        id: 48,
        anime: "Demon Slayer",
        question: "المادة الفولاذية النادرة المستخدمة لصنع سيوف قتلة الشياطين القادرة على قطع رؤوسهم.",
        answer: "النيشيرين",
        image: "assets/images/demon_slayer_8.jpg"
    },
    {
        id: 49,
        anime: "Demon Slayer",
        question: "الاسم المطلق على النخبة التسعة الأقوى من المقاتلين في فيلق قتلة الشياطين.",
        answer: "الهاشيرا",
        image: "assets/images/demon_slayer_9.jpg"
    },
    {
        id: 50,
        anime: "Demon Slayer",
        question: "الشيطان رتبة القمر العلوي الثالث الذي واجه رينغوكو في معركة الموت.",
        answer: "أكازا",
        image: "assets/images/demon_slayer_10.jpg"
    },

    // === 6. Jujutsu Kaisen (المراحل 51 - 60) ===
    {
        id: 51,
        anime: "Jujutsu Kaisen",
        question: "طالب الثانوية الذي ابتلع إصبع سوكونا ليصبح وعاء لملك اللعنات.",
        answer: "إيتادوري",
        image: "assets/images/jjk_1.jpg"
    },
    {
        id: 52,
        anime: "Jujutsu Kaisen",
        question: "مستعمل جوجوتسو الأقوى ذو العيون الستة والشعر الأبيض واللا نهائية الساحرة.",
        answer: "غوجو",
        image: "assets/images/jjk_2.jpg"
    },
    {
        id: 53,
        anime: "Jujutsu Kaisen",
        question: "ملك اللعنات المرعب وصاحب الأذرع الأربعة والعيون الأربعة المختوم داخل إيتادوري.",
        answer: "سوكونا",
        image: "assets/images/jjk_3.jpg"
    },
    {
        id: 54,
        anime: "Jujutsu Kaisen",
        question: "زميل يوجي الذي يستخدم تقنية ظلال الـ 10 ويستدعي الماهوراغا.",
        answer: "ميغومي",
        image: "assets/images/jjk_4.jpg"
    },
    {
        id: 55,
        anime: "Jujutsu Kaisen",
        question: "الفتاة العنيفة القوية في الفريق التي تقاتل باستخدام المطرقة والمسامير المشحونة بطاقة اللعنة.",
        answer: "نوبارا",
        image: "assets/images/jjk_5.jpg"
    },
    {
        id: 56,
        anime: "Jujutsu Kaisen",
        question: "الساحر السابق الصارم الذي يعمل بعقلية الموظف ويعتبر العمل مجرد جحيم.",
        answer: "نانامي",
        image: "assets/images/jjk_6.jpg"
    },
    {
        id: 57,
        anime: "Jujutsu Kaisen",
        question: "اللعنة المتشكلة من كراهية البشر لبعضهم، يمتلك القدرة على تعديل الأرواح والأجساد بلمسة.",
        answer: "ماهيتو",
        image: "assets/images/jjk_7.jpg"
    },
    {
        id: 58,
        anime: "Jujutsu Kaisen",
        question: "طالب السنة الثانية الأسطوري الذي يمتلك طاقة لعنة غير محدودة والوعاء السابق لريكا.",
        answer: "يوتا",
        image: "assets/images/jjk_8.jpg"
    },
    {
        id: 59,
        anime: "Jujutsu Kaisen",
        question: "أعلى مستوى من المهارات القتالية في الجوجوتسو حيث يتم حبس الخصم في مساحة مغلقة بالكامل.",
        answer: "المجال",
        image: "assets/images/jjk_9.jpg"
    },
    {
        id: 60,
        anime: "Jujutsu Kaisen",
        question: "الصديق المقرب السابق لغوجو الذي تحول إلى ساحر شرير يسعى لإبادة غير السحرة.",
        answer: "غيتو",
        image: "assets/images/jjk_10.jpg"
    },

    // === 7. Hunter x Hunter (المراحل 61 - 70) ===
    {
        id: 61,
        anime: "Hunter x Hunter",
        question: "الصبي الصغير الطيب الذي غادر جزيرة الحوت للبحث عن والده الصياد جين.",
        answer: "غون",
        image: "assets/images/hxh_1.jpg"
    },
    {
        id: 62,
        anime: "Hunter x Hunter",
        question: "سليل عائلة زولديك الشهيرة للاغتيال والصديق المقرب المخلص لغون.",
        answer: "كيلوا",
        image: "assets/images/hxh_2.jpg"
    },
    {
        id: 63,
        anime: "Hunter x Hunter",
        question: "الصياد الغامض الساحر المهووس بالقتال والأوراق والمهتم للغاية بغون وكيلوا.",
        answer: "هيسوكا",
        image: "assets/images/hxh_3.jpg"
    },
    {
        id: 64,
        anime: "Hunter x Hunter",
        question: "الناجي الوحيد من عشيرة كورتا ذو العيون القرمزية المتوهجة أثناء الغضب العارم.",
        answer: "كورابيكا",
        image: "assets/images/hxh_4.jpg"
    },
    {
        id: 65,
        anime: "Hunter x Hunter",
        question: "ملك نمل الكيميرا الأسطوري والكائن الأقوى الذي لعب الشطرنج مع كوموغي.",
        answer: "ميرويم",
        image: "assets/images/hxh_5.jpg"
    },
    {
        id: 66,
        anime: "Hunter x Hunter",
        question: "رئيس جمعية الصيادين الأسبق والعجوز القوي الذي واجه ملك النمل بقوة البوداسافا.",
        answer: "نيتيرو",
        image: "assets/images/hxh_6.jpg"
    },
    {
        id: 67,
        anime: "Hunter x Hunter",
        question: "زعيم عصابة ريودان (العنكبوت) الذي يسرق قدرات الآخرين بكتابه السحري.",
        answer: "كرولو",
        image: "assets/images/hxh_7.jpg"
    },
    {
        id: 68,
        anime: "Hunter x Hunter",
        question: "النظام الروحي والتقنية القتالية الأساسية القائمة على التلاعب بالطاقة الحيوية في الأنمي.",
        answer: "النين",
        image: "assets/images/hxh_8.jpg"
    },
    {
        id: 69,
        anime: "Hunter x Hunter",
        question: "الصديق الطبيب الطيب ذو النظارات الطبية الذي يقاتل باستخدام حقيبته وسيفه القصير.",
        answer: "ليوريو",
        image: "assets/images/hxh_9.jpg"
    },
    {
        id: 70,
        anime: "Hunter x Hunter",
        question: "الامتحان السنوي الصعب المليء بالمخاطر القاتلة الذي يسعى الجميع لاجتيازه لنيل الرتبة.",
        answer: "الصيادين",
        image: "assets/images/hxh_10.jpg"
    },

    // === 8. Bleach (المراحل 71 - 80) ===
    {
        id: 71,
        anime: "Bleach",
        question: "البشري البديل الذي أصبح شينيغامي ويمتلك زانباكتو عملاق يدعى زانغيتسو.",
        answer: "إيتشيغو",
        image: "assets/images/bleach_1.jpg"
    },
    {
        id: 72,
        anime: "Bleach",
        question: "الشينيغامي الفتاة التي أعطت قواها لإيتشيغو لإنقاذ عائلته في البداية.",
        answer: "روكيا",
        image: "assets/images/bleach_2.jpg"
    },
    {
        id: 73,
        anime: "Bleach",
        question: "القائد الخائن العبقري صاحب النظارات والقدرة المطلقة على التنويم المغناطيسي الكامل للزانباكتو.",
        answer: "آيزن",
        image: "assets/images/bleach_3.jpg"
    },
    {
        id: 74,
        anime: "Bleach",
        question: "قائد الفرقة الحادية عشر المرعب وعاشق المعارك الطاحنة والدماء المستمرة بدون إطلاق السيف.",
        answer: "زاراكي",
        image: "assets/images/bleach_4.jpg"
    },
    {
        id: 75,
        anime: "Bleach",
        question: "قائد الفرقة السادسة الشقيق الأكبر لروكيا المتميز ببروده وسيفه السينبونزاكورا.",
        answer: "بياكويا",
        image: "assets/images/bleach_5.jpg"
    },
    {
        id: 76,
        anime: "Bleach",
        question: "الاسم المطلق على مجتمع الأرواح والمدينة التي يعيش ويحكم فيها الشينيغامي.",
        answer: "السيريتي",
        image: "assets/images/bleach_6.jpg"
    },
    {
        id: 77,
        anime: "Bleach",
        question: "المرحلة الثانية والنهائية من إطلاق قوة السيف السحري (الزانباكتو) للشينيغامي.",
        answer: "بانكاي",
        image: "assets/images/bleach_7.jpg"
    },
    {
        id: 78,
        anime: "Bleach",
        question: "الأرواح الشريرة والمشوّهة التي تهاجم البشر ويقوم الشينيغامي بتطهيرها.",
        answer: "الهولو",
        image: "assets/images/bleach_8.jpg"
    },
    {
        id: 79,
        anime: "Bleach",
        question: "الإسبادا السادس الشرس والعدو اللدود لإيتشيغو الذي يمتلك ثقب الهولو في بطنه.",
        answer: "غريمجو",
        image: "assets/images/bleach_9.jpg"
    },
    {
        id: 80,
        anime: "Bleach",
        question: "مؤسس وقائد الكوينشي الأسطوري الذي استيقظ بعد ألف عام لتدمير الشينيغامي.",
        answer: "يوهاباخ",
        image: "assets/images/bleach_10.jpg"
    },

    // === 9. Death Note (المراحل 81 - 90) ===
    {
        id: 81,
        anime: "Death Note",
        question: "الطالب العبقري الذي وجد مذكرة الموت وقرر تطهير العالم من المجرمين تحت اسم كيرا.",
        answer: "لايت",
        image: "assets/images/death_note_1.jpg"
    },
    {
        id: 82,
        anime: "Death Note",
        question: "المحقق الغامض العبقري المحب للحلويات والجلوس الغريب الخصم الأول لكيرا.",
        answer: "إل",
        image: "assets/images/death_note_2.jpg"
    },
    {
        id: 83,
        anime: "Death Note",
        question: "إله الموت (الشينيغامي) الذي أسقط مذكرة الموت في عالم البشر حبًا في التفاح والتسلية.",
        answer: "ريوك",
        image: "assets/images/death_note_3.jpg"
    },
    {
        id: 84,
        anime: "Death Note",
        question: "عارضة الأزياء الشهيرة والمحبة للايت التي امتلكت المذكرة الثانية وأصبحت كيرا الثاني.",
        answer: "ميزا",
        image: "assets/images/death_note_4.jpg"
    },
    {
        id: 85,
        anime: "Death Note",
        question: "الخليفة الحقيقي لإل في معهد وايمي، يتميز بشعره الأبيض ولعبه بالألعاب والقطع الفنية دائمًا.",
        answer: "نيير",
        image: "assets/images/death_note_5.jpg"
    },
    {
        id: 86,
        anime: "Death Note",
        question: "الخليفة الثاني لإل المتميز باندفاعه وشعره الأصفر وحبه المفرط لقطع الشوكولاتة.",
        answer: "ميلو",
        image: "assets/images/death_note_6.jpg"
    },
    {
        id: 87,
        anime: "Death Note",
        question: "الاسم المستعار الذي أطلقه العالم على القاتل الخفي الذي يعاقب المجرمين بالنوبات القلبية.",
        answer: "كيرا",
        image: "assets/images/death_note_7.jpg"
    },
    {
        id: 88,
        anime: "Death Note",
        question: "السبب الافتراضي والأكثر تكرارًا للوفاة المكتوب في المذكرة إذا لم يحدد الكاتب طريقة أخرى.",
        answer: "سكتة",
        image: "assets/images/death_note_8.jpg"
    },
    {
        id: 89,
        anime: "Death Note",
        question: "الوكيل والمدعي العام الصارم المخلص لكيرا الذي كان يعاقب الناس بكلمة حذف حذف.",
        answer: "ميكامي",
        image: "assets/images/death_note_9.jpg"
    },
    {
        id: 90,
        anime: "Death Note",
        question: "رئيس القوة الأمنية اليابانية المكلفة بالقبض على كيرا وهو والد لايت.",
        answer: "سويشيرو",
        image: "assets/images/death_note_10.jpg"
    },

    // === 10. Solo Leveling (المراحل 91 - 100) ===
    {
        id: 91,
        anime: "Solo Leveling",
        question: "أضعف صياد في البشرية الذي حصل على فرصة ثانية عبر نظام فريد ليرفع مستواه بشكل لانهائي.",
        answer: "جينو",
        image: "assets/images/solo_1.jpg"
    },
    {
        id: 92,
        anime: "Solo Leveling",
        question: "اللقب أو الصفة المطلقة التي تطلق على المقاتلين الحاصلين على قوة الاستدعاء والتحكم بالأرواح.",
        answer: "مستحضر",
        image: "assets/images/solo_2.jpg"
    },
    {
        id: 93,
        anime: "Solo Leveling",
        question: "الجندي الظل الأول القوي المخلص لجينو الحاصل على خوذة حمراء متميزة وشعر أحمر طائر.",
        answer: "إيغريس",
        image: "assets/images/solo_3.jpg"
    },
    {
        id: 94,
        anime: "Solo Leveling",
        question: "صيادة الرتبة S المتميزة بحسها الشديد وقدرتها على شم طاقة السحرة وتنجذب لجينو.",
        answer: "هايइन",
        image: "assets/images/solo_4.jpg"
    },
    {
        id: 95,
        anime: "Solo Leveling",
        question: "الكلمة السحرية الأيقونية التي ينطق بها جينو لاستدعاء جنود الظلال من جثث الأعداء.",
        answer: "نهوض",
        image: "assets/images/solo_5.jpg"
    },
    {
        id: 96,
        anime: "Solo Leveling",
        question: "الرتبة الأعلى والأقوى المطلقة للصيادين والوحوش والبوابات في هذا العالم البشري السحري.",
        answer: "اس",
        image: "assets/images/solo_6.jpg"
    },
    {
        id: 97,
        anime: "Solo Leveling",
        question: "قائد النقابة الأبيض وصاحب تحول النمر الشرس المرعب وأحد أقوى مقاتلي كوريا.",
        answer: "بياكو",
        image: "assets/images/solo_7.jpg"
    },
    {
        id: 98,
        anime: "Solo Leveling",
        question: "الجزيرة المليئة بنمل الرتبة S المرعب والتي شهدت غارة قاتلة شارك فيها جينو ليغير الموازين.",
        answer: "جيجو",
        image: "assets/images/solo_8.jpg"
    },
    {
        id: 99,
        anime: "Solo Leveling",
        question: "الكيان الحاكم الأقوى والملك الأصلي للظلال الذي اختار جينو ليكون وريث قوته المطلقة.",
        answer: "أوزبورن",
        image: "assets/images/solo_9.jpg"
    },
    {
        id: 100,
        anime: "Solo Leveling",
        question: "الزنزانة المزدوجة الغامضة التي بدأت فيها مأساة جينو وحصل فيها على قوة النظام الحالية.",
        answer: "المعبد",
        image: "assets/images/solo_10.jpg"
    }
];
