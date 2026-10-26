/* بيانات تجريبية ثابتة للنموذج الأولي — لا تتصل بأي خادم ولا بـ Firebase.
   كل الأسماء والأرقام وهمية ومعدّة للعرض فقط. */
window.DEMO = {
  patient: {
    name: 'أم خالد',
    fullName: 'نورة عبدالله الحربي',
    age: 68,
    bloodType: 'O+',
    conditions: ['سكري النوع الثاني', 'ارتفاع ضغط الدم'],
    emergency: { name: 'خالد (الابن)', phone: '05XXXXXXXX' },
  },

  /* أدوية اليوم: الوقت بصيغة 24 ساعة، الحالة: taken | due | upcoming | missed */
  medications: [
    { id: 'm1', name: 'ميتفورمين', dose: '500 ملغ', form: 'قرص', color: '#F2F2F2', time: '07:30', note: 'مع الإفطار', status: 'taken', stock: 42, total: 60, adherence: 96 },
    { id: 'm2', name: 'أملوديبين', dose: '5 ملغ', form: 'قرص', color: '#5B9BD5', time: '08:00', note: 'بعد الأكل', status: 'taken', stock: 18, total: 30, adherence: 91 },
    { id: 'm3', name: 'أتورفاستاتين', dose: '20 ملغ', form: 'قرص', color: '#F2C94C', time: '13:00', note: 'مع الغداء', status: 'due', stock: 6, total: 30, adherence: 88 },
    { id: 'm4', name: 'فيتامين د', dose: '1000 وحدة', form: 'كبسولة', color: '#F2994A', time: '20:00', note: 'بعد العشاء', status: 'upcoming', stock: 25, total: 30, adherence: 99 },
    { id: 'm5', name: 'أوميغا 3', dose: 'كبسولة واحدة', form: 'كبسولة', color: '#6CBF84', time: '21:00', note: 'قبل النوم', status: 'upcoming', stock: 50, total: 60, adherence: 94 },
  ],

  appointments: [
    { id: 'a1', title: 'مراجعة عيادة السكري', doctor: 'د. سارة العتيبي', place: 'مستشفى الملك فهد — عيادات الباطنية', date: 'الخميس 29 أكتوبر', time: '10:30', reminder: 'تنبيه قبل يوم وقبل ساعتين', source: 'مستخرج تلقائياً من رسالة موعدي' },
    { id: 'a2', title: 'تحليل السكر التراكمي', doctor: 'المختبر المركزي', place: 'مركز صحي الروضة', date: 'الأحد 1 نوفمبر', time: '08:00', reminder: 'صيام 8 ساعات', source: 'أُضيف يدوياً' },
  ],

  week: [
    { d: 'س', n: 24, dots: ['#2D8A6B'] },
    { d: 'ح', n: 25, dots: ['#2D8A6B', '#D99B26'], today: true },
    { d: 'ن', n: 26, dots: ['#2D8A6B'] },
    { d: 'ث', n: 27, dots: ['#2D8A6B'] },
    { d: 'ر', n: 28, dots: ['#2D8A6B'] },
    { d: 'خ', n: 29, dots: ['#2D8A6B', '#3B6E9E'] },
    { d: 'ج', n: 30, dots: [] },
  ],

  water: { cups: 4, goal: 8 },

  caregivers: [
    { id: 'c1', name: 'خالد', relation: 'الابن', role: 'متابعة وتعديل', online: true, initials: 'خ' },
    { id: 'c2', name: 'ريم', relation: 'الابنة', role: 'متابعة فقط', online: false, initials: 'ر' },
  ],

  careFeed: [
    { time: 'قبل 5 د', text: 'أم خالد أكدت جرعة أملوديبين', kind: 'ok' },
    { time: 'قبل ساعة', text: 'أم خالد أكدت جرعة ميتفورمين', kind: 'ok' },
    { time: 'أمس 21:40', text: 'تأخر جرعة أوميغا 3 بـ 35 دقيقة', kind: 'warn' },
    { time: 'أمس 16:10', text: 'أم خالد عادت إلى النطاق الآمن', kind: 'info' },
  ],

  insights: [
    { icon: '⏰', title: 'تأخر متكرر في جرعة المساء', body: 'تأخرت جرعة الساعة 21:00 في 4 من آخر 7 أيام بمتوسط 30 دقيقة.', action: 'تقديم التذكير إلى 20:30' },
    { icon: '📦', title: 'مخزون أتورفاستاتين ينفد', body: 'تبقّى 6 أقراص، تكفي حتى الجمعة. موعد الصرف من وصفتي متاح الآن.', action: 'تذكير بإعادة التعبئة' },
    { icon: '💧', title: 'شرب الماء أقل من الهدف', body: 'متوسط الأسبوع 5 أكواب من 8. ينصح برفع التذكيرات في فترة الظهيرة.', action: 'إضافة تذكيرين' },
  ],

  vitals: [
    { label: 'النبض', value: '72', unit: 'ن/د', trend: 'مستقر' },
    { label: 'الأكسجين', value: '97', unit: '%', trend: 'طبيعي' },
    { label: 'النوم', value: '6.8', unit: 'س', trend: '−20 د' },
    { label: 'الخطوات', value: '3,240', unit: 'خطوة', trend: '+12%' },
  ],

  adherenceWeek: [100, 100, 80, 100, 100, 60, 75],

  monthDots: (() => {
    /* أكتوبر 2026 يبدأ يوم الخميس */
    const days = [];
    for (let i = 0; i < 4; i++) days.push(null);
    for (let d = 1; d <= 31; d++) {
      const dots = ['#2D8A6B'];
      if (d === 29) dots.push('#3B6E9E');
      if (d === 14 || d === 21) dots.push('#D9534F');
      days.push({ d, dots, today: d === 25 });
    }
    return days;
  })(),
};
