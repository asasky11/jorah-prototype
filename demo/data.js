/* بيانات تجريبية ثابتة للنموذج الأولي — لا تتصل بأي خادم ولا بـ Firebase.
   كل الأسماء والأرقام وهمية ومعدّة للعرض فقط. */
window.DEMO = {
  today: { g: 'الخميس، 29 أكتوبر 2026', h: '18 جمادى الأولى 1448 هـ', day: 29 },

  patient: {
    name: 'محمد',
    fullName: 'محمد عبدالله السالم',
    age: 67,
    email: 'm.alsalem@example.com',
    bloodType: 'O+',
    conditions: ['السكري من النوع الثاني', 'ارتفاع ضغط الدم'],
    allergies: ['البنسلين'],
    emergency: { name: 'سارة السالم (الابنة)', phone: '05X XXX XXXX' },
    weight: 78, height: 172,
  },

  /* الوقت بصيغة 24 ساعة، الحالة: taken | due | upcoming */
  medications: [
    { id: 'm1', name: 'ميتفورمين', dose: '500 ملغ', form: 'قرص', color: '#E8EEF3', time: '07:30', note: 'مع الإفطار', status: 'taken', stock: 42, total: 60, adherence: 96, active: 'Metformin', cls: 'خافض للسكر' },
    { id: 'm2', name: 'أملوديبين', dose: '5 ملغ', form: 'قرص', color: '#CFE0F2', time: '08:00', note: 'بعد الأكل', status: 'taken', stock: 18, total: 30, adherence: 91, active: 'Amlodipine', cls: 'خافض للضغط' },
    { id: 'm3', name: 'أتورفاستاتين', dose: '20 ملغ', form: 'قرص', color: '#F7E7B5', time: '13:00', note: 'مع الغداء', status: 'due', stock: 6, total: 30, adherence: 88, active: 'Atorvastatin', cls: 'خافض للكوليسترول' },
    { id: 'm4', name: 'فيتامين د', dose: '1000 وحدة', form: 'كبسولة', color: '#FBD9B5', time: '20:00', note: 'بعد العشاء', status: 'upcoming', stock: 25, total: 30, adherence: 99, active: 'Cholecalciferol', cls: 'مكمّل غذائي' },
    { id: 'm5', name: 'أوميغا 3', dose: 'كبسولة واحدة', form: 'كبسولة', color: '#CFEBDD', time: '21:00', note: 'قبل النوم', status: 'upcoming', stock: 50, total: 60, adherence: 94, active: 'Omega-3', cls: 'مكمّل غذائي' },
  ],

  appointments: [
    { id: 'a1', title: 'مراجعة عيادة السكري', doctor: 'د. نورة العتيبي', place: 'مستشفى الملك فهد العام', dept: 'عيادات الباطنية', date: 'الخميس، 5 نوفمبر', time: '10:00', in: 'يبدأ بعد 6 أيام و19 س', reminder: 'قبل ساعتين', kind: 'حضوري', ref: '10716934670069', source: 'مستخرج تلقائياً من رسالة «موعدي»' },
    { id: 'a2', title: 'تحليل السكر التراكمي', doctor: 'المختبر المركزي', place: 'مركز صحي الروضة', dept: 'المختبر', date: 'الأحد، 8 نوفمبر', time: '08:00', in: 'يبدأ بعد 9 أيام', reminder: 'قبل يوم', kind: 'صيام 8 ساعات', ref: '—', source: 'أُضيف يدوياً' },
  ],

  week: [
    { d: 'سبت', n: 24 }, { d: 'أحد', n: 25 }, { d: 'اثنين', n: 26 }, { d: 'ثلاثاء', n: 27 },
    { d: 'أربعاء', n: 28 }, { d: 'خميس', n: 29, today: true }, { d: 'جمعة', n: 30 },
  ],

  water: { ml: 500, goal: 2000, step: 250 },

  caregivers: [
    { id: 'c1', name: 'سارة', relation: 'الابنة', role: 'متابعة وتعديل', online: true, initials: 'س' },
    { id: 'c2', name: 'فهد', relation: 'الابن', role: 'متابعة فقط', online: false, initials: 'ف' },
  ],

  careFeed: [
    { time: 'قبل 5 دقائق', text: 'محمد أكّد جرعة أملوديبين', kind: 'ok' },
    { time: 'قبل ساعة', text: 'محمد أكّد جرعة ميتفورمين', kind: 'ok' },
    { time: 'أمس 21:40', text: 'تأخرت جرعة أوميغا 3 بـ 35 دقيقة', kind: 'warn' },
    { time: 'أمس 16:10', text: 'عاد محمد إلى النطاق الآمن', kind: 'info' },
  ],

  tips: [
    { tag: 'المساء', title: 'مساء هادئ يقلل توتر الغروب', body: 'بعد العصر: أضواء دافئة، ضوضاء أقل، ولا نقاشات مرهقة. قيلولة قصيرة بعد الظهر لا تتجاوز 30 دقيقة تساعد على مساء أهدأ.' },
    { tag: 'النوم', title: 'ضوء الصباح ينظّم النوم', body: '15 دقيقة في ضوء النهار صباحاً تضبط ساعة الجسم وتحسّن النوم ليلاً وتقلل التجوال الليلي.' },
    { tag: 'التغذية', title: 'كوب ماء مع كل جرعة', body: 'الجفاف يزيد التشوّش ويُضعف الذاكرة. اجعل الماء جزءاً من روتين الدواء وقدّمه مع الفواكه الغنية بالماء.' },
  ],

  vitals: [
    { label: 'النبض', value: '72', unit: 'ن/د', trend: 'مستقر' },
    { label: 'الأكسجين', value: '97', unit: '%', trend: 'طبيعي' },
    { label: 'النوم', value: '6.8', unit: 'س', trend: '−20 د' },
    { label: 'الخطوات', value: '3,240', unit: 'خطوة', trend: '+12%' },
  ],

  adherenceWeek: [100, 100, 80, 100, 100, 60, 75],

  /* أكتوبر 2026 يبدأ يوم الخميس؛ الشبكة تبدأ من السبت */
  month: (() => {
    const cells = [];
    for (let d = 26; d <= 30; d++) cells.push({ d, other: true, dots: [] });
    for (let d = 1; d <= 31; d++) {
      const dots = d <= 29 ? ['#2D8A6B'] : [];
      if (d === 14 || d === 21) dots.push('#D9534F');
      cells.push({ d, dots, today: d === 29 });
    }
    for (let d = 1; d <= 6; d++) cells.push({ d, other: true, dots: d === 5 ? ['#3B6E9E'] : [] });
    return cells;
  })(),
};
