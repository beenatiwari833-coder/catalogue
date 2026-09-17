
    /* ═══════════ DEFAULT PL LOGO SVG (fallback for tiles without image) ═══════════ */
    const PL_LOGO_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="70" height="70">
  <circle cx="50" cy="50" r="48" fill="#073A6B" stroke="#F5A623" stroke-width="3"/>
  <g fill="#F5A623" opacity=".9">
    <ellipse cx="18" cy="38" rx="4" ry="2" transform="rotate(-50,18,38)"/>
    <ellipse cx="14" cy="46" rx="4" ry="2" transform="rotate(-40,14,46)"/>
    <ellipse cx="13" cy="55" rx="4" ry="2" transform="rotate(-30,13,55)"/>
    <ellipse cx="16" cy="63" rx="4" ry="2" transform="rotate(-20,16,63)"/>
    <ellipse cx="21" cy="70" rx="4" ry="2" transform="rotate(-10,21,70)"/>
  </g>
  <g fill="#F5A623" opacity=".9">
    <ellipse cx="82" cy="38" rx="4" ry="2" transform="rotate(50,82,38)"/>
    <ellipse cx="86" cy="46" rx="4" ry="2" transform="rotate(40,86,46)"/>
    <ellipse cx="87" cy="55" rx="4" ry="2" transform="rotate(30,87,55)"/>
    <ellipse cx="84" cy="63" rx="4" ry="2" transform="rotate(20,84,63)"/>
    <ellipse cx="79" cy="70" rx="4" ry="2" transform="rotate(10,79,70)"/>
  </g>
  <rect x="38" y="38" width="8" height="22" fill="#F5A623" opacity=".7"/>
  <rect x="47" y="32" width="6" height="28" fill="#FFC65C" opacity=".8"/>
  <rect x="54" y="40" width="8" height="20" fill="#F5A623" opacity=".7"/>
  <ellipse cx="33" cy="64" rx="4" ry="4" fill="#fff" opacity=".9"/>
  <rect x="31" y="68" width="5" height="8" rx="2" fill="#fff" opacity=".9"/>
  <ellipse cx="50" cy="62" rx="4" ry="4" fill="#fff" opacity=".9"/>
  <rect x="48" y="66" width="5" height="9" rx="2" fill="#fff" opacity=".9"/>
  <ellipse cx="67" cy="64" rx="4" ry="4" fill="#fff" opacity=".9"/>
  <rect x="65" y="68" width="5" height="8" rx="2" fill="#fff" opacity=".9"/>
  <text x="50" y="28" text-anchor="middle" fill="#FFC65C" font-size="10" font-weight="bold" font-family="serif">PL</text>
  <text x="50" y="87" text-anchor="middle" fill="#FFC65C" font-size="5.5" font-weight="bold" font-family="sans-serif" letter-spacing="1">ENTREPRENEURS</text>
</svg>`;

    /* ═══════════ CATEGORIES ═══════════ */
    const CATS = [
      {
        id: 'food',
        name: 'Food, Bakery & Beverages',
        icon: 'fa-utensils',
        emoji: '🍔',
        bg: '#FFE8CC',
        subcategories: [
          { name: 'North Indian', image: 'assets/category_1_food/northindian.png', emoji: '🍛', icon: 'fa-bowl-rice' },
          { name: 'South Indian', image: 'assets/category_1_food/southindian.png', emoji: '🫓', icon: 'fa-utensils' },
          { name: 'Italian', image: 'assets/category_1_food/italian.png', emoji: '🍕', icon: 'fa-pizza-slice' },
          { name: 'Chinese', image: 'assets/category_1_food/chinese.png', emoji: '🥢', icon: 'fa-bowl-food' },
          { name: 'Mughlai food', image: 'assets/category_1_food/mughlaifood.png', emoji: '🍗', icon: 'fa-drumstick-bite' },
          { name: 'Bakery', image: 'assets/category_1_food/bakery.png', emoji: '🎂', icon: 'fa-cake-candles' },
          { name: 'Tiffin service', image: 'assets/category_1_food/tiffinservice.png', emoji: '🍱', icon: 'fa-box-tissue' },
          { name: 'Home Made pickle, chutney, Jams', image: 'assets/category_1_food/homemadepickle.png', emoji: '🫙', icon: 'fa-jar' },
          { name: 'Dry Fruit', image: 'assets/category_1_food/dryfruit.png', emoji: '🥜', icon: 'fa-seedling' },
          { name: 'Street Food', image: 'assets/category_1_food/streetfood.png', emoji: '🧆', icon: 'fa-burger' },
          { name: 'Evening snacks', image: 'assets/category_1_food/eveningsnacks.png', emoji: '☕', icon: 'fa-cookie-bite' },
          { name: 'Breakfast', image: 'assets/category_1_food/breakfast.png', emoji: '🍳', icon: 'fa-egg' },
          { name: 'Lunch', image: 'assets/category_1_food/lunch.png', emoji: '🥗', icon: 'fa-utensils' },
          { name: 'Dinner', image: 'assets/category_1_food/dinner.png', emoji: '🍽️', icon: 'fa-plate-wheat' },
          { name: 'Milk and milk products', image: 'assets/category_1_food/milkproducts.png', emoji: '🥛', icon: 'fa-glass-water' },
          { name: 'Chips, Chocolates & Namkeen', image: 'assets/category_1_food/chipschoc.png', emoji: '🍫', icon: 'fa-cookie' },
          { name: 'Ready to cook food like McCain', image: 'assets/category_1_food/readytocook.png', emoji: '🍟', icon: 'fa-fire-burner' },
          { name: 'Ghee, Oil, etc.', image: 'assets/category_1_food/gheeoil.png', emoji: '🫗', icon: 'fa-bottle-droplet' },
        ]
      },
      {
        id: 'edu',
        name: 'Education & Coaching',
        icon: 'fa-graduation-cap',
        emoji: '🎓',
        bg: '#DCEBFF',
        subcategories: [
          { name: 'Vedic Maths', image: 'assets/category_2_education/vedicmaths.png', emoji: '🧮', icon: 'fa-calculator' },
          { name: 'Nursery & KG All subjects', image: 'assets/category_2_education/nurserykg.png', emoji: '👶', icon: 'fa-baby' },
          { name: 'Grade 1-10 All subjects', image: 'assets/category_2_education/grade1-10.png', emoji: '📚', icon: 'fa-book-open' },
          { name: 'Grade 11-12 All subjects', image: 'assets/category_2_education/grade11-12.png', emoji: '🎓', icon: 'fa-graduation-cap' },
          { name: 'Competitive Exams', image: 'assets/category_2_education/competitive.png', emoji: '📝', icon: 'fa-award' },
        ]
      },
      {
        id: 'gift',
        name: 'Gift, Jewellery & Home Decor',
        icon: 'fa-gift',
        emoji: '🎁',
        bg: '#FFE9F5',
        subcategories: [
          { name: 'School Stationery & Items', image: 'assets/category_5_gift/schoolstationery.png', emoji: '✏️', icon: 'fa-pen-ruler' },
          { name: 'Handmade Gift Items', image: 'assets/category_5_gift/handmade.png', emoji: '🎁', icon: 'fa-wand-magic-sparkles' },
          { name: 'Home Decor', image: 'assets/category_5_gift/homedecor.png', emoji: '🖼️', icon: 'fa-couch' },
          { name: 'Customized Gift Hampers', image: 'assets/category_5_gift/customizedgifts.png', emoji: '🧺', icon: 'fa-box-open' },
          { name: 'Kitchenware Utilities', image: 'assets/category_5_gift/kitchenware.png', emoji: '🔪', icon: 'fa-kitchen-set' },
          { name: 'Jewellery', image: 'assets/category_5_gift/jewellery.png', emoji: '💎', icon: 'fa-gem' },
          { name: 'Personalized Items', image: 'assets/category_5_gift/personalizeditems.png', emoji: '🏷️', icon: 'fa-signature' },
          { name: 'Other Accessories', image: 'assets/category_5_gift/otheraccessories.png', emoji: '🛍️', icon: 'fa-glasses' },
        ]
      },
      {
        id: 'fash',
        name: 'Fashion & Lifestyle',
        icon: 'fa-shirt',
        emoji: '👗',
        bg: '#F3E5FF',
        subcategories: [
          { name: 'Men Clothing', image: 'assets/category_4_fashion/menclothing.png', emoji: '👔', icon: 'fa-shirt' },
          { name: 'Women Clothing', image: 'assets/category_4_fashion/womenclothing.png', emoji: '👗', icon: 'fa-person-dress' },
          { name: 'Kidswear', image: 'assets/category_4_fashion/kidswear.png', emoji: '👕', icon: 'fa-child' },
          { name: 'Skincare', image: 'assets/category_4_fashion/skincare.png', emoji: '🧴', icon: 'fa-spa' },
          { name: 'Salon & Makeup Studio', image: 'assets/category_4_fashion/salonstuodio.png', emoji: '💄', icon: 'fa-scissors' },
          { name: 'Hosiery Items', image: 'assets/category_4_fashion/hosiery.png', emoji: '🧦', icon: 'fa-socks' },
          { name: 'Personal Care & Makeup', image: 'assets/category_4_fashion/personalcare.png', emoji: '💅', icon: 'fa-pump-soap' },
          { name: 'Fall, Pico & Alteration', image: 'assets/category_4_fashion/fallpico.png', emoji: '🧵', icon: 'fa-vector-square' },
        ]
      },
      {
        id: 'camp',
        name: 'Camps, Music & Kids Activities',
        icon: 'fa-campground',
        emoji: '⛺',
        bg: '#FDE2F3',
        subcategories: [
          { name: 'Painting, Drawing, Art & Craft', emoji: '🎨', icon: 'fa-palette' },
          { name: 'Dance Classes', image: 'assets/category_3_camps/danceclasses.png', emoji: '💃', icon: 'fa-music' },
          { name: 'Playschool & Daycare', image: 'assets/category_3_camps/playschool.png', emoji: '🏫', icon: 'fa-school' },
          { name: 'Music Classes', image: 'assets/category_3_camps/musicclasses.png', emoji: '🎵', icon: 'fa-music' },
          { name: 'Guitar Classes', image: 'assets/category_3_camps/guitarclasses.png', emoji: '🎸', icon: 'fa-guitar' },
          { name: 'Keyboard Classes', image: 'assets/category_3_camps/keyboardclasses.png', emoji: '🎹', icon: 'fa-keyboard' },
          { name: 'Cooking classes', image: 'assets/category_3_camps/cookingclasses.png', emoji: '🍳', icon: 'fa-utensils' },
          { name: 'Summer Camp', image: 'assets/category_3_camps/summercamp.png', emoji: '⛺', icon: 'fa-campground' },
          { name: 'Winter Camp', image: 'assets/category_3_camps/wintercamp.png', emoji: '❄️', icon: 'fa-snowflake' },
          { name: 'Event Management', image: 'assets/category_3_camps/eventmanagement.png', emoji: '🎉', icon: 'fa-calendar-check' },
        ]
      },
      {
        id: 'home',
        name: 'Home, Print & Technical Services',
        icon: 'fa-print',
        emoji: '🖨️',
        bg: '#E2F5E9',
        subcategories: [
          { name: 'Mobile & Laptop Services', image: 'assets/category_6_home_print/mobileservices.png', emoji: '💻', icon: 'fa-laptop' },
          { name: 'Print, Xerox and other services', image: 'assets/category_6_home_print/printxerox.png', emoji: '🖨️', icon: 'fa-print' },
        ]
      },
      {
        id: 'hlth',
        name: 'Health Services',
        icon: 'fa-heart-pulse',
        emoji: '🩺',
        bg: '#FFE0E0',
        subcategories: [
          { name: 'Dentist', image: 'assets/category_7_health_services/dentist.png', emoji: '🦷', icon: 'fa-tooth' },
          { name: 'Paediatrician', image: 'assets/category_7_health_services/paediatrician.png', emoji: '👶', icon: 'fa-baby' },
          { name: 'General Physician', image: 'assets/category_7_health_services/generalphysician.png', emoji: '🩺', icon: 'fa-user-doctor' },
          { name: 'Obstetrician & Gynaecologist', image: 'assets/category_7_health_services/obstetrician.png', emoji: '🤰', icon: 'fa-person-pregnant' },
          { name: 'ENT', image: 'assets/category_7_health_services/ent.png', emoji: '👂', icon: 'fa-ear-listen' },
          { name: 'Dietician & Nutrician', image: 'assets/category_7_health_services/dietician.png', emoji: '🥗', icon: 'fa-apple-whole' },
          { name: 'Yoga & Meditation', image: 'assets/category_7_health_services/yoga.png', emoji: '🧘‍♀️', icon: 'fa-om' },
          { name: 'Fitness Classes', image: 'assets/category_7_health_services/fitnessclasses.png', emoji: '🏋️', icon: 'fa-dumbbell' },
          { name: 'Eye Specialist', image: 'assets/category_7_health_services/eyespecialist.png', emoji: '👁️', icon: 'fa-eye' },
          { name: 'Cardiologist', image: 'assets/category_7_health_services/cardiologist.png', emoji: '❤️', icon: 'fa-heart-pulse' },
          { name: 'Endocrinologist', image: 'assets/category_7_health_services/endocrinologist.png', emoji: '💉', icon: 'fa-syringe' },
          { name: 'Neuro Surgeon', image: 'assets/category_7_health_services/neurosurgeon.png', emoji: '🔬', icon: 'fa-user-nurse' },
          { name: 'Physiotherapist', image: 'assets/category_7_health_services/physiotherapist.png', emoji: '🧘', icon: 'fa-child-reaching' },
          { name: 'Psychologist', image: 'assets/category_7_health_services/psychologist.png', emoji: '🧠', icon: 'fa-brain' },
          { name: 'Psychiatrist', image: 'assets/category_7_health_services/psychiatrist.png', emoji: '🩺', icon: 'fa-stethoscope' },
          { name: 'Orthopedic Doctor', image: 'assets/category_7_health_services/orthopedic.png', emoji: '🦴', icon: 'fa-bone' },
          { name: 'Dermatologist', image: 'assets/category_7_health_services/dermatologist.png', emoji: '🧴', icon: 'fa-spa' },
          { name: 'Homeopathic Doctor', image: 'assets/category_7_health_services/homeopathic.png', emoji: '🌿', icon: 'fa-leaf' },
          { name: 'Ayurvedic Doctor', image: 'assets/category_7_health_services/ayurvedicdoctor.png', emoji: '🌱', icon: 'fa-plant-wilt' },
        ]
      },
      {
        id: 'prof',
        name: 'Professional Services',
        icon: 'fa-briefcase',
        emoji: '👔',
        bg: '#E7E9F5',
        subcategories: [
          { name: 'Mutual Funds Distribution', image: 'assets/category_8_professional/category_8__mutual.png', emoji: '📈', icon: 'fa-chart-line' },
          { name: 'Chartered Accountan', image: 'assets/category_8_professional/category_8__chartered.png', emoji: '📊', icon: 'fa-file-invoice-dollar' },
          { name: 'Digital Marketing', image: 'assets/category_8_professional/category_8__digital.png', emoji: '📱', icon: 'fa-bullhorn' },
          { name: 'Astrologer', image: 'assets/category_8_professional/category_8__astrologer.png', emoji: '🔮', icon: 'fa-star' },
          { name: 'Numerologist', image: 'assets/category_8_professional/category_8__numerologist.png', emoji: '🔢', icon: 'fa-arrow-1-9' },
          { name: 'Photographer & Videographer', image: 'assets/category_8_professional/category_8__photographer.png', emoji: '📸', icon: 'fa-camera' },
          { name: 'Insurancer Service', image: 'assets/category_8_professional/category_8__insurancer.png', emoji: '🛡️', icon: 'fa-shield-halved' },
          { name: 'Loan Services', image: 'assets/category_8_professional/category_8__loan.png', emoji: '🏦', icon: 'fa-piggy-bank' },
        ]
      }
    ];

    /* Cartoon-style (emoji) icons on category-tinted backgrounds for society/category/product
       boxes — matching how Blinkit/Zomato/Zepto/Urban Company actually do category tiles
       (flat illustrated icons, not stock photography), with zero network dependency so
       nothing can ever fail to load. Keyed by CATS[].name. Every society uses the SAME
       icon/background (one visual identity for "society"), not a different one per name. */
    const CATEGORY_EMOJI = {
      'Food, Bakery & Beverages': '🍔',
      'Education & Coaching': '🎓',
      'Camps, Music & Kids Activities': '⛺',
      'Fashion & Lifestyle': '👗',
      'Gift, Jewellery & Home Decor': '🎁',
      'Home, Print & Tech Services': '🖨️',
      'Health Services': '🩺',
      'Professional Services': '👔',
    };
    const CATEGORY_BG = {
      'Food, Bakery & Beverages': '#FFE8CC',
      'Education & Coaching': '#DCEBFF',
      'Camps, Music & Kids Activities': '#FDE2F3',
      'Fashion & Lifestyle': '#F3E5FF',
      'Gift, Jewellery & Home Decor': '#FFE9F5',
      'Home, Print & Tech Services': '#E2F5E9',
      'Health Services': '#FFE0E0',
      'Professional Services': '#E7E9F5',
    };
    /* Well-known individual products get their own icon instead of the shared category one. */
    const PRODUCT_EMOJI = {
      'samosa': '🥟', 'tea': '🍵', 'chai': '🍵', 'cookies': '🍪', 'cookie': '🍪',
    };
    const SOCIETY_EMOJI = '🏘️';
    const SOCIETY_BG = '#E0F0FF';
    /* Full <span class="...">emoji</span> icon box — used for the small 68px society/category/
       product boxes (the emoji is centered by the existing .society-box-icon/.cat-tab-icon
       flex rules; only the background is overridden per category). */
    function _societyIconBox(cls) {
      return `<span class="${cls || 'society-box-icon'}" style="background:${SOCIETY_BG}">${SOCIETY_EMOJI}</span>`;
    }
    function _categoryIconBox(cls, catName) {
      return `<span class="${cls || 'society-box-icon'}" style="background:${CATEGORY_BG[catName] || 'var(--green-pale)'}">${CATEGORY_EMOJI[catName] || '🏪'}</span>`;
    }
    /* Same as _categoryIconBox, but well-known individual products (samosa, tea, cookies…)
       get their own specific icon instead of falling straight to the shared category one. */
    function _productIconBox(cls, productLabel, catName) {
      const specific = PRODUCT_EMOJI[(productLabel || '').trim().toLowerCase()];
      if (!specific) return _categoryIconBox(cls, catName);
      return `<span class="${cls || 'society-box-icon'}" style="background:${CATEGORY_BG[catName] || 'var(--green-pale)'}">${specific}</span>`;
    }
    /* Full-bleed version for larger image areas (business tiles/cards) when a vendor hasn't
       uploaded a real photo — same icon, filling the whole image slot instead of a small box. */
    function _categoryFallbackFill(catName) {
      return `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${CATEGORY_BG[catName] || 'var(--green-pale)'};font-size:3rem">${CATEGORY_EMOJI[catName] || '🏪'}</div>`;
    }

    /* SEED_START */
    const SEED = [
      { id: "f1", cat: "Food, Bakery & Beverages", venture: "Assam Tea", speciality: "Tea", desc: "Authentic premium Assam tea sourced directly from the gardens of Assam. Available in CTC and loose-leaf variants.", contact: "Pradyuth Dutta", flat: "G-1407", phone: "9643776179", whatsapp: "9643776179", instagram: "", video: "", url: "" },
      { id: "f2", cat: "Food, Bakery & Beverages", venture: "Batter Field", speciality: "Homemade Idli Dosa Batter & Chutneys", desc: "Freshly prepared South Indian fermented batter made with the finest rice and urad dal. Coconut and tomato chutneys available.", contact: "Kalyan", flat: "L-507", phone: "9599816800", whatsapp: "9730476630", instagram: "", video: "", url: "" },
      { id: "f3", cat: "Food, Bakery & Beverages", venture: "Cakewalk", speciality: "Cake", desc: "Beautiful custom cakes for every occasion — birthdays, anniversaries, baby showers. Made with love and the finest ingredients.", contact: "Sujata", flat: "H-801", phone: "9910341339", whatsapp: "9910341339", instagram: "", video: "", url: "" },
      { id: "f14", cat: "Food, Bakery & Beverages", venture: "Chutney Mama", speciality: "Indo Chinese", desc: "Delicious Indo-Chinese dishes made fresh at home. Noodles, fried rice, Manchurian and more with authentic flavours by Anush Khazanchi.", contact: "Anush Khazanchi", flat: "K-504", phone: "9266363300", whatsapp: "9266363300", instagram: "", video: "", url: "" },
      { id: "f4", cat: "Food, Bakery & Beverages", venture: "Delight Pizza & Cakes", speciality: "Pizza, Cakes, Mocktails, Shakes", desc: "Homemade pizzas with fresh toppings, artisanal cakes and refreshing mocktails & shakes for every craving.", contact: "Mahima", flat: "H-1207", phone: "7011864442", whatsapp: "7011864442", instagram: "", video: "", url: "" },
      { id: "f5", cat: "Food, Bakery & Beverages", venture: "Farmik Gold", speciality: "Premium Cold Pressed Edible Oil", desc: "100% natural cold pressed mustard, coconut and sesame oils — no chemicals, no preservatives, full nutrition retained.", contact: "Anupam Nain", flat: "D-201", phone: "8287317599", whatsapp: "8287317599", instagram: "", video: "", url: "" },
      { id: "f6", cat: "Food, Bakery & Beverages", venture: "Gwala Fresh", speciality: "Homemade Buffalo Ghee", desc: "Pure desi buffalo ghee prepared using traditional bilona method. Rich aroma, golden colour, and authentic taste.", contact: "Neha Gupta", flat: "A-1108", phone: "8690320820", whatsapp: "8690320820", instagram: "", video: "", url: "" },
      { id: "f7", cat: "Food, Bakery & Beverages", venture: "Hazel Patisserie", speciality: "Designer Cakes · Healthy Bakes · Baking Classes", desc: "Exquisite designer cakes, gluten-free options, sugar-free bakes and hands-on baking classes for all ages.", contact: "Amrita", flat: "L-1505", phone: "8860108583", whatsapp: "8860108583", instagram: "", video: "", url: "" },
      { id: "f15", cat: "Food, Bakery & Beverages", venture: "Home Meal Service", speciality: "Home Meal", desc: "Fresh, homely cooked meals delivered right to your door. Healthy, hygienic and comforting everyday food from your neighbour's kitchen.", contact: "Siddharth Tripathi", flat: "F-401", phone: "9821069562", whatsapp: "9821069562", instagram: "", video: "", url: "" },
      { id: "f8", cat: "Food, Bakery & Beverages", venture: "Koustubha's Kitchen", speciality: "South Indian Food", desc: "Authentic South Indian meals, tiffin service and special festival menus. Freshly cooked with traditional recipes from Karnataka.", contact: "Mithila", flat: "C-1006", phone: "8971744434", whatsapp: "8971744434", instagram: "", video: "", url: "" },
      { id: "f16", cat: "Food, Bakery & Beverages", venture: "Makhayam", speciality: "FMCG Manufacturing", desc: "In-house FMCG product manufacturing. Quality everyday consumer goods crafted with close attention to ingredients and standards.", contact: "Rohan Pathak", flat: "C-806", phone: "9540354625", whatsapp: "9540354625", instagram: "", video: "", url: "" },
      { id: "f17", cat: "Food, Bakery & Beverages", venture: "Mumma's Love", speciality: "Culinary Artist (Home Cooked Food)", desc: "Home-cooked food crafted with a mother's love. Wholesome, hygienically prepared daily meals and special dishes by Mousumi Mitra.", contact: "Mousumi Mitra", flat: "A-606", phone: "9999033597", whatsapp: "9999033597", instagram: "", video: "", url: "" },
      { id: "f9", cat: "Food, Bakery & Beverages", venture: "Niwala By Mallika", speciality: "Pickles, Jams & Chutneys plus Tea Cakes", desc: "Artisanal pickles, seasonal jams, tangy chutneys made with grandma's recipes. Also makes delightful tea-time cakes.", contact: "Mallika Misra", flat: "H-705", phone: "8447844152", whatsapp: "8447844152", instagram: "", video: "", url: "" },
      { id: "f10", cat: "Food, Bakery & Beverages", venture: "Paratha Zone", speciality: "Paratha, Sandwich", desc: "Hot stuffed parathas and sandwiches loaded with fresh fillings. Perfect breakfast and snack options delivered to your door.", contact: "Nidhi Rashmi", flat: "E-1401", phone: "8806417840", whatsapp: "8806417840", instagram: "", video: "", url: "" },
      { id: "f11", cat: "Food, Bakery & Beverages", venture: "Sheena Bakes", speciality: "Cake Artist", desc: "Award-winning cake artistry — sculpted fondant cakes, edible paintings, and luxury wedding tiers. Each piece is a masterpiece.", contact: "Sheena Teckchandani", flat: "C-1404", phone: "9910220415", whatsapp: "9910220415", instagram: "", video: "", url: "" },
      { id: "f12", cat: "Food, Bakery & Beverages", venture: "Ume's Confectioneries", speciality: "Cakes, Chocolates & Snacks", desc: "Handcrafted chocolates, Belgian truffle collections, celebration cakes and healthy snack assortments for gifting.", contact: "Urmi", flat: "F-1104", phone: "9903186556", whatsapp: "9903186556", instagram: "", video: "", url: "" },
      { id: "f13", cat: "Food, Bakery & Beverages", venture: "Weekend Kitchen", speciality: "Mughlai Food", desc: "Rich Mughlai cuisine — biryani, korma, kebabs and shahi desserts. Pre-order for weekends and special occasions.", contact: "Tanu", flat: "A-1407", phone: "8860764817", whatsapp: "8860764817", instagram: "", video: "", url: "" },
      { id: "e1", cat: "Education & Coaching", venture: "AVMRC Abacus & Vedic Maths", speciality: "Abacus & Vedic Maths", desc: "Structured abacus and vedic maths courses for kids aged 5–14. Builds mental arithmetic speed, concentration and confidence.", contact: "Shilpi & Ritika", flat: "H-202", phone: "9654797570", whatsapp: "9654797570", instagram: "", video: "", url: "" },
      { id: "e12", cat: "Education & Coaching", venture: "Beautiful Mind Fine Arts", speciality: "Fine Artist & Art Educator", desc: "Fine art education and creative workshops by a trained artist and educator. Nurturing artistic talent in children and adults alike.", contact: "Pallavi Mitra", flat: "A-606", phone: "9582135019", whatsapp: "9582135019", instagram: "", video: "", url: "" },
      { id: "e2", cat: "Education & Coaching", venture: "Expert Tutoring", speciality: "Maths & Science", desc: "Personalised one-on-one and small group sessions for Grades 6–12. CBSE and ICSE curriculum. Strong track record of results.", contact: "Nitika Sharma", flat: "D-305", phone: "9953956759", whatsapp: "9953956759", instagram: "", video: "", url: "" },
      { id: "e3", cat: "Education & Coaching", venture: "Kingsquare Chess Academy", speciality: "Chess", desc: "Chess coaching for all levels — beginners to tournament players. Rated coaches. Online and in-person sessions available.", contact: "Prabodh Bhagat", flat: "H-1006", phone: "9654822227", whatsapp: "9654822227", instagram: "", video: "", url: "" },
      { id: "e4", cat: "Education & Coaching", venture: "Madhuri Upadhyay Classes", speciality: "Maths & Science", desc: "Result-oriented Maths and Science coaching for Grades 8–12. Experienced educator with 15+ years of teaching excellence.", contact: "Madhuri Upadhyay", flat: "H-908", phone: "9910043970", whatsapp: "9910043970", instagram: "", video: "", url: "" },
      { id: "e13", cat: "Education & Coaching", venture: "Physics Masterclasses", speciality: "Physics – All Chapters for 11, 12, IIT, NEET, all Competitive Exams", desc: "Comprehensive physics coaching for Classes 11 & 12, IIT-JEE and NEET. Concept-driven, exam-focused teaching by experienced faculty.", contact: "Bhushan Agarwal", flat: "I-1006", phone: "9893506032", whatsapp: "9893506032", instagram: "", video: "", url: "" },
      { id: "e5", cat: "Education & Coaching", venture: "SKB Classes", speciality: "Maths & Science", desc: "Comprehensive Maths and Science tuitions for Grades 9–12. Concept clarity, regular tests and doubt-clearing sessions.", contact: "Sanjay Kumar Bharti", flat: "K-1506", phone: "9810094256", whatsapp: "9810094256", instagram: "", video: "", url: "" },
      { id: "e6", cat: "Education & Coaching", venture: "The Learning Hub By Durga", speciality: "Maths & Science", desc: "A nurturing learning environment for Grades 6–10. Focus on conceptual understanding, not rote learning.", contact: "Durga Shukla", flat: "B-504", phone: "9827150349", whatsapp: "9827150349", instagram: "", video: "", url: "" },
      { id: "e7", cat: "Education & Coaching", venture: "Tuition By Mrs Prachi Shrivastava", speciality: "Maths & Science", desc: "Experienced tutor offering structured Maths and Science sessions for middle and senior school students.", contact: "Prachi Shrivastava", flat: "A-304", phone: "7905639125", whatsapp: "7905639125", instagram: "", video: "", url: "" },
      { id: "e14", cat: "Education & Coaching", venture: "Tuition – Neha Kumar Agarwal", speciality: "Sanskrit (till 10th), Science (till 8th), Maths & Hindi (till 6th)", desc: "Dedicated tutoring in Sanskrit (up to Class 10), Science (up to Class 8), and Maths & Hindi (up to Class 6). Personalised attention for every student.", contact: "Neha Kumar Agarwal", flat: "H-305", phone: "9818339285", whatsapp: "9818339285", instagram: "", video: "", url: "" },
      { id: "e8", cat: "Education & Coaching", venture: "Tuition By Shivanii", speciality: "All Subjects (Nursery to Grade 2)", desc: "Caring, fun-based learning for the youngest learners. Activity-based teaching across all subjects for Nursery to Grade 2.", contact: "Shivanii Verma", flat: "C-706", phone: "7249419821", whatsapp: "7249419821", instagram: "", video: "", url: "" },
      { id: "e9", cat: "Education & Coaching", venture: "Tuition Classes – Sushma Singh", speciality: "All Subjects (Gr 1–6), Maths & Science (Gr 7–10)", desc: "Holistic academic support from primary to secondary level. Personalised attention for every student.", contact: "Sushma Singh", flat: "J-401", phone: "9318328959", whatsapp: "9318328959", instagram: "", video: "", url: "" },
      { id: "e15", cat: "Education & Coaching", venture: "Tuition – Ishita Sharma", speciality: "All Subjects (Gr 3–5), Maths & Science (Gr 6–7)", desc: "Expert tutoring for all subjects in Grades 3–5, and Maths & Science for Grades 6–7. Patient, structured and result-oriented teaching.", contact: "Ishita Sharma", flat: "G-408", phone: "9891394779", whatsapp: "9891394779", instagram: "", video: "", url: "" },
      { id: "e10", cat: "Education & Coaching", venture: "Tuition Point", speciality: "All Subjects", desc: "Friendly, outcome-focused tuitions covering all subjects. Affordable rates, flexible timings and experienced faculty.", contact: "Garvita Rastogi", flat: "K-802", phone: "9986117878", whatsapp: "", instagram: "", video: "", url: "" },
      { id: "e11", cat: "Education & Coaching", venture: "T4TUTELAGE Edutec Firm", speciality: "All Subjects · Commerce · Humanities · Maths · Science (Gr 6–12)", desc: "Technology-enabled tutoring platform offering live classes, recorded sessions and test series for Grades 6–12.", contact: "Ismeet Singh / Kavita Seth", flat: "C-805", phone: "9398655626", whatsapp: "9398650532", instagram: "", video: "", url: "" },
      { id: "c1", cat: "Camps, Music & Kids Activities", venture: "Art Classes For Kids", speciality: "Drawing, Painting, Crafts", desc: "Creative art sessions that spark imagination in kids aged 4–14. Drawing, watercolours, clay modelling and mixed media crafts.", contact: "Bhawna", flat: "K-1101", phone: "9811943751", whatsapp: "9811943751", instagram: "", video: "", url: "" },
      { id: "c11", cat: "Camps, Music & Kids Activities", venture: "Art & Craft Classes", speciality: "Drawing, Painting & Creative Crafts", desc: "Creative drawing, painting and craft sessions that develop artistic skills and self-expression. Fun classes for all ages by Nidhi Rashmi.", contact: "Nidhi Rashmi", flat: "E-1401", phone: "8806417840", whatsapp: "8806417840", instagram: "", video: "", url: "" },
      { id: "c2", cat: "Camps, Music & Kids Activities", venture: "JAMPD Music Academy", speciality: "Music School", desc: "Full-spectrum music school offering guitar, keyboard, vocals, tabla and theory. Beginner to advanced level courses.", contact: "Pranjli", flat: "D-407", phone: "8826125379", whatsapp: "8826125379", instagram: "", video: "", url: "" },
      { id: "c3", cat: "Camps, Music & Kids Activities", venture: "Keshav Events", speciality: "Birthday Parties", desc: "Magical birthday party planning — themes, decorations, return gifts, games and entertainment. Stress-free celebrations!", contact: "Amisha Gupta", flat: "L-802", phone: "9582836656", whatsapp: "9582836656", instagram: "", video: "", url: "" },
      { id: "c12", cat: "Camps, Music & Kids Activities", venture: "Kids Castle & Day Care", speciality: "Play School & Daycare", desc: "A safe, nurturing play school and daycare environment where little ones learn, play and grow. Loving care for toddlers and young children.", contact: "Veenu Chaudhary", flat: "N-1505", phone: "9625514189", whatsapp: "9625514189", instagram: "", video: "", url: "" },
      { id: "c4", cat: "Camps, Music & Kids Activities", venture: "Kids Summer Camp", speciality: "Summer Camp", desc: "Action-packed summer camp with sports, arts, dance, drama, cooking, coding and outdoor activities for kids.", contact: "Garvita Rastogi", flat: "K-802", phone: "9986117878", whatsapp: "9986117878", instagram: "", video: "", url: "" },
      { id: "c5", cat: "Camps, Music & Kids Activities", venture: "Music Classes", speciality: "Indian Classical & Western Music", desc: "Learn Indian classical ragas or western theory and performance. Individual and group lessons for all ages.", contact: "Pihu Dalmia", flat: "B-1501", phone: "9914523462", whatsapp: "9914523462", instagram: "", video: "", url: "" },
      { id: "c14", cat: "Camps, Music & Kids Activities", venture: "Music Sadhana Sangeet Sanstha", speciality: "Classical & Light Vocal, Bollywood Karaoke, Bhajan, Ghazal, Keyboard, Sloka Chanting", desc: "Classical and light vocal training, Bollywood karaoke, bhajan, ghazal, keyboard and sloka chanting. Preserving the beauty of Indian music.", contact: "Suchitra Acharya", flat: "N-1005", phone: "9268494314", whatsapp: "9268494314", instagram: "", video: "", url: "" },
      { id: "c6", cat: "Camps, Music & Kids Activities", venture: "Music With Sudeshna", speciality: "Indian & Western Vocal and Keyboard", desc: "Joyful music lessons covering Hindustani vocal, western keyboard and music theory. Lessons tailored to each student.", contact: "Sudeshna", flat: "B-1203", phone: "9899215551", whatsapp: "9899215551", instagram: "", video: "", url: "" },
      { id: "c13", cat: "Camps, Music & Kids Activities", venture: "Ritu Saxena", speciality: "Hobby Classes – Baking, Cooking, Chocolate Making, Art & Crafts, Home Decor", desc: "Hobby classes covering baking, cooking, chocolate making, art & crafts and home decor. Practical, fun-filled learning for all ages.", contact: "Ritu Saxena", flat: "H-504", phone: "9310634344", whatsapp: "9310634344", instagram: "", video: "", url: "" },
      { id: "c7", cat: "Camps, Music & Kids Activities", venture: "Summer Camp", speciality: "Summer Camp", desc: "Enriching summer programme with fitness, art, cooking and life-skills workshops. Fun-filled days for children 6–16.", contact: "Neha Gupta", flat: "A-1108", phone: "8690320820", whatsapp: "8690320820", instagram: "", video: "", url: "" },
      { id: "c8", cat: "Camps, Music & Kids Activities", venture: "Summer Fun Fest", speciality: "Summer Camp", desc: "High-energy summer festival camp with daily themes, team challenges, talent shows and creative exploration.", contact: "Pihu Dalmia", flat: "B-1501", phone: "9914523462", whatsapp: "9914523462", instagram: "", video: "", url: "" },
      { id: "c9", cat: "Camps, Music & Kids Activities", venture: "Tasty Trail Camp", speciality: "Summer Camp", desc: "A unique camp where kids learn maths and abacus through food and cooking activities. Delicious and educational!", contact: "Shilpi & Ritika", flat: "H-202", phone: "9654797570", whatsapp: "9654797570", instagram: "", video: "", url: "" },
      { id: "c10", cat: "Camps, Music & Kids Activities", venture: "Udaan Summer Camp", speciality: "Summer Camp", desc: "Udaan gives children wings — a confidence-building camp with public speaking, leadership games and creative arts.", contact: "Amisha Gupta", flat: "—", phone: "9582836656", whatsapp: "9582836656", instagram: "", video: "", url: "" },
      { id: "l1", cat: "Gift, Jewellery & Home Decor", venture: "Alka Trendy Finds", speciality: "Bedsheets, Dupattas, Hair Accessories, Crochet", desc: "Vibrant collection of cotton bedsheets, designer dupattas, handmade crochet bags and trendy hair accessories at great prices.", contact: "Alka", flat: "M-1004", phone: "7838893893", whatsapp: "7838893893", instagram: "", video: "", url: "" },
      { id: "l2", cat: "Fashion & Lifestyle", venture: "Beauty Products", speciality: "Skincare, Fragrances, Personal Care & Makeup", desc: "Curated selection of premium skincare, long-lasting fragrances, daily personal care essentials and professional makeup products.", contact: "Sudeshna", flat: "B-1203", phone: "9899215551", whatsapp: "9899215551", instagram: "", video: "", url: "" },
      { id: "l17", cat: "Gift, Jewellery & Home Decor", venture: "Bliss Bedsheets", speciality: "Premium Quality Blankets, Comforter Sets, Dohar Sets, AC Quilts", desc: "Premium quality blankets, comforter sets, dohar sets and AC quilts for cozy, comfortable sleep. Elegant designs, superior fabric.", contact: "Sushila Agarwal", flat: "D-703", phone: "9891012565", whatsapp: "9891012565", instagram: "", video: "", url: "" },
      { id: "l24", cat: "Gift, Jewellery & Home Decor", venture: "Coloroid Art", speciality: "Crochet, Sketching, Painting, Handmade Articles", desc: "Hand-crafted crochet items, detailed sketching and original paintings. Unique handmade articles ideal for gifting and home décor.", contact: "Supriya Srivastava", flat: "A-006", phone: "8008639350", whatsapp: "8008639350", instagram: "", video: "", url: "" },
      { id: "l3", cat: "Gift, Jewellery & Home Decor", venture: "Craftxpress", speciality: "Handmade Hangings, Nameplates, Décor, Return Gifts", desc: "Bespoke handcrafted home décor, personalised nameplates, macramé wall hangings and unique return gift solutions.", contact: "Anushi Singhal", flat: "N-1402", phone: "9911984209", whatsapp: "9911984209", instagram: "", video: "", url: "" },
      { id: "l4", cat: "Fashion & Lifestyle", venture: "Fashion Fiesta", speciality: "Clothing", desc: "Trendy ethnic and fusion wear for women. Kurtis, co-ord sets, lehengas and party wear at pocket-friendly prices.", contact: "Ateet Chopra", flat: "L-1402", phone: "8527932932", whatsapp: "8527932932", instagram: "", video: "", url: "" },
      { id: "l26", cat: "Gift, Jewellery & Home Decor", venture: "Gift Paradise by Anjali", speciality: "Birthday Gifts, Toys, School Bags, Lunch Box, Organisers, Bags, Pouches, Swimming Accessories", desc: "Birthday gifts, toys, school bags, lunch boxes, organisers, pouches, bags and swimming accessories — a paradise for shoppers of all ages.", contact: "Anjali Gupta", flat: "K-1105", phone: "6386733139", whatsapp: "6386733139", instagram: "", video: "", url: "" },
      { id: "l5", cat: "Fashion & Lifestyle", venture: "Gravita Footwear", speciality: "Footwear", desc: "Stylish and comfortable footwear collection — flats, heels, sandals and sports shoes for women and kids.", contact: "Garvita Rastogi", flat: "K-802", phone: "9986117878", whatsapp: "9986117878", instagram: "", video: "", url: "" },
      { id: "l6", cat: "Gift, Jewellery & Home Decor", venture: "Hampers Hub", speciality: "Customized Gift Hampers, Trousseau Packing, Hair Accessories", desc: "Gorgeous customised gift hampers for every occasion, luxurious trousseau packing and a stunning range of hair accessories.", contact: "Rashita", flat: "C-202", phone: "9953068752", whatsapp: "9953068752", instagram: "", video: "", url: "" },
      { id: "l7", cat: "Fashion & Lifestyle", venture: "Her Hawen", speciality: "Lingerie", desc: "Premium comfort lingerie for women — thoughtfully designed, perfectly fitted and available in a wide range of sizes.", contact: "Harshita", flat: "C-203", phone: "9650997485", whatsapp: "9650997485", instagram: "", video: "", url: "" },
      { id: "l18", cat: "Fashion & Lifestyle", venture: "Kashi Sarees & Suits", speciality: "Sarees, Suits & Matching Centre", desc: "Beautiful sarees, suits and a matching centre for all occasions. Authentic Kashi weaves and contemporary designs for the modern woman.", contact: "Shivangi Mishra", flat: "N-1205", phone: "8896768674", whatsapp: "8896768674", instagram: "", video: "", url: "" },
      { id: "l8", cat: "Fashion & Lifestyle", venture: "KATHA – A Tale of Ethnic Weaves", speciality: "Sarees", desc: "Exquisite handloom and woven sarees — Banarasi, Chanderi, Kalamkari, Tant and more. Each saree tells a timeless story.", contact: "Mahua & Sujata", flat: "J-1103", phone: "9910341339", whatsapp: "9910341339", instagram: "", video: "", url: "" },
      { id: "l27", cat: "Gift, Jewellery & Home Decor", venture: "Kiran Jewellery", speciality: "Imitation & Silver Jewellery", desc: "Beautiful imitation and silver jewellery pieces for every occasion. Elegant, affordable and fashionable designs for the modern woman.", contact: "Shilpa Jain", flat: "K-1206", phone: "8826924388", whatsapp: "8826924388", instagram: "", video: "", url: "" },
      { id: "l9", cat: "Gift, Jewellery & Home Decor", venture: "Kitchenware Utilities", speciality: "Wonder Chef, Airlock Glassware, Tupperware", desc: "Premium kitchenware from top brands — Wonder Chef cookware, air-lock glass storage and the complete Tupperware range.", contact: "Sudeshna", flat: "B-1203", phone: "9899215551", whatsapp: "9899215551", instagram: "", video: "", url: "" },
      { id: "l10", cat: "Fashion & Lifestyle", venture: "Label By Rupam", speciality: "Custom Made Baby Dresses", desc: "Adorable, handcrafted baby dresses with custom embroidery and smocking. Perfect for newborns to 3-year-olds.", contact: "Varshney Rupam", flat: "E-903", phone: "9650120251", whatsapp: "9650120251", instagram: "", video: "", url: "" },
      { id: "l11", cat: "Fashion & Lifestyle", venture: "Makeup Studio By Deepi Jassal", speciality: "Makeup, Hair, Skin, Nails", desc: "Professional bridal and party makeup, hair styling, facials and nail art. Book for weddings, events and photoshoots.", contact: "Deepi Jassal", flat: "G-1405 / Shop 8", phone: "9643485467", whatsapp: "9643485467", instagram: "", video: "", url: "" },
      { id: "l12", cat: "Gift, Jewellery & Home Decor", venture: "Personalised Items", speciality: "Mugs, Cups, Bottles, T-shirts, Caps", desc: "High-quality personalised gifts — photo mugs, custom t-shirts, printed bottles and caps. Great for corporates and events.", contact: "Sudeshna", flat: "B-1203", phone: "9899215551", whatsapp: "9899215551", instagram: "", video: "", url: "" },
      { id: "l19", cat: "Fashion & Lifestyle", venture: "Pinkbasket", speciality: "Trendy & Comfortable Women's Wear", desc: "Trendy yet comfortable women's wear collection. Casual, ethnic and fusion outfits perfect for everyday style.", contact: "Anuja Goswami", flat: "N-805", phone: "9958465183", whatsapp: "9958465183", instagram: "", video: "", url: "" },
      { id: "l28", cat: "Gift, Jewellery & Home Decor", venture: "Pooja Kreations", speciality: "Handmade Bags, Pouches, Organisers, Cotton Bedsheets, Scrunchies", desc: "Handmade bags, pouches and organisers; readymade cotton bedsheets and handcrafted scrunchies. Creative products made with care.", contact: "Pooja Singh", flat: "K-1201", phone: "7678185461", whatsapp: "7678185461", instagram: "", video: "", url: "" },
      { id: "l29", cat: "Gift, Jewellery & Home Decor", venture: "SaavliSaloni Jewels (SRS Ventures)", speciality: "High Fashion Statement Jewellery", desc: "High-fashion statement jewellery that turns heads. Bold, contemporary pieces designed to elevate every outfit and occasion.", contact: "Saloni Bhargava", flat: "J-1003", phone: "7290005776", whatsapp: "7290005776", instagram: "", video: "", url: "" },
      { id: "l13", cat: "Fashion & Lifestyle", venture: "Sheetal Alterations", speciality: "Fall, Pico, Alteration", desc: "Expert saree fall stitching, pico work and precision alterations for all types of garments. Quick turnaround.", contact: "Sheetal", flat: "F-304", phone: "8126594447", whatsapp: "8126594447", instagram: "", video: "", url: "" },
      { id: "l14", cat: "Gift, Jewellery & Home Decor", venture: "Soot Saga", speciality: "Bedsheets, Comforters", desc: "Premium cotton and microfiber bedsheets, comforters and quilts. Elegant prints, soft feel, durable quality.", contact: "Neha Sukh Singh", flat: "L-005", phone: "9625222226", whatsapp: "9625222226", instagram: "", video: "", url: "" },
      { id: "l15", cat: "Fashion & Lifestyle", venture: "Stellar Purse Collections", speciality: "Ladies Handbags & Gift Packing", desc: "Stylish handbags, clutches and wallets for every occasion. Beautiful gift packing and wrapping services also available.", contact: "Priyanka", flat: "N-1405", phone: "9873359478", whatsapp: "9873359478", instagram: "", video: "", url: "" },
      { id: "l21", cat: "Fashion & Lifestyle", venture: "Style Sutra-Fashion at Wholesale Prices", speciality: "Clothing Business", desc: "Fashionable clothing at wholesale prices. Quality ethnic and western wear for women available at unbeatable value.", contact: "Samiksha", flat: "A-1102", phone: "9958132339", whatsapp: "9958132339", instagram: "", video: "", url: "" },
      { id: "l22", cat: "Fashion & Lifestyle", venture: "Sunny Mehra Agencies", speciality: "Fashion Advisor – Specialist in Ladies Garments Industry", desc: "Expert fashion advice and sourcing from a specialist in the ladies garments industry. Curated styles, bulk and retail options available.", contact: "Ankush Mehra", flat: "G-201", phone: "9540101773", whatsapp: "9540101773", instagram: "", video: "", url: "" },
      { id: "l16", cat: "Gift, Jewellery & Home Decor", venture: "Veka Jewels", speciality: "Art Jewellery", desc: "One-of-a-kind handcrafted art jewellery — statement earrings, necklaces and bracelets inspired by nature and heritage.", contact: "Preeti Malick", flat: "C-1407", phone: "9899149790", whatsapp: "9899149790", instagram: "", video: "", url: "" },
      { id: "l23", cat: "Fashion & Lifestyle", venture: "Vastralaye", speciality: "Clothing (Ladies, Kids & Gents)", desc: "A wide range of clothing for ladies, kids and gents. Ethnic, casual and formal wear to suit every taste and occasion.", contact: "Madhu Singhal", flat: "N-102", phone: "8586800846", whatsapp: "8586800846", instagram: "", video: "", url: "" },
      { id: "l20", cat: "Gift, Jewellery & Home Decor", venture: "Bedsheet & Handloom", speciality: "Cotton Bedsheets", desc: "Pure cotton handloom bedsheets with traditional weaving charm. Comfortable, breathable and durable for everyday use.", contact: "Shakuntla Rawat", flat: "N-1206", phone: "9013578063", whatsapp: "9013578063", instagram: "", video: "", url: "" },
      { id: "l25", cat: "Gift, Jewellery & Home Decor", venture: "Home Collections", speciality: "Home Ease, Tupperware, Kitchen Cleaning & Home Decor", desc: "Home Ease products, Tupperware essentials, kitchen cleaning solutions and attractive home décor items all under one roof.", contact: "Shubhi Srivastava", flat: "J-1202", phone: "6392789456", whatsapp: "6392789456", instagram: "", video: "", url: "" },
      { id: "h1", cat: "Gift, Jewellery & Home Decor", venture: "APNI Dukaan", speciality: "Stationery Items, Gifts", desc: "Your neighbourhood stationery store — school supplies, office stationery, greeting cards and small gift items. Conveniently accessible.", contact: "Bhawana Srivastava", flat: "E-506", phone: "9634557080", whatsapp: "9634557080", instagram: "", video: "", url: "" },
      { id: "h2", cat: "Home, Print & Tech Services", venture: "CP Plus", speciality: "Laptop & CCTV Sales & Service", desc: "Authorised dealer for laptops and CP Plus CCTV systems. Installation, AMC and repair services at your doorstep.", contact: "Ashish Jain", flat: "E-602", phone: "9999244850", whatsapp: "9999244850", instagram: "", video: "", url: "" },
      { id: "h3", cat: "Home, Print & Tech Services", venture: "Dev Quick Print Service", speciality: "Print, Xerox, Scan", desc: "Fast, affordable printing, xerox and scanning services. Colour and B&W. Bulk orders welcome. Quick turnaround guaranteed.", contact: "Deependra Singh", flat: "C-706", phone: "9457711885", whatsapp: "9457711885", instagram: "", video: "", url: "" },
      { id: "h4", cat: "Home, Print & Tech Services", venture: "MODI Solution", speciality: "Laptop & CCTV Sales & Service", desc: "Comprehensive tech solutions — laptop sales, CCTV installation and maintenance, networking and IT support for homes and offices.", contact: "Sarika Jain", flat: "E-602", phone: "9999244850", whatsapp: "9999244850", instagram: "", video: "", url: "" },
      { id: "p8", cat: "Health Services", venture: "AllBrite Dental Clinic", speciality: "Dentist", desc: "Complete dental care by Dr. Rohini Tikkha — consultations, cleanings, fillings, root canals and cosmetic dentistry. Healthy smiles for the whole family.", contact: "Dr. Rohini Tikkha", flat: "K-507", phone: "8510982345", whatsapp: "8510982345", instagram: "", video: "", url: "" },
      { id: "p1", cat: "Professional Services", venture: "Amit Gulati", speciality: "Mutual Fund Distributor", desc: "AMFI-registered mutual fund distributor. Get personalised investment plans, SIP guidance and portfolio reviews. Grow wealth smartly.", contact: "Amit Gulati", flat: "I-501", phone: "9810134459", whatsapp: "9810134459", instagram: "", video: "", url: "" },
      { id: "p2", cat: "Professional Services", venture: "AR Digitel Wealth", speciality: "Mutual Fund Advising", desc: "Digital-first wealth management — SIPs, lump-sum investments, tax-saving ELSS and retirement planning. Transparent advisory.", contact: "V P Singh", flat: "D-408", phone: "9650992955", whatsapp: "9650992955", instagram: "", video: "", url: "" },
      { id: "p3", cat: "Professional Services", venture: "Destiny Digits By Shivanii", speciality: "Numerology", desc: "Unlock life's blueprint through numerology — name corrections, business naming, lucky numbers and destiny readings.", contact: "Shivanii Verma", flat: "C-706", phone: "7249419821", whatsapp: "7249419821", instagram: "", video: "", url: "" },
      { id: "p4", cat: "Professional Services", venture: "Diviinemaagnet", speciality: "Astrologer", desc: "Vedic astrology readings, kundli matching, career and relationship guidance. In-person and online consultations available.", contact: "Neeru Tripathi", flat: "G-1501", phone: "9536761711", whatsapp: "9536761711", instagram: "", video: "", url: "" },
      { id: "p9", cat: "Health Services", venture: "GeetaShakti Cancer Care Foundation", speciality: "Cancer Care", desc: "A compassionate foundation providing cancer care guidance, awareness and support. Dr Babul Bansal leads with expertise and empathy.", contact: "Dr Babul Bansal", flat: "J-407", phone: "8114222222", whatsapp: "8114222222", instagram: "", video: "", url: "" },
      { id: "p10", cat: "Health Services", venture: "IQ Diagnostics & Clinics", speciality: "Diagnostic Centre", desc: "Full-range diagnostic centre offering blood tests, imaging and health check-up packages. Accurate results, convenient and affordable.", contact: "Dr Ankita Singhal", flat: "J-407", phone: "6398667493", whatsapp: "6398667493", instagram: "", video: "", url: "" },
      { id: "p11", cat: "Professional Services", venture: "Ipscholar.com", speciality: "Legal / Patents / Copyrights / Trademarks / Designs Registration", desc: "Legal experts specialising in intellectual property — patents, copyrights, trademarks and designs registration. Protect your ideas with confidence.", contact: "Shakti Khera", flat: "K-307", phone: "9354948661", whatsapp: "9354948661", instagram: "", video: "", url: "" },
      { id: "p12", cat: "Professional Services", venture: "MADMEN Production", speciality: "Branding, Photography, Videography", desc: "Creative branding, professional photography and high-quality videography services. Elevate your personal or business brand with compelling visuals.", contact: "Saransh Gupta", flat: "C-1204", phone: "9205002408", whatsapp: "9205002408", instagram: "", video: "", url: "" },
      { id: "p5", cat: "Health Services", venture: "Nutrospect", speciality: "Nutritionist", desc: "Certified nutritionist offering personalised diet plans for weight management, PCOD, diabetes, thyroid and sports nutrition.", contact: "Richa Srivastava", flat: "G-402", phone: "9958895624", whatsapp: "9958895624", instagram: "", video: "", url: "" },
      { id: "p6", cat: "Professional Services", venture: "SKB's Eduinvest", speciality: "Insurance, Mutual Funds & Loan Distributor", desc: "One-stop financial services — life & health insurance, mutual fund investments and loan assistance. Trusted neighbourhood advisor.", contact: "Sanjay Kumar Bharti", flat: "K-1506", phone: "9810094256", whatsapp: "9810094256", instagram: "", video: "", url: "" },
      { id: "p7", cat: "Health Services", venture: "Spire Child & Mother Clinic", speciality: "Doctor – Paediatrician", desc: "Expert paediatric care for newborns to adolescents. Vaccinations, growth monitoring and sick child consultations by Dr Gaurav Agarwal.", contact: "Dr Gaurav Agarwal", flat: "N-1204", phone: "7770837517", whatsapp: "7770837517", instagram: "", video: "", url: "" },
      { id: "p13", cat: "Professional Services", venture: "Surya Trading", speciality: "Industrial Solutions", desc: "Reliable industrial solutions and trading services. Catering to a wide range of industrial needs with quality products and timely delivery.", contact: "Pawan Arora", flat: "C-1508", phone: "9811164700", whatsapp: "9811164700", instagram: "", video: "", url: "" },
      { id: "p14", cat: "Professional Services", venture: "Taxyojna Consultants", speciality: "Income Tax, GST, MCA & Litigation", desc: "Expert chartered accountant services — income tax filing, GST compliance, MCA filings and litigation support by CA Preeti Gupta.", contact: "CA Preeti Gupta", flat: "N-206", phone: "8447033883", whatsapp: "8447033883", instagram: "", video: "", url: "" },
      { id: "p15", cat: "Professional Services", venture: "Yc Productionz", speciality: "Photography, Videography, Video Editing & Social Media Marketing", desc: "Professional photography, videography, video editing and social media marketing services. Capture your moments and grow your digital presence.", contact: "Yashasvi Chugh", flat: "E-402", phone: "8708287403", whatsapp: "8708287403", instagram: "", video: "", url: "" },
    ];
    /* SEED_END */

    /* ═══════════ FIREBASE CONFIG ═══════════ */
    // ⚠️  Replace these placeholder values with your actual Firebase project config.
    // Firebase Console → Project Settings → Your apps → Web app → SDK setup & config
    const FIREBASE_CONFIG = {
      apiKey: "AIzaSyB803B_Vgx0TPuDNYbRFGZvMHRcxGYSBW8",
      authDomain: "homebiz-480e5.firebaseapp.com",
      projectId: "homebiz-480e5",
      storageBucket: "homebiz-480e5.firebasestorage.app",
      messagingSenderId: "912207487650",
      appId: "1:912207487650:web:465cc586ece9183d232dfb"
    };

    /* ═══════════ FIREBASE INIT ═══════════ */
    let db = null, auth = null, storage = null, secondaryAuth = null, secondaryDb = null, secondaryStorage = null;
    const FB_READY = !FIREBASE_CONFIG.apiKey.includes('YOUR_');

    if (FB_READY) {
      try {
        const app = firebase.initializeApp(FIREBASE_CONFIG);
        db = firebase.firestore(app);
        auth = firebase.auth(app);
        storage = firebase.storage(app);
        db.enablePersistence({ synchronizeTabs: true }).catch(() => { });
        // Secondary app instance so admin can create business accounts without
        // signing themselves out of their own Firebase session.
        let secApp;
        try { secApp = firebase.app('sec'); } catch (e) { secApp = firebase.initializeApp(FIREBASE_CONFIG, 'sec'); }
        secondaryAuth = firebase.auth(secApp);
        secondaryDb = firebase.firestore(secApp); // write account doc as the new user
        secondaryStorage = firebase.storage(secApp); // upload business registration documents
      } catch (e) { console.warn('Firebase init failed:', e.message); }
    }

    /* ═══════════ STATE ═══════════ */
    let githubToken = '';
    // Restore admin session from sessionStorage (survives page refresh, cleared on logout/tab close)
    const _restoredAdminUid = sessionStorage.getItem('hb_adminUid');
    let isAdmin = !!_restoredAdminUid, currentBusiness = null;
    if (_restoredAdminUid) window._adminUid = _restoredAdminUid;
    let editingId = null, pendingImg = null;
    let _browseLevel = 'societies'; // 'societies' | 'societyPicker' | 'society' | 'category' — drill-down nav state
    let _browseCategory = null;
    let _browseProductQuery = null; // set instead of _browseCategory when level 'category' was reached via a global product pick
    let SITE_CONFIG = {};
    const DEFAULT_SOCIETIES = [
      { name: 'Prateek Laurel', address: 'Sector 120, Noida, UP', lat: 28.5900, lng: 77.3610 }
    ];
    let selectedSociety = null; // no society pre-selected — customer picks one, or GPS detection picks one for them
    // Seed admin mobile number — always authorized even before any admin has saved
    // a Firestore-backed list via the admin panel's "Admin Access" numbers card.
    const DEFAULT_ADMIN_NUMBERS = ['8373919344'];
    function _adminNumbers() {
      const list = SITE_CONFIG.adminMobileNumbers;
      return (Array.isArray(list) && list.length) ? list : DEFAULT_ADMIN_NUMBERS;
    }

    /* ═══════════ CUSTOMER ACCOUNT STATE ═══════════ */
    function esc(s) { return (s == null ? '' : String(s)).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
    let currentCustomer = null; // {name,mobile,email,emailVerified,address,addresses}
    let _custOtp = { email: null, code: null, expiresAt: 0, verifiedEmail: null }; // used for optional email-field verification
    const _restoredCustomerMobile = localStorage.getItem('hb_customerMobile');

    /* ═══════════ FIRESTORE HELPERS ═══════════ */
    async function fsLoadVendors() {
      if (!db) return null;
      try {
        const snap = await db.collection('vendors').get();
        if (snap.empty) return null;
        return snap.docs.map(d => ({ ...d.data(), id: d.id }));
      } catch (e) { return null; }
    }

    async function fsSaveVendor(data) {
      if (!db) return;
      const ok = await ensureAdminAuth();
      if (!ok) throw new Error('Not authenticated');
      const uid = window._adminUid || auth?.currentUser?.uid || null;
      const toWrite = uid ? { ...data, ownerUid: data.ownerUid || uid } : data;
      await db.collection('vendors').doc(toWrite.id).set(toWrite);
    }

    async function fsDeleteVendor(id) {
      if (!db) return;
      await db.collection('vendors').doc(id).delete();
      await db.collection('stats').doc(id).delete().catch(() => { });
    }

    async function fsLoadBusinessRequests() {
      if (!db) return [];
      try {
        const snap = await db.collection('business_requests').get();
        return snap.docs.map(d => ({ ...d.data(), requestId: d.id }));
      } catch (e) { console.warn('Could not load business requests:', e.message); return []; }
    }

    /* Returns {ok:true} on success or {ok:false, reason} on failure, instead of
       swallowing errors silently — callers surface the failure to the admin so a
       broken/misconfigured EmailJS setup doesn't silently leave businesses unnotified. */
    async function _sendBusinessStatusEmail(email, venture, status, reason) {
      const ejsPubKey = SITE_CONFIG.ejsPublicKey || '';
      const ejsService = SITE_CONFIG.ejsServiceId || '';
      // Reuses the Contact Us template by default (free EmailJS plans cap the template
      // count) — this only works once that template's "To Email" setting on EmailJS's
      // dashboard is the dynamic {{to_email}} placeholder rather than a hardcoded address;
      // otherwise every business email silently misdelivers to the contact inbox instead of
      // the business. A separate ejsBusinessTemplateId can still be set later to override this.
      const ejsTemplate = SITE_CONFIG.ejsBusinessTemplateId || SITE_CONFIG.ejsTemplateId || '';
      if (!(ejsPubKey && ejsService && ejsTemplate)) return { ok: false, reason: 'Email service not configured — set up EmailJS in Site Config.' };
      const subject = status === 'approved' ? 'Your TynTron Business Account Has Been Approved!' : 'Update on Your TynTron Business Application';
      const message = status === 'approved'
        ? `Congratulations! Your business application for "${venture}" has been approved. Please log in to TynTron using your registered email and password, and start listing your products/services.`
        : `Your business application for "${venture}" was not approved.${reason ? ' Reason: ' + reason : ''} Feel free to reach out if you have questions.`;
      try {
        await emailjs.init({ publicKey: ejsPubKey });
        await emailjs.send(ejsService, ejsTemplate, {
          from_name: 'TynTron', from_email: 'noreply@tyntron.co.in', mobile: '',
          subject, message, to_email: email
        });
        return { ok: true };
      } catch (e) {
        console.warn('Approval/rejection email failed:', e.message);
        return { ok: false, reason: e.text || e.message || 'unknown error' };
      }
    }

    async function fsLoadConfig() {
      // Load from localStorage first as fallback
      try {
        const cached = localStorage.getItem('pl_site_config');
        if (cached) { const p = JSON.parse(cached); if (p && typeof p === 'object') SITE_CONFIG = { ...SITE_CONFIG, ...p }; }
      } catch (e) { }
      if (!db) return;
      try {
        const d = await db.collection('config').doc('site').get();
        if (d.exists) { SITE_CONFIG = d.data(); localStorage.setItem('pl_site_config', JSON.stringify(SITE_CONFIG)); }
      } catch (e) { }
    }

    /* ── Re-auth on session expiry ── */
    let _reAuthResolve = null, _reAuthReject = null;

    function ensureAdminAuth() {
      if (!auth) return Promise.resolve(false);
      if (auth.currentUser) return Promise.resolve(true);
      // Pre-fill email from the admin-activation form if available
      const savedEmail = document.getElementById('ca_adminEmail')?.value || '';
      if (savedEmail) document.getElementById('reAuthEmail').value = savedEmail;
      document.getElementById('reAuthErr').style.display = 'none';
      document.getElementById('reAuthModal').classList.add('open');
      setTimeout(() => { const el = document.getElementById(savedEmail ? 'reAuthPw' : 'reAuthEmail'); if (el) el.focus(); }, 120);
      return new Promise((resolve, reject) => { _reAuthResolve = resolve; _reAuthReject = reject; });
    }

    async function _reAuthSubmit() {
      const email = document.getElementById('reAuthEmail').value.trim();
      const pw = document.getElementById('reAuthPw').value;
      const errEl = document.getElementById('reAuthErr');
      if (!email || !pw) { errEl.textContent = 'Enter email and password'; errEl.style.display = 'block'; return; }
      try {
        const cred = await auth.signInWithEmailAndPassword(email, pw);
        window._adminUid = cred.user.uid;
        sessionStorage.setItem('hb_adminUid', cred.user.uid);
        document.getElementById('reAuthModal').classList.remove('open');
        document.getElementById('reAuthPw').value = '';
        errEl.style.display = 'none';
        if (_reAuthResolve) { _reAuthResolve(true); _reAuthResolve = null; }
      } catch (e) {
        errEl.textContent = e.code === 'auth/wrong-password' || e.code === 'auth/user-not-found' ? 'Incorrect email or password' : e.message;
        errEl.style.display = 'block';
      }
    }

    function _reAuthCancel() {
      document.getElementById('reAuthModal').classList.remove('open');
      if (_reAuthReject) { _reAuthReject(new Error('cancelled')); _reAuthReject = null; }
    }

    async function fsSaveConfig(patch) {
      SITE_CONFIG = { ...SITE_CONFIG, ...patch };
      try { localStorage.setItem('pl_site_config', JSON.stringify(SITE_CONFIG)); } catch (e) { }
      if (db) {
        try {
          const ok = await ensureAdminAuth();
          if (ok) await db.collection('config').doc('site').set(SITE_CONFIG, { merge: true });
        } catch (e) { }
      }
    }

    async function fsRecordStat(vendorId, field) {
      // 1. Update local DATA array state for immediate UI feedback & local persistence
      const v = (DATA || []).find(d => d.id === vendorId);
      if (v) {
        if (field === 'orderClicks') v._orderClicks = (v._orderClicks || 0) + 1;
        if (field === 'profileViews') v._profileViews = (v._profileViews || 0) + 1;
        if (field === 'whatsappClicks') v._whatsappClicks = (v._whatsappClicks || 0) + 1;
        saveData(DATA);
      }

      if (!db) return;
      try {
        // Sign in anonymously if no user — customers aren't authenticated
        if (auth && !auth.currentUser) await auth.signInAnonymously().catch(() => { });
        await db.collection('stats').doc(vendorId).set(
          {
            vendorId,
            [field]: firebase.firestore.FieldValue.increment(1),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          },
          { merge: true }
        );
      } catch (e) {
        console.warn('fsRecordStat error:', e);
      }
    }

    async function fsLogOrder(vendorId, vendorName, items, total, flat, customerEmail, customerName, customerMobile) {
      if (!db) return;
      // Rule requires isSignedIn() — customers are anonymous, so use Firebase Anonymous Auth
      try {
        if (auth && !auth.currentUser) {
          await auth.signInAnonymously().catch(() => { });
        }
        if (!auth || !auth.currentUser) return; // still no auth, skip log
        await db.collection('order_logs').add({
          vendorId, vendorName, items, total, flat,
          customerEmail: customerEmail || null, customerName: customerName || '', customerMobile: customerMobile || null,
          ts: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (e) { }
    }

    /* ═══════════ CUSTOMER ACCOUNT (Email OTP) ═══════════ */
    function genOtpCode() { return String(Math.floor(100000 + Math.random() * 900000)); }

    async function sendCustomerOtp(email, onSent) {
      const code = genOtpCode();
      const expiresAt = Date.now() + 15 * 60 * 1000;
      _custOtp = { email, code, expiresAt, verifiedEmail: null };
      const ejsPubKey = SITE_CONFIG.ejsPublicKey || '';
      const ejsService = SITE_CONFIG.ejsServiceId || '';
      const ejsTemplate = SITE_CONFIG.ejsOtpTemplateId || SITE_CONFIG.ejsTemplateId || '';
      if (!(ejsPubKey && ejsService && ejsTemplate)) {
        showToast('Email service not configured — ask admin to set up EmailJS in Site Config.');
        return false;
      }
      const expiryTime = new Date(expiresAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      try {
        await emailjs.init({ publicKey: ejsPubKey });
        await emailjs.send(ejsService, ejsTemplate, {
          from_name: 'TynTron', from_email: 'noreply@tyntron.co.in',
          mobile: '', subject: 'Your TynTron Verification Code',
          message: `Your verification code is ${code}. It expires in 15 minutes.`,
          passcode: code, time: expiryTime, otp_code: code, to_email: email
        });
        showToast(`Verification code sent to ${email}`);
        if (onSent) onSent();
        return true;
      } catch (e) {
        showToast('Could not send verification email: ' + (e.text || e.message || 'unknown error'));
        return false;
      }
    }

    function verifyCustomerOtpCode(inputCode) {
      if (!_custOtp.code) return false;
      if (Date.now() > _custOtp.expiresAt) return false;
      if (String(inputCode || '').trim() !== _custOtp.code) return false;
      _custOtp.verifiedEmail = _custOtp.email;
      return true;
    }

    /* ═══════════ VERIFYNOW (Message Central) MOBILE OTP ═══════════ */
    let _vnToken = null, _vnTokenExpiresAt = 0;
    async function _vnGetToken() {
      if (_vnToken && Date.now() < _vnTokenExpiresAt) return _vnToken;
      const vnCustomerId = SITE_CONFIG.vnCustomerId || '';
      const vnEmail = SITE_CONFIG.vnEmail || '';
      const vnPassword = SITE_CONFIG.vnPassword || '';
      if (!(vnCustomerId && vnEmail && vnPassword)) throw new Error('Mobile OTP service not configured — ask admin to set up VerifyNow in Site Config.');
      const key = btoa(vnPassword);
      const url = `https://cpaas.messagecentral.com/auth/v1/authentication/token?country=IN&customerId=${encodeURIComponent(vnCustomerId)}&email=${encodeURIComponent(vnEmail)}&key=${encodeURIComponent(key)}&scope=NEW`;
      const res = await fetch(url, { headers: { accept: '*/*' } });
      const data = await res.json();
      if (!data.token) throw new Error('Could not authenticate with VerifyNow');
      _vnToken = data.token;
      _vnTokenExpiresAt = Date.now() + 23 * 60 * 60 * 1000; // token is valid 24h — cache for 23h
      return _vnToken;
    }

    let _vnVerificationId = null, _vnMobile = null, _vnMobileVerified = null, _lastSentMobileOtp = null;

    function listenForWebOtp(inputId) {
      if ('OTPCredential' in window && navigator.credentials) {
        try {
          const ac = new AbortController();
          setTimeout(() => { try { ac.abort(); } catch (e) { } }, 3 * 60 * 1000);
          navigator.credentials.get({
            otp: { transport: ['sms'] },
            signal: ac.signal
          }).then(otp => {
            if (otp && otp.code) {
              const input = document.getElementById(inputId);
              if (input) {
                input.value = otp.code;
                input.dispatchEvent(new Event('input', { bubbles: true }));
                input.dispatchEvent(new Event('change', { bubbles: true }));
              }
            }
          }).catch(e => { console.log('WebOTP listener:', e.message); });
        } catch (e) { }
      }
    }

    async function sendMobileOtp(mobile) {
      try {
        const token = await _vnGetToken();
        const url = `https://cpaas.messagecentral.com/verification/v3/send?countryCode=91&customerId=${encodeURIComponent(SITE_CONFIG.vnCustomerId)}&flowType=SMS&mobileNumber=${encodeURIComponent(mobile)}`;
        const res = await fetch(url, { method: 'POST', headers: { accept: '*/*', authToken: token } });
        const data = await res.json();
        if (data?.data?.verificationId) {
          _vnVerificationId = data.data.verificationId;
          _vnMobile = mobile;
          _lastSentMobileOtp = data?.data?.otp || data?.otp || data?.code || null;
          showToast(`OTP sent to ${mobile}`);
          listenForWebOtp('ca_otp');
          listenForWebOtp('sr_mobileCode');
          return true;
        }
        throw new Error(data?.message || 'Failed to send OTP');
      } catch (e) { showToast('Could not send mobile OTP: ' + e.message); return false; }
    }

    async function verifyMobileOtp(code) {
      try {
        if (!_vnVerificationId) return false;
        const token = await _vnGetToken();
        const url = `https://cpaas.messagecentral.com/verification/v3/validateOtp?countryCode=91&mobileNumber=${encodeURIComponent(_vnMobile)}&verificationId=${encodeURIComponent(_vnVerificationId)}&customerId=${encodeURIComponent(SITE_CONFIG.vnCustomerId)}&code=${encodeURIComponent(code)}`;
        const res = await fetch(url, { headers: { accept: '*/*', authToken: token } });
        const data = await res.json();
        if (data?.data?.verificationStatus === 'VERIFICATION_COMPLETED') {
          _vnMobileVerified = _vnMobile;
          return true;
        }
        return false;
      } catch (e) { showToast('Mobile verification failed: ' + e.message); return false; }
    }

    async function fsSaveCustomerProfile(profile) {
      const data = { name: profile.name || '', mobile: profile.mobile || '', email: profile.email || '', emailVerified: !!profile.emailVerified, address: profile.address || '', addresses: profile.addresses || [] };
      if (!db) return data;
      try {
        if (auth && !auth.currentUser) await auth.signInAnonymously().catch(() => { });
        const ref = db.collection('customers').doc(profile.mobile);
        const snap = await ref.get();
        const toWrite = { ...data, updatedAt: firebase.firestore.FieldValue.serverTimestamp() };
        if (!snap.exists) toWrite.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        await ref.set(toWrite, { merge: true });
      } catch (e) { }
      return data;
    }

    async function fsLoadCustomerProfile(mobile) {
      if (!db || !mobile) return null;
      try {
        if (auth && !auth.currentUser) await auth.signInAnonymously().catch(() => { });
        const snap = await db.collection('customers').doc(mobile).get();
        return snap.exists ? { ...snap.data(), mobile } : null;
      } catch (e) { return null; }
    }

    async function fsLoadCustomerOrders(mobile) {
      if (!db || !mobile) return [];
      try {
        if (auth && !auth.currentUser) await auth.signInAnonymously().catch(() => { });
        const snap = await db.collection('order_logs').where('customerMobile', '==', mobile).get();
        const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        docs.sort((a, b) => ((b.ts && b.ts.seconds) || 0) - ((a.ts && a.ts.seconds) || 0));
        return docs;
      } catch (e) { return []; }
    }

    async function fsLoadVendorOrders(vendorId) {
      if (!db || !vendorId) return [];
      try {
        if (auth && !auth.currentUser) await auth.signInAnonymously().catch(() => { });
        const snap = await db.collection('order_logs').where('vendorId', '==', vendorId).get();
        const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        docs.sort((a, b) => ((b.ts && b.ts.seconds) || 0) - ((a.ts && a.ts.seconds) || 0));
        return docs;
      } catch (e) { return []; }
    }

    function customerLogin(profile) {
      currentCustomer = profile;
      localStorage.setItem('hb_customerMobile', profile.mobile);
      updatePanelTabs();
      // Refresh whichever bottom-nav page is currently showing — without this, logging in
      // while already on Orders/Account leaves the stale "not logged in" view on screen
      // until the customer switches tabs away and back (matches customerLogout()'s handling).
      if (_customerPage === 'account') renderAccountPage();
      if (_customerPage === 'orders') renderOrdersPage();
      // Same staleness issue if they logged in via "Login to Order" from an open vendor
      // detail view — refresh it so the prefilled order form replaces the login prompt.
      if (_menuVendor) openMenuModal(_menuVendor.id);
    }

    async function customerLogout() {
      currentCustomer = null;
      localStorage.removeItem('hb_customerMobile');
      closeModal('customerAccountModal');
      updatePanelTabs();
      if (_customerPage === 'account') renderAccountPage();
      if (_customerPage === 'orders') renderOrdersPage();
      showToast('Logged out');
    }

    /* ═══════════ BOTTOM NAV (Home / Orders / Account app-shell) ═══════════ */
    let _customerPage = 'home';
    function switchCustomerPage(page) {
      _customerPage = page;
      switchPanel('customer');
      ['home', 'orders', 'account', 'help'].forEach(p => {
        const el = document.getElementById('customer' + p.charAt(0).toUpperCase() + p.slice(1) + 'Page');
        if (el) el.style.display = (p === page ? '' : 'none');
      });
      // Search bar is Home-browsing chrome only — Orders/Account/Help start straight
      // into their own content. (The ad grid lives inside #browseLevelSocieties, so it
      // already hides/shows automatically with the rest of the Home tab's root level.)
      const searchSection = document.getElementById('searchSection');
      if (searchSection) searchSection.style.display = (page === 'home' ? '' : 'none');
      document.querySelectorAll('.bn-item').forEach(b => b.classList.toggle('active', b.dataset.page === page));
      if (page === 'home') { _browseLevel = 'societies'; _browseCategory = null; _browseProductQuery = null; closeVendorDetail(); }
      if (page === 'orders') renderOrdersPage();
      if (page === 'account') renderAccountPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function renderOrdersPage() {
      const body = document.getElementById('customerOrdersBody');
      if (!body) return;
      if (!currentCustomer) {
        body.innerHTML = `<div class="empty-state"><i class="fa fa-lock"></i><p>Login to see your orders.</p>
      <button class="btn btn-primary" style="margin-top:12px" onclick="openCustomerAuthModal()"><i class="fa fa-right-to-bracket"></i> Login / Sign Up</button></div>`;
        return;
      }
      body.innerHTML = `<p style="color:var(--text-muted);text-align:center"><i class="fa fa-spinner fa-spin"></i> Loading…</p>`;
      const orders = await fsLoadCustomerOrders(currentCustomer.mobile);
      if (!orders.length) {
        body.innerHTML = `<div class="empty-state"><i class="fa fa-receipt"></i><p>No orders yet. Browse businesses and place your first order!</p></div>`;
        return;
      }
      body.innerHTML = orders.map(o => `
    <div class="order-history-card" onclick="reorderFromHistory('${o.vendorId}')" style="border:1.5px solid var(--border);border-radius:14px;padding:14px 16px;margin-bottom:12px;background:var(--white);cursor:pointer">
      <div style="display:flex;justify-content:space-between;gap:10px;font-weight:700;color:var(--green-dark)">
        <span>${esc(o.vendorName)}</span><span style="white-space:nowrap">₹${o.total || 0}</span>
      </div>
      <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">${(o.items || []).map(it => `${esc(it.name)} x${it.qty}`).join(', ')}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
        <span style="font-size:.72rem;color:var(--text-muted)">${o.ts && o.ts.seconds ? new Date(o.ts.seconds * 1000).toLocaleString() : ''}</span>
        <span style="font-size:.76rem;color:var(--green);font-weight:700;white-space:nowrap"><i class="fa fa-rotate-right"></i> Reorder</span>
      </div>
    </div>`).join('');
    }

    /* Tapping a past order in the Orders tab jumps straight to that vendor's listing
       (switching to the Home tab first, since the detail view lives inside it) so the
       customer can quickly reorder. If the vendor is gone/delisted, say so instead of
       silently switching tabs to nothing. */
    function reorderFromHistory(vendorId) {
      const vendor = getBrowseData().find(d => d.id === vendorId);
      if (!vendor) { showToast('This business is no longer listed'); return; }
      switchCustomerPage('home');
      openMenuModal(vendorId);
    }

    function _accountAboutLinksHTML() {
      const row = (icon, label, onclick) => `<a onclick="${onclick}" style="display:flex;align-items:center;gap:10px;padding:13px 16px;color:var(--text);cursor:pointer;border-bottom:1px solid var(--border);font-size:.88rem"><i class="fa ${icon}" style="color:var(--green);width:18px"></i>${label}</a>`;
      return `
    <div style="font-weight:700;color:var(--green-dark);margin:20px 0 10px"><i class="fa fa-circle-info"></i> About TynTron</div>
    <div style="border:1px solid var(--border);border-radius:12px;overflow:hidden">
      ${row('fa-circle-info', 'About Us', "openAboutModal()")}
      ${row('fa-bullseye', 'Mission', "openPolicyModal('mission')")}
      ${row('fa-eye', 'Vision', "openPolicyModal('vision')")}
      ${row('fa-users', 'Who Can Join', "openPolicyModal('whocanjoin')").replace('border-bottom:1px solid var(--border);', '')}
    </div>`;
    }

    async function renderAccountPage() {
      const target = document.getElementById('customerAccountPageBody');
      if (!target) return;
      if (!currentCustomer) {
        target.innerHTML = `<div class="empty-state"><i class="fa fa-circle-user"></i><p>You're not logged in.</p>
      <button class="btn btn-primary" style="margin-top:12px" onclick="openCustomerAuthModal()"><i class="fa fa-right-to-bracket"></i> Login / Sign Up</button></div>
      ${_accountBusinessLinkHTML()}
      ${_accountAboutLinksHTML()}`;
        return;
      }
      _caEditMode = false;
      _caTargetId = 'customerAccountPageBody';
      await renderCustomerAccountBody();
      target.insertAdjacentHTML('beforeend', `<button class="btn btn-danger" style="width:100%;justify-content:center;margin-top:16px" onclick="customerLogout()"><i class="fa fa-sign-out-alt"></i> Log Out</button>
    ${_accountBusinessLinkHTML()}
    ${_accountAboutLinksHTML()}`);
    }
    function _accountBusinessLinkHTML() {
      return `
    <div style="border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-top:16px">
      <a onclick="openLoginModal()" style="display:flex;align-items:center;gap:10px;padding:13px 16px;color:var(--text);cursor:pointer;font-size:.88rem"><i class="fa fa-store" style="color:var(--green);width:18px"></i>Register your Business</a>
    </div>`;
    }

    function openCustomerAuthModal() {
      document.getElementById('ca_mobile').value = '';
      document.getElementById('ca_otp').value = '';
      document.getElementById('ca_name').value = '';
      document.getElementById('ca_addrFlat').value = '';
      document.getElementById('ca_addrTower').value = '';
      document.getElementById('ca_addrLandmark').value = '';
      document.getElementById('ca_email').value = '';
      document.getElementById('ca_emailOtp').value = '';
      document.getElementById('caEmailOtpRow').style.display = 'none';
      document.getElementById('caEmailStatus').style.display = 'none';
      _caEmailVerified = null;
      document.getElementById('ca_adminEmail').value = '';
      document.getElementById('ca_adminPw').value = '';
      document.getElementById('caStep1Err').style.display = 'none';
      document.getElementById('caStep2Err').style.display = 'none';
      document.getElementById('caStep3Err').style.display = 'none';
      document.getElementById('caAdminErr').style.display = 'none';
      document.getElementById('caStep1').style.display = 'block';
      document.getElementById('caStep2').style.display = 'none';
      document.getElementById('caStep3').style.display = 'none';
      document.getElementById('caStepAdmin').style.display = 'none';
      caCheckEmailStatus();
      document.getElementById('customerAuthModal').classList.add('open');
      setTimeout(() => document.getElementById('ca_mobile').focus(), 120);
    }

    async function caSendOtp(isResend) {
      const mobileEl = document.getElementById('ca_mobile');
      const mobile = (mobileEl.value || '').trim().replace(/[\s\-]/g, '');
      const errEl = document.getElementById('caStep1Err');
      if (!/^\d{7,15}$/.test(mobile)) {
        errEl.textContent = 'Please enter a valid mobile number.'; errEl.style.display = 'block'; return;
      }
      errEl.style.display = 'none';
      const btn = document.getElementById('caSendOtpBtn');
      if (btn && !isResend) { btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending…'; }
      const sent = await sendMobileOtp(mobile);
      if (btn && !isResend) { btn.disabled = false; btn.innerHTML = '<i class="fa fa-paper-plane"></i> Send OTP'; }
      if (sent) {
        document.getElementById('caMobileShown').textContent = mobile;
        document.getElementById('caStep1').style.display = 'none';
        document.getElementById('caStep2').style.display = 'block';
        const otpInput = document.getElementById('ca_otp');
        if (otpInput) {
          if (_lastSentMobileOtp) otpInput.value = _lastSentMobileOtp;
          else otpInput.value = '';
          setTimeout(() => otpInput.focus(), 120);
        }
        listenForWebOtp('ca_otp');
      }
    }

    async function caVerifyOtp() {
      const code = (document.getElementById('ca_otp').value || '').trim();
      const errEl = document.getElementById('caStep2Err');
      const ok = await verifyMobileOtp(code);
      if (!ok) {
        errEl.textContent = 'Invalid or expired code. Please try again.'; errEl.style.display = 'block'; return;
      }
      errEl.style.display = 'none';
      const mobile = _vnMobile;
      // Admin numbers skip customer login/signup entirely — verified phone ownership
      // plus Firebase credentials (next step) is what actually grants admin access.
      if (window._configLoadPromise) await window._configLoadPromise;
      if (_adminNumbers().includes(mobile)) {
        document.getElementById('caStep2').style.display = 'none';
        document.getElementById('caStepAdmin').style.display = 'block';
        document.getElementById('ca_adminEmail').focus();
        return;
      }
      const existing = await fsLoadCustomerProfile(mobile);
      if (existing) {
        customerLogin(existing);
        closeModal('customerAuthModal');
        showToast(`Welcome back, ${existing.name || mobile}!`);
        return;
      }
      document.getElementById('caStep2').style.display = 'none';
      document.getElementById('caStep3').style.display = 'block';
      document.getElementById('ca_name').focus();
    }

    let _caEmailVerified = null;
    function caCheckEmailStatus() {
      const inputEmail = (document.getElementById('ca_email')?.value || '').trim().toLowerCase();
      const verifyBtn = document.getElementById('caEmailVerifyBtn');
      const badge = document.getElementById('caEmailVerifiedBadge');
      const otpRow = document.getElementById('caEmailOtpRow');
      const statusMsg = document.getElementById('caEmailStatus');
      if (!inputEmail) {
        if (verifyBtn) verifyBtn.style.display = 'none';
        if (badge) badge.style.display = 'none';
        if (otpRow) otpRow.style.display = 'none';
        if (statusMsg) statusMsg.style.display = 'none';
        return;
      }
      const isVerified = !!(_caEmailVerified && inputEmail === _caEmailVerified);
      if (isVerified) {
        if (verifyBtn) verifyBtn.style.display = 'none';
        if (badge) badge.style.display = 'inline-flex';
        if (otpRow) otpRow.style.display = 'none';
        if (statusMsg) statusMsg.style.display = 'none';
      } else {
        if (verifyBtn) verifyBtn.style.display = 'inline-block';
        if (badge) badge.style.display = 'none';
        if (statusMsg) statusMsg.style.display = 'none';
      }
    }

    async function caSendEmailVerifyOtp() {
      const emailEl = document.getElementById('ca_email');
      const email = (emailEl.value || '').trim().toLowerCase();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email address first'); return;
      }
      const btn = document.getElementById('caEmailVerifyBtn');
      if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i>'; }
      await sendCustomerOtp(email, () => {
        document.getElementById('caEmailOtpRow').style.display = 'flex';
        document.getElementById('ca_emailOtp').focus();
      });
      if (btn) { btn.disabled = false; btn.innerHTML = 'Verify'; }
    }

    function caVerifyEmailOtp() {
      const code = (document.getElementById('ca_emailOtp').value || '').trim();
      if (!verifyCustomerOtpCode(code)) { showToast('Invalid or expired code'); return; }
      _caEmailVerified = _custOtp.email;
      document.getElementById('caEmailOtpRow').style.display = 'none';
      caCheckEmailStatus();
      showToast('Email verified ✓');
    }

    /* Composes a full address from separate flat/tower/landmark boxes into the single
       string used everywhere else (order messages, address picker, account display). */
    function _composeAddress(flat, tower, landmark) {
      const parts = [flat, tower].filter(Boolean);
      let s = parts.join(', ');
      if (landmark) s += (s ? ' — ' : '') + 'Near ' + landmark;
      return s;
    }

    async function caSaveProfile() {
      const name = (document.getElementById('ca_name').value || '').trim();
      const flat = (document.getElementById('ca_addrFlat').value || '').trim();
      const tower = (document.getElementById('ca_addrTower').value || '').trim();
      const landmark = (document.getElementById('ca_addrLandmark').value || '').trim();
      const address = _composeAddress(flat, tower, landmark);
      const emailInput = (document.getElementById('ca_email').value || '').trim().toLowerCase();
      const errEl = document.getElementById('caStep3Err');
      if (!name) {
        errEl.textContent = 'Please enter your name.'; errEl.style.display = 'block'; return;
      }
      errEl.style.display = 'none';
      const addresses = address ? [{ label: 'Home', flat, tower, landmark, address }] : [];
      const emailVerified = !!(emailInput && _caEmailVerified === emailInput);
      const profile = { name, mobile: _vnMobile, email: emailInput, emailVerified, address, addresses };
      await fsSaveCustomerProfile(profile);
      customerLogin(profile);
      closeModal('customerAuthModal');
      showToast(`Welcome, ${name}!`);
    }

    let _caEditMode = false;
    let _caTargetId = 'caAccountBody'; // which container renderCustomerAccountBody() targets — modal vs inline Account page
    async function openCustomerAccountModal() {
      if (!currentCustomer) { openCustomerAuthModal(); return; }
      _caEditMode = false;
      _caTargetId = 'caAccountBody';
      document.getElementById('customerAccountModal').classList.add('open');
      await renderCustomerAccountBody();
    }

    async function renderCustomerAccountBody() {
      const body = document.getElementById(_caTargetId);
      if (!body || !currentCustomer) return;
      body.innerHTML = `<p style="color:var(--text-muted)"><i class="fa fa-spinner fa-spin"></i> Loading…</p>`;
      const orders = await fsLoadCustomerOrders(currentCustomer.mobile);
      const addresses = currentCustomer.addresses || [];
      if (_caEditMode) {
        _caEditEmailVerified = null;
        const currentEmailVal = (currentCustomer.email || '').trim().toLowerCase();
        const isVerified = !!(currentCustomer.emailVerified && currentEmailVal);
        body.innerHTML = `
      <div class="form-group" style="margin-bottom:10px"><label>Full Name</label><input id="caEdit_name" value="${esc(currentCustomer.name)}"></div>
      <div class="form-group" style="margin-bottom:10px"><label>Mobile Number</label><input value="${esc(currentCustomer.mobile)}" disabled style="opacity:.6"></div>
      <div class="form-group" style="margin-bottom:8px">
        <label>Email (optional)</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input id="caEdit_email" value="${esc(currentCustomer.email || '')}" placeholder="you@email.com" style="flex:1" oninput="caEditCheckEmailStatus()">
          <button type="button" class="btn btn-ghost btn-sm" id="caEditEmailVerifyBtn" onclick="caEditSendEmailVerifyOtp()" style="${isVerified || !currentCustomer.email ? 'display:none;' : ''}">Verify</button>
          <span id="caEditEmailVerifiedBadge" style="${isVerified ? 'display:inline-flex;' : 'display:none;'}align-items:center;gap:4px;color:var(--green-dark);background:var(--green-pale);border:1px solid var(--green);padding:4px 10px;border-radius:6px;font-size:0.78rem;font-weight:600;white-space:nowrap"><i class="fa fa-circle-check"></i> Verified</span>
        </div>
      </div>
      <div id="caEditEmailOtpRow" style="display:none;gap:8px;margin-bottom:10px">
        <input type="text" id="caEdit_emailOtp" maxlength="6" placeholder="Email code" style="flex:1;letter-spacing:.25em;text-align:center">
        <button type="button" class="btn btn-primary btn-sm" onclick="caEditVerifyEmailOtp()">Confirm</button>
      </div>
      <div style="display:flex;gap:8px;justify-content:flex-end">
        <button class="btn btn-ghost" onclick="_caEditMode=false;renderCustomerAccountBody()">Cancel</button>
        <button class="btn btn-primary" onclick="caSaveEditedProfile()"><i class="fa fa-floppy-disk"></i> Save</button>
      </div>`;
        return;
      }
      body.innerHTML = `
    <div style="background:var(--green-pale);border-radius:10px;padding:14px;margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
        <div>
          <div style="font-weight:700;color:var(--green-dark);margin-bottom:4px">${esc(currentCustomer.name)}</div>
          <div style="font-size:.82rem;color:var(--text-muted)"><i class="fa fa-phone" style="width:14px"></i> ${esc(currentCustomer.mobile)}</div>
          <div style="font-size:.82rem;color:var(--text-muted);display:flex;align-items:center;gap:4px;margin-top:2px"><i class="fa fa-envelope" style="width:14px"></i> ${currentCustomer.email ? esc(currentCustomer.email) + (currentCustomer.emailVerified ? ' <span style="display:inline-flex;align-items:center;gap:3px;color:var(--green-dark);background:rgba(46,125,50,0.12);border:1px solid var(--green);padding:2px 8px;border-radius:12px;font-size:0.72rem;font-weight:600;margin-left:4px"><i class="fa fa-circle-check"></i> Verified</span>' : ' <span style="color:var(--danger);font-size:.72rem;margin-left:4px">(unverified)</span>') : '<span style="font-style:italic">Not added</span>'}</div>
        </div>
        <button class="btn btn-ghost btn-sm" onclick="_caEditMode=true;renderCustomerAccountBody()"><i class="fa fa-pen"></i></button>
      </div>
    </div>

    <div style="font-weight:700;color:var(--green-dark);margin-bottom:10px;display:flex;justify-content:space-between;align-items:center">
      <span><i class="fa fa-location-dot"></i> Saved Addresses</span>
      <button class="btn btn-ghost btn-sm" onclick="openAddAddressForm()"><i class="fa fa-plus"></i> Add</button>
    </div>
    <div id="caAddressList" style="margin-bottom:6px">
      ${addresses.length ? addresses.map((a, i) => `
        <div style="border:1px solid var(--border);border-radius:10px;padding:10px 12px;margin-bottom:8px;display:flex;justify-content:space-between;gap:8px;align-items:flex-start">
          <div>
            <div style="font-weight:700;font-size:.7rem;color:var(--green-dark);text-transform:uppercase;letter-spacing:.04em">${esc(a.label || 'Address')}</div>
            <div style="font-size:.84rem;color:var(--text)">${esc(a.address)}</div>
          </div>
          <div style="display:flex;gap:2px;flex-shrink:0">
            <button class="btn btn-ghost btn-sm" onclick="openAddAddressForm(${i})"><i class="fa fa-pen"></i></button>
            <button class="btn btn-ghost btn-sm" onclick="deleteCustomerAddress(${i})"><i class="fa fa-trash" style="color:var(--danger)"></i></button>
          </div>
        </div>`).join('') : '<p style="color:var(--text-muted);font-size:.84rem;margin-bottom:10px">No saved addresses yet.</p>'}
    </div>
    <div id="caAddAddressForm" style="display:none;border:1.5px dashed var(--border);border-radius:10px;padding:12px;margin-bottom:16px">
      <div id="caAddAddressFormTitle" style="font-weight:700;font-size:.8rem;color:var(--green-dark);margin-bottom:10px">Add Address</div>
      <div class="form-group" style="margin-bottom:8px"><label>Label</label><input id="caNewAddrLabel" placeholder="Home, Office…"></div>
      <div class="form-group" style="margin-bottom:8px"><label>Flat / House No. *</label><input id="caNewAddrFlat" placeholder="e.g. A-501"></div>
      <div class="form-group" style="margin-bottom:8px"><label>Tower / Building</label><input id="caNewAddrTower" placeholder="e.g. Tower C"></div>
      <div class="form-group" style="margin-bottom:10px"><label>Landmark (optional)</label><input id="caNewAddrLandmark" placeholder="e.g. Gate 2"></div>
      <div style="display:flex;gap:8px;justify-content:flex-end">
        <button class="btn btn-ghost btn-sm" onclick="cancelAddressForm()">Cancel</button>
        <button class="btn btn-primary btn-sm" onclick="saveNewCustomerAddress()"><i class="fa fa-floppy-disk"></i> Save Address</button>
      </div>
    </div>

    <div style="font-weight:700;color:var(--green-dark);margin-bottom:10px"><i class="fa fa-receipt"></i> My Orders (${orders.length})</div>
    <div style="max-height:280px;overflow-y:auto">
    ${orders.length ? orders.map(o => `
      <div style="border:1px solid var(--border);border-radius:10px;padding:10px 12px;margin-bottom:8px">
        <div style="display:flex;justify-content:space-between;font-size:.85rem;font-weight:700;color:var(--green-dark);gap:8px">
          <span>${esc(o.vendorName)}</span><span style="white-space:nowrap">₹${o.total || 0}</span>
        </div>
        <div style="font-size:.74rem;color:var(--text-muted);margin-top:2px">${(o.items || []).map(it => `${esc(it.name)} x${it.qty}`).join(', ')}</div>
        <div style="font-size:.7rem;color:var(--text-muted);margin-top:4px">${o.ts && o.ts.seconds ? new Date(o.ts.seconds * 1000).toLocaleString() : ''}</div>
      </div>`).join('') : '<p style="color:var(--text-muted);font-size:.85rem">No orders yet.</p>'}
    </div>
  `;
    }

    let _caEditingAddressIdx = null;
    function openAddAddressForm(idx) {
      _caEditingAddressIdx = (idx === undefined || idx === null) ? null : idx;
      const f = document.getElementById('caAddAddressForm');
      if (f) f.style.display = 'block';
      const titleEl = document.getElementById('caAddAddressFormTitle');
      const labelEl = document.getElementById('caNewAddrLabel');
      const flatEl = document.getElementById('caNewAddrFlat');
      const towerEl = document.getElementById('caNewAddrTower');
      const landmarkEl = document.getElementById('caNewAddrLandmark');
      const a = _caEditingAddressIdx !== null ? (currentCustomer.addresses || [])[_caEditingAddressIdx] : null;
      if (titleEl) titleEl.textContent = a ? 'Edit Address' : 'Add Address';
      if (labelEl) labelEl.value = a?.label || '';
      if (flatEl) flatEl.value = a?.flat || '';
      if (towerEl) towerEl.value = a?.tower || '';
      if (landmarkEl) landmarkEl.value = a?.landmark || '';
      flatEl?.focus();
    }

    function cancelAddressForm() {
      _caEditingAddressIdx = null;
      const f = document.getElementById('caAddAddressForm');
      if (f) f.style.display = 'none';
    }

    async function saveNewCustomerAddress() {
      const label = (document.getElementById('caNewAddrLabel').value || '').trim() || 'Address';
      const flat = (document.getElementById('caNewAddrFlat').value || '').trim();
      const tower = (document.getElementById('caNewAddrTower').value || '').trim();
      const landmark = (document.getElementById('caNewAddrLandmark').value || '').trim();
      if (!flat) { showToast('Please enter your flat / house number'); return; }
      const address = _composeAddress(flat, tower, landmark);
      const entry = { label, flat, tower, landmark, address };
      const addresses = [...(currentCustomer.addresses || [])];
      if (_caEditingAddressIdx !== null && addresses[_caEditingAddressIdx]) {
        addresses[_caEditingAddressIdx] = entry;
      } else {
        addresses.push(entry);
      }
      const profile = { ...currentCustomer, addresses, address: currentCustomer.address || address };
      await fsSaveCustomerProfile(profile);
      customerLogin(profile);
      _caEditingAddressIdx = null;
      renderCustomerAccountBody();
      showToast('Address saved');
    }

    async function deleteCustomerAddress(idx) {
      const addresses = (currentCustomer.addresses || []).filter((_, i) => i !== idx);
      const profile = { ...currentCustomer, addresses };
      await fsSaveCustomerProfile(profile);
      customerLogin(profile);
      renderCustomerAccountBody();
      showToast('Address removed');
    }

    let _caEditEmailVerified = null;
    function caEditCheckEmailStatus() {
      const inputEmail = (document.getElementById('caEdit_email')?.value || '').trim().toLowerCase();
      const verifyBtn = document.getElementById('caEditEmailVerifyBtn');
      const badge = document.getElementById('caEditEmailVerifiedBadge');
      const otpRow = document.getElementById('caEditEmailOtpRow');
      if (!inputEmail) {
        if (verifyBtn) verifyBtn.style.display = 'none';
        if (badge) badge.style.display = 'none';
        if (otpRow) otpRow.style.display = 'none';
        return;
      }
      const isVerified = (currentCustomer?.emailVerified && inputEmail === (currentCustomer?.email || '').toLowerCase()) || (_caEditEmailVerified && inputEmail === _caEditEmailVerified);
      if (isVerified) {
        if (verifyBtn) verifyBtn.style.display = 'none';
        if (badge) badge.style.display = 'inline-flex';
        if (otpRow) otpRow.style.display = 'none';
      } else {
        if (verifyBtn) verifyBtn.style.display = 'inline-block';
        if (badge) badge.style.display = 'none';
      }
    }

    async function caEditSendEmailVerifyOtp() {
      const emailEl = document.getElementById('caEdit_email');
      const email = (emailEl.value || '').trim().toLowerCase();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email address first'); return;
      }
      const btn = document.getElementById('caEditEmailVerifyBtn');
      if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i>'; }
      await sendCustomerOtp(email, () => {
        document.getElementById('caEditEmailOtpRow').style.display = 'flex';
        document.getElementById('caEdit_emailOtp').focus();
      });
      if (btn) { btn.disabled = false; btn.innerHTML = 'Verify'; }
    }

    function caEditVerifyEmailOtp() {
      const code = (document.getElementById('caEdit_emailOtp').value || '').trim();
      if (!verifyCustomerOtpCode(code)) { showToast('Invalid or expired code'); return; }
      _caEditEmailVerified = _custOtp.email;
      document.getElementById('caEditEmailOtpRow').style.display = 'none';
      caEditCheckEmailStatus();
      showToast('Email verified ✓');
    }

    async function caSaveEditedProfile() {
      const name = (document.getElementById('caEdit_name').value || '').trim();
      const emailInput = (document.getElementById('caEdit_email').value || '').trim().toLowerCase();
      if (!name) { showToast('Name is required'); return; }
      const emailChanged = emailInput !== (currentCustomer.email || '');
      const emailVerified = emailInput
        ? (emailChanged ? _caEditEmailVerified === emailInput : !!currentCustomer.emailVerified)
        : false;
      const profile = { ...currentCustomer, name, email: emailInput, emailVerified };
      await fsSaveCustomerProfile(profile);
      customerLogin(profile);
      _caEditMode = false;
      _caEditEmailVerified = null;
      renderCustomerAccountBody();
      showToast('Profile updated');
    }

    /* ═══════════ REVIEWS ═══════════ */
    let REVIEWS = {}; // { vendorId: [{id,rating,feedback,customerName,customerFlat,createdAt},...] }

    function renderStarsHtml(rating) {
      let s = ''; for (let i = 1; i <= 5; i++) s += `<span style="color:${i <= Math.round(rating) ? 'var(--gold)' : '#ddd'}">★</span>`; return s;
    }
    function getVendorRating(vendorId) {
      const list = REVIEWS[vendorId] || [];
      if (!list.length) return null;
      const avg = list.reduce((s, r) => s + r.rating, 0) / list.length;
      return { avg: Math.round(avg * 10) / 10, count: list.length };
    }

    async function fsLoadApprovedReviews() {
      if (!db) return;
      try {
        const snap = await db.collection('reviews').where('status', '==', 'approved').get();
        REVIEWS = {};
        snap.docs.forEach(d => {
          const r = { ...d.data(), id: d.id };
          if (!REVIEWS[r.vendorId]) REVIEWS[r.vendorId] = [];
          REVIEWS[r.vendorId].push(r);
        });
      } catch (e) { }
    }

    async function fsSubmitReview(vendorId, vendorName, rating, feedback, customerName, customerFlat) {
      if (!db) throw new Error('No database');
      if (auth && !auth.currentUser) await auth.signInAnonymously().catch(() => { });
      const id = 'rev_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
      await db.collection('reviews').doc(id).set({
        id, vendorId, vendorName, rating, feedback: feedback || '',
        customerName: customerName || 'Anonymous', customerFlat: customerFlat || '',
        status: 'pending', createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

    async function fsModerateReview(reviewId, status) {
      if (!db) return;
      await db.collection('reviews').doc(reviewId).update({
        status, moderatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

    async function fsLoadAllReviews() {
      if (!db) return [];
      try {
        const snap = await db.collection('reviews').get();
        return snap.docs.map(d => ({ ...d.data(), id: d.id }))
          .sort((a, b) => { const ta = a.createdAt?.seconds || 0, tb = b.createdAt?.seconds || 0; return tb - ta; });
      } catch (e) { return []; }
    }

    /* ── Review UI ── */
    let _reviewVendorId = null, _reviewStar = 5;
    const STAR_LABELS = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Very Good', 5: 'Excellent' };

    function hoverStar(v) {
      const stars = document.querySelectorAll('#starPicker span');
      stars.forEach((s, i) => { s.style.color = (v > 0 ? i < v : i < _reviewStar) ? 'var(--gold)' : '#ddd'; });
    }
    function setReviewStar(v) {
      _reviewStar = v;
      hoverStar(0);
      document.getElementById('starLabel').textContent = STAR_LABELS[v] || '';
    }

    function openReviewModal() {
      if (!_menuVendor) return;
      _reviewVendorId = _menuVendor.id;
      _reviewStar = 5;
      document.getElementById('reviewVendorName').textContent = _menuVendor.venture;
      ['rv_name', 'rv_flat', 'rv_feedback'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
      const st = document.getElementById('rv_status'); if (st) { st.style.display = 'none'; st.textContent = ''; }
      const btn = document.getElementById('rv_submitBtn'); if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa fa-paper-plane"></i> Submit Review'; }
      hoverStar(0); setReviewStar(5);
      document.getElementById('reviewModal').classList.add('open');
    }

    async function submitReview() {
      const name = (document.getElementById('rv_name').value || '').trim();
      const flat = (document.getElementById('rv_flat').value || '').trim();
      const feedback = (document.getElementById('rv_feedback').value || '').trim();
      const st = document.getElementById('rv_status');
      const btn = document.getElementById('rv_submitBtn');
      if (!name) { st.textContent = 'Please enter your name.'; st.style.background = '#ffeaea'; st.style.color = 'var(--danger)'; st.style.display = 'block'; return; }
      if (!feedback) { st.textContent = 'Please enter your feedback.'; st.style.background = '#ffeaea'; st.style.color = 'var(--danger)'; st.style.display = 'block'; return; }
      btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Submitting…';
      st.style.display = 'none';
      try {
        const vendor = getBrowseData().find(d => d.id === _reviewVendorId);
        await fsSubmitReview(_reviewVendorId, vendor?.venture || '', _reviewStar, feedback, name, flat);
        st.textContent = 'Thank you! Your review has been submitted and is awaiting admin approval.';
        st.style.background = '#eaffea'; st.style.color = 'var(--green-dark)'; st.style.display = 'block';
        btn.innerHTML = '<i class="fa fa-check"></i> Submitted';
        setTimeout(() => closeModal('reviewModal'), 3000);
      } catch (e) {
        st.textContent = 'Failed to submit: ' + e.message; st.style.background = '#ffeaea'; st.style.color = 'var(--danger)'; st.style.display = 'block';
        btn.disabled = false; btn.innerHTML = '<i class="fa fa-paper-plane"></i> Submit Review';
      }
    }

    function _renderMenuReviews(vendorId) {
      const list = REVIEWS[vendorId] || [];
      const ratingBar = document.getElementById('menuRatingBar');
      const reviewsList = document.getElementById('menuReviewsList');
      if (!reviewsList) return;
      // Rating bar
      if (ratingBar) {
        const info = getVendorRating(vendorId);
        ratingBar.style.display = info ? 'flex' : 'none';
        if (info) ratingBar.innerHTML = `<span style="display:inline-flex;align-items:center;gap:5px">${renderStarsHtml(info.avg)} <strong style="color:var(--green-dark)">${info.avg}</strong> <span style="color:var(--text-muted);font-size:.78rem">(${info.count} review${info.count > 1 ? 's' : ''})</span></span>`;
      }
      if (!list.length) {
        reviewsList.innerHTML = `<div style="text-align:center;padding:16px 0;color:var(--text-muted);font-size:.83rem">No reviews yet. Be the first to review!</div>`;
        return;
      }
      reviewsList.innerHTML = list.map(r => {
        const date = r.createdAt?.seconds ? new Date(r.createdAt.seconds * 1000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
        return `<div style="border:1px solid var(--border);border-radius:10px;padding:10px 13px;margin-bottom:8px;background:var(--cream)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
        <span style="font-size:.82rem;font-weight:700;color:var(--green-dark)">${r.customerName}${r.customerFlat ? ` · Flat ${r.customerFlat}` : ''}</span>
        <span style="font-size:.72rem;color:var(--text-muted)">${date}</span>
      </div>
      <div style="margin-bottom:5px;font-size:.95rem">${renderStarsHtml(r.rating)} <span style="font-size:.76rem;color:var(--gold);font-weight:600">${STAR_LABELS[r.rating] || ''}</span></div>
      <div style="font-size:.82rem;color:var(--text);line-height:1.5">${r.feedback}</div>
    </div>`;
      }).join('');
    }

    async function renderAdminReviews(c) {
      c.innerHTML = `<div class="s-card"><div class="s-card-title"><i class="fa fa-star" style="color:var(--gold)"></i> Customer Reviews — Moderation</div><div style="text-align:center;padding:30px;color:var(--text-muted)"><i class="fa fa-spinner fa-spin" style="font-size:1.5rem"></i><p>Loading reviews…</p></div></div>`;
      const all = await fsLoadAllReviews();
      let _filter = 'pending';
      function _renderTable() {
        const filtered = _filter === 'all' ? all : all.filter(r => r.status === _filter);
        const tbody = document.getElementById('reviewsTableBody');
        if (!tbody) return;
        tbody.innerHTML = filtered.length ? filtered.map(r => {
          const vendor = DATA.find(d => d.id === r.vendorId);
          const date = r.createdAt?.seconds ? new Date(r.createdAt.seconds * 1000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—';
          const statusBadge = r.status === 'approved' ? `<span style="color:var(--green);font-weight:700">✓ Approved</span>` : r.status === 'rejected' ? `<span style="color:var(--danger);font-weight:700">✕ Rejected</span>` : `<span style="color:#b8860b;font-weight:700">⏳ Pending</span>`;
          const actions = r.status === 'pending'
            ? `<button class="btn btn-sm btn-primary" onclick="moderateReview('${r.id}','approved')"><i class="fa fa-check"></i> Approve</button> <button class="btn btn-sm btn-danger" onclick="moderateReview('${r.id}','rejected')"><i class="fa fa-times"></i> Reject</button>`
            : `<button class="btn btn-sm btn-ghost" style="font-size:.72rem" onclick="moderateReview('${r.id}','${r.status === 'approved' ? 'rejected' : 'approved'}')">${r.status === 'approved' ? 'Revoke' : 'Re-approve'}</button>`;
          return `<tr>
        <td><strong style="font-size:.82rem">${vendor?.venture || r.vendorName || '—'}</strong><br><span style="font-size:.72rem;color:var(--text-muted)">${vendor?.cat || ''}</span></td>
        <td style="white-space:nowrap">${renderStarsHtml(r.rating)} <span style="font-size:.78rem;color:var(--gold)">${r.rating}/5</span></td>
        <td style="font-size:.78rem">${r.customerName}<br>${r.customerFlat ? 'Flat ' + r.customerFlat : ''}</td>
        <td style="font-size:.78rem;max-width:200px">${r.feedback}</td>
        <td style="font-size:.72rem">${date}</td>
        <td>${statusBadge}</td>
        <td style="white-space:nowrap">${actions}</td>
      </tr>`;
        }).join('') : `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:20px">No ${_filter} reviews</td></tr>`;
        // Update badge
        const pending = all.filter(r => r.status === 'pending').length;
        const badge = document.getElementById('pendingReviewsBadge');
        if (badge) { badge.textContent = pending || ''; badge.style.display = pending ? '' : 'none'; }
      }
      const pending = all.filter(r => r.status === 'pending').length;
      const approved = all.filter(r => r.status === 'approved').length;
      const rejected = all.filter(r => r.status === 'rejected').length;
      c.innerHTML = `<div class="s-card">
    <div class="s-card-title"><i class="fa fa-star" style="color:var(--gold)"></i> Customer Reviews — Moderation</div>
    <div style="display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap">
      <button class="btn btn-sm btn-primary" onclick="document.querySelectorAll('.rv-filter').forEach(b=>b.classList.remove('active'));this.classList.add('active');_rvFilter('pending')"><i class="fa fa-clock"></i> Pending (${pending})</button>
      <button class="btn btn-sm btn-ghost rv-filter" onclick="document.querySelectorAll('.rv-filter').forEach(b=>b.classList.remove('active'));this.classList.add('active');_rvFilter('approved')"><i class="fa fa-check"></i> Approved (${approved})</button>
      <button class="btn btn-sm btn-ghost rv-filter" onclick="document.querySelectorAll('.rv-filter').forEach(b=>b.classList.remove('active'));this.classList.add('active');_rvFilter('rejected')"><i class="fa fa-times"></i> Rejected (${rejected})</button>
      <button class="btn btn-sm btn-ghost rv-filter" onclick="document.querySelectorAll('.rv-filter').forEach(b=>b.classList.remove('active'));this.classList.add('active');_rvFilter('all')"><i class="fa fa-list"></i> All (${all.length})</button>
    </div>
    <div style="overflow-x:auto">
    <table class="menu-table" style="font-size:.82rem">
      <thead><tr><th>Vendor</th><th>Rating</th><th>Customer</th><th>Feedback</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
      <tbody id="reviewsTableBody"></tbody>
    </table>
    </div>
  </div>`;
      window._rvFilter = function (f) { _filter = f; _renderTable(); };
      window.moderateReview = async function (id, status) {
        try {
          await fsModerateReview(id, status);
          const r = all.find(x => x.id === id);
          if (r) { r.status = status; }
          if (status === 'approved') {
            await fsLoadApprovedReviews();
          }
          _renderTable();
          showToast(status === 'approved' ? 'Review approved ✓' : 'Review rejected');
        } catch (e) { showToast('Error: ' + e.message); }
      };
      _renderTable();
    }

    /* ═══════════ ADMIN: BUSINESS REGISTRATION REQUESTS ═══════════ */
    let _srqAll = [];
    async function renderAdminBusinessRequests(c) {
      c.innerHTML = `<div class="s-card"><div class="s-card-title"><i class="fa fa-user-plus" style="color:var(--green)"></i> Business Registration Requests</div><div style="text-align:center;padding:30px;color:var(--text-muted)"><i class="fa fa-spinner fa-spin" style="font-size:1.5rem"></i><p>Loading requests…</p></div></div>`;
      _srqAll = await fsLoadBusinessRequests();
      let _filter = 'pending';

      function _fmtDate(ts) { return ts?.seconds ? new Date(ts.seconds * 1000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'; }

      function _docLinks(r) {
        const links = [];
        if (r.addressProofDocUrl) links.push(`<a href="${r.addressProofDocUrl}" target="_blank" class="btn btn-sm btn-ghost" title="${esc(r.addressProofType || 'Address Proof')}"><i class="fa fa-file-contract"></i> Address Proof${r.addressProofType ? ' (' + esc(r.addressProofType) + ')' : ''}</a>`);
        if (r.panDocUrl) links.push(`<a href="${r.panDocUrl}" target="_blank" class="btn btn-sm btn-ghost"><i class="fa fa-id-card"></i> PAN</a>`);
        if (r.aadhaarDocUrl) links.push(`<a href="${r.aadhaarDocUrl}" target="_blank" class="btn btn-sm btn-ghost"><i class="fa fa-id-badge"></i> Aadhaar</a>`);
        if (r.fssaiDocUrl) links.push(`<a href="${r.fssaiDocUrl}" target="_blank" class="btn btn-sm btn-ghost"><i class="fa fa-certificate"></i> FSSAI</a>`);
        return links.join(' ') || '—';
      }

      window._srqRenderTable = _renderTable;
      function _renderTable() {
        const filtered = _filter === 'all' ? _srqAll : _srqAll.filter(r => r.status === _filter);
        const tbody = document.getElementById('srqTableBody');
        if (!tbody) return;
        tbody.innerHTML = filtered.length ? filtered.map(r => {
          const statusBadge = r.status === 'approved' ? `<span style="color:var(--green);font-weight:700">✓ Approved</span>`
            : r.status === 'rejected' ? `<span style="color:var(--danger);font-weight:700">✕ Rejected</span>`
              : `<span style="color:#b8860b;font-weight:700">⏳ Pending</span>`;

          const isActive = r.active !== false;
          const toggleActiveBtn = isActive
            ? `<button class="btn btn-sm" onclick="toggleBusinessActive('${r.requestId}')" style="background:#e8f5e9;color:#2e7d32;border:1px solid #a5d6a7;font-weight:600;white-space:nowrap;padding:4px 10px;cursor:pointer" title="Click to Deactivate"><i class="fa fa-toggle-on" style="font-size:1.05rem"></i> Active</button>`
            : `<button class="btn btn-sm" onclick="toggleBusinessActive('${r.requestId}')" style="background:#ffebee;color:#c62828;border:1px solid #ef9a9a;font-weight:600;white-space:nowrap;padding:4px 10px;cursor:pointer" title="Click to Activate"><i class="fa fa-toggle-off" style="font-size:1.05rem"></i> Deactivated</button>`;

          const deleteBtn = `<button class="btn btn-sm btn-ghost" onclick="deleteBusinessRequest('${r.requestId}')" title="Delete Request" style="color:var(--danger)"><i class="fa fa-trash"></i> Delete</button>`;
          const deleteIconBtn = `<button class="btn btn-sm btn-ghost" onclick="deleteBusinessRequest('${r.requestId}')" title="Delete Request" style="color:var(--danger);padding:4px 8px"><i class="fa fa-trash"></i></button>`;
          const actions = r.status === 'pending'
            ? `<div style="display:flex;gap:4px;align-items:center"><button class="btn btn-sm btn-primary" onclick="approveBusinessRequest('${r.requestId}')"><i class="fa fa-check"></i> Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBusinessRequest('${r.requestId}')"><i class="fa fa-times"></i> Reject</button> ${deleteIconBtn}</div>`
            : (r.status === 'rejected'
              ? `<div style="display:flex;gap:4px;align-items:center">${deleteBtn} <span style="font-size:.75rem;color:var(--text-muted);margin-left:4px">${esc(r.rejectionReason || '')}</span></div>`
              : deleteBtn);
          const paidBadge = r.paymentId
            ? `<span style="background:#e6f4ea;color:#137333;font-weight:700;font-size:.7rem;padding:2px 6px;border-radius:8px">✓ Paid ₹${r.paidAmount || 499} (${(r.paidPlan || 'monthly').toUpperCase()})<br><span style="font-size:.65rem;color:var(--text-muted)">ID: ${esc(r.paymentId)}</span></span>`
            : `<span style="background:#fff3e0;color:#e65100;font-weight:700;font-size:.7rem;padding:2px 6px;border-radius:8px">Unpaid</span>`;

          return `<tr>
        <td><strong style="font-size:.85rem">${esc(r.venture)}</strong><br><span style="font-size:.72rem;color:var(--text-muted)">${esc(r.cat || '')}</span></td>
        <td style="font-size:.78rem"><i class="fa fa-building" style="color:var(--green)"></i> ${esc(r.society || '—')}</td>
        <td style="font-size:.78rem">${esc(r.email)}<br>${esc(r.mobile || '')}</td>
        <td style="font-size:.78rem">${esc(r.contact || '')}<br>Flat ${esc(r.flat || '—')}</td>
        <td style="font-size:.75rem">${paidBadge}</td>
        <td style="font-size:.72rem">${_fmtDate(r.createdAt)}</td>
        <td style="white-space:nowrap">${_docLinks(r)}</td>
        <td>${statusBadge}</td>
        <td>${toggleActiveBtn}</td>
        <td style="white-space:nowrap">${actions}</td>
      </tr>`;
        }).join('') : `<tr><td colspan="9" style="text-align:center;color:var(--text-muted);padding:20px">No ${_filter} requests</td></tr>`;
        const pending = _srqAll.filter(r => r.status === 'pending').length;
        const badge = document.getElementById('pendingBusinessReqBadge');
        if (badge) { badge.textContent = pending || ''; badge.style.display = pending ? '' : 'none'; }
      }

      const pending = _srqAll.filter(r => r.status === 'pending').length;
      const approved = _srqAll.filter(r => r.status === 'approved').length;
      const rejected = _srqAll.filter(r => r.status === 'rejected').length;
      c.innerHTML = `<div class="s-card">
    <div class="s-card-title"><i class="fa fa-user-plus" style="color:var(--green)"></i> Business Registration Requests</div>
    <p style="font-size:.8rem;color:var(--text-muted);margin-bottom:12px">Review KYC documents (click to view/download) before approving. Approving creates a live vendor listing and a business login account, then emails the applicant.</p>
    <div style="display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap">
      <button class="btn btn-sm btn-primary srq-filter" onclick="_srqSetFilter('pending',this)">Pending (${pending})</button>
      <button class="btn btn-sm btn-ghost srq-filter" onclick="_srqSetFilter('approved',this)">Approved (${approved})</button>
      <button class="btn btn-sm btn-ghost srq-filter" onclick="_srqSetFilter('rejected',this)">Rejected (${rejected})</button>
      <button class="btn btn-sm btn-ghost srq-filter" onclick="_srqSetFilter('all',this)">All (${_srqAll.length})</button>
    </div>
    <div style="overflow-x:auto">
    <table class="menu-table" style="font-size:.82rem">
      <thead><tr><th>Business</th><th>Society</th><th>Applicant</th><th>Contact</th><th>Payment</th><th>Submitted</th><th>Documents</th><th>Status</th><th>Account Status</th><th>Action</th></tr></thead>
      <tbody id="srqTableBody"></tbody>
    </table>
    </div>
  </div>`;
      window._srqSetFilter = function (f, btn) {
        _filter = f;
        document.querySelectorAll('.srq-filter').forEach(b => b.classList.replace('btn-primary', 'btn-ghost'));
        btn.classList.replace('btn-ghost', 'btn-primary');
        _renderTable();
      };
      _renderTable();
    }

    async function approveBusinessRequest(requestId) {
      const req = _srqAll.find(r => r.requestId === requestId); if (!req) return;
      const confirmed = await confirmAction({
        title: `Approve "${req.venture}"?`,
        message: `This creates a live listing in ${req.society || 'the selected society'} and a business login for ${req.email}.`,
        warning: 'The applicant will receive an email confirmation with their login credentials.',
        confirmText: 'Approve Business',
        cancelText: 'Cancel',
        danger: false
      });
      if (!confirmed) return;
      if (!secondaryAuth || !secondaryDb) { showToast('Firebase not configured'); return; }
      try {
        showToast('Approving…');
        let cred = null;
        try {
          cred = await secondaryAuth.createUserWithEmailAndPassword(req.email, req.password);
        } catch (authErr) {
          if (authErr.code === 'auth/email-already-in-use') {
            try {
              cred = await secondaryAuth.signInWithEmailAndPassword(req.email, req.password);
            } catch (signInErr) {
              const accSnap = await db.collection('accounts').where('email', '==', req.email).get();
              let existingUid = accSnap.empty ? null : accSnap.docs[0].id;
              if (!existingUid) {
                existingUid = req.assignedUid || ('u_' + Date.now());
              }
              cred = { user: { uid: existingUid } };
              try { await secondaryAuth.sendPasswordResetEmail(req.email); } catch (resetErr) {}
            }
          } else {
            throw authErr;
          }
        }

        const vendorId = 'u' + Date.now();
        const uid = (cred && cred.user) ? cred.user.uid : (req.assignedUid || ('u_' + Date.now()));

        const accountData = {
          email: req.email, displayName: req.venture, vendorId, role: 'business',
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        // Write accounts doc using secondaryDb if secondaryAuth is authenticated as uid
        // (so request.auth.uid == uid in Firestore Security Rules passes), or fallback to db.
        try {
          if (secondaryAuth.currentUser && secondaryAuth.currentUser.uid === uid) {
            await secondaryDb.collection('accounts').doc(uid).set(accountData, { merge: true });
            try { await secondaryAuth.signOut(); } catch(e){}
          } else if (uid) {
            await db.collection('accounts').doc(uid).set(accountData, { merge: true });
          }
        } catch (accErr) {
          console.warn('Accounts doc write skipped or disallowed by security rules:', accErr);
        }

        // Clean up any old vendor listings for this email before creating new one
        const oldVendors = DATA.filter(d => (d.ownerUid === uid || (d.contactEmail && d.contactEmail === req.email)));
        for (const oldV of oldVendors) {
          try { await db.collection('vendors').doc(oldV.id).delete(); } catch(e){}
          const idx = DATA.findIndex(d => d.id === oldV.id);
          if (idx !== -1) DATA.splice(idx, 1);
        }

        // Create the live vendor listing with ACTIVE subscription
        const durationDays = (req.paidPlan === 'annual') ? 365 : 30;
        const now = new Date();
        const expiryDate = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000);

        const vendorObj = {
          id: vendorId, cat: req.cat, subCat: req.subCat || '', venture: req.venture, speciality: req.speciality || '',
          desc: req.desc || '', contact: req.contact || '', flat: req.flat || '', phone: req.phone || '',
          whatsapp: req.whatsapp || '', instagram: req.instagram || '', video: req.video || '', url: req.url || '',
          image: req.image || '', society: req.society || 'Prateek Laurel', menu: req.menu || [],
          detailsText: req.detailsText || '', detailsImage: req.detailsImage || '',
          ownerUid: uid, contactEmail: req.email, active: true,
          subscriptionStatus: 'active',
          subscriptionPlan: req.paidPlan || 'monthly',
          subscriptionExpiry: expiryDate.toISOString(),
          lastPaymentId: req.paymentId || 'MANDATE_AUTHORIZED',
          lastPaymentDate: req.paymentDate || now.toISOString(),
          lastPaymentAmount: req.paidAmount || (req.paidPlan === 'annual' ? 3999 : 499)
        };
        await fsSaveVendor(vendorObj);
        const existingIdx = DATA.findIndex(d => d.id === vendorId);
        if (existingIdx !== -1) DATA[existingIdx] = vendorObj; else DATA.push(vendorObj);
        saveData(DATA);

        // Mark the request approved and clear the temporarily-stored password.
        await db.collection('business_requests').doc(requestId).set({
          status: 'approved', password: firebase.firestore.FieldValue.delete(),
          assignedVendorId: vendorId, assignedUid: uid,
          reviewedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        req.status = 'approved';

        const emailResult = await _sendBusinessStatusEmail(req.email, req.venture, 'approved');
        renderAll();
        renderAdminTab('businessreq');
        showToast(emailResult.ok
          ? `${req.venture} approved — listing is live ✓ Business notified by email.`
          : `${req.venture} approved — listing is live ✓ ⚠️ Business email failed to send: ${emailResult.reason}`);
      } catch (e) {
        console.error('Approval failed:', e);
        showToast('Approval failed: ' + e.message);
      }
    }

    async function rejectBusinessRequest(requestId) {
      const req = _srqAll.find(r => r.requestId === requestId); if (!req) return;
      const res = await confirmAction({
        title: `Reject "${req.venture}"?`,
        message: `Are you sure you want to reject the business application for ${req.email}?`,
        warning: 'The applicant will be notified of the rejection.',
        showInput: true,
        inputLabel: 'Reason for rejection (optional, shown to applicant):',
        inputPlaceholder: 'e.g. Incomplete address proof or invalid documents',
        confirmText: 'Reject Application',
        cancelText: 'Cancel',
        danger: true
      });
      if (!res) return; // Closed or cancelled — DO NOT REJECT OR REMOVE DATA
      const reason = (typeof res === 'object' && res.value !== undefined) ? res.value : '';
      try {
        await db.collection('business_requests').doc(requestId).set({
          status: 'rejected', rejectionReason: reason, password: firebase.firestore.FieldValue.delete(),
          reviewedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        req.status = 'rejected'; req.rejectionReason = reason;
        const emailResult = await _sendBusinessStatusEmail(req.email, req.venture, 'rejected', reason);
        renderAdminTab('businessreq');
        showToast(emailResult.ok ? 'Application rejected — applicant notified by email.' : `Application rejected — ⚠️ notification email failed: ${emailResult.reason}`);
      } catch (e) { showToast('Error: ' + e.message); }
    }

    async function deleteBusinessRequest(requestId) {
      const req = _srqAll.find(r => r.requestId === requestId);
      if (!req) return;

      const res = await confirmAction({
        title: 'Delete Business Request?',
        message: `Are you sure you want to permanently delete the business request for "${req.venture}" (${req.email})?`,
        warning: 'This action will permanently remove this registration request.',
        confirmText: 'Delete Request',
        cancelText: 'Cancel',
        danger: true,
        showInput: true,
        inputRequired: true,
        inputLabel: 'Reason for Deletion * (Compulsory):',
        inputPlaceholder: 'Enter compulsory reason why this business request is being removed…'
      });

      if (!res || typeof res !== 'object' || !res.confirmed) return;
      const deletionReason = (res.value || '').trim();

      if (!deletionReason) {
        showToast('Deletion reason is compulsory.');
        return;
      }

      try {
        const adminEmail = auth.currentUser ? auth.currentUser.email : 'Admin';
        const adminUid = auth.currentUser ? auth.currentUser.uid : 'admin';
        const adminMobile = localStorage.getItem('hb_admin_verified_mobile')
          || (auth.currentUser ? auth.currentUser.phoneNumber : '')
          || (_adminNumbers && _adminNumbers()[0])
          || 'Not provided';

        const logData = {
          type: 'business_request_deletion',
          requestId: requestId,
          targetName: req.venture || req.name,
          targetEmail: req.email,
          targetPhone: req.phone || req.mobile,
          reason: deletionReason,
          deletedByAdminEmail: adminEmail,
          deletedByAdminUid: adminUid,
          deletedByAdminMobile: adminMobile,
          performedBy: adminEmail,
          adminMobile: adminMobile,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          createdAt: new Date().toISOString()
        };

        if (db) {
          try {
            await db.collection('deletion_history').add(logData);
            await db.collection('admin_deletion_logs').add(logData);
            await db.collection('business_requests').doc(requestId).delete();
          } catch (e) {
            console.warn('Error recording deletion log:', e);
          }
        }

        const localLogs = JSON.parse(localStorage.getItem('hb_admin_deletion_logs') || '[]');
        localLogs.unshift(logData);
        localStorage.setItem('hb_admin_deletion_logs', JSON.stringify(localLogs));

        _srqAll = _srqAll.filter(r => r.requestId !== requestId);
        renderAdminTab('businessreq');
        showToast(`Business request for "${req.venture}" deleted & logged in history ✓`);
      } catch (e) {
        showToast('Error deleting request: ' + e.message);
      }
    }

    async function toggleBusinessActive(requestId) {
      const req = _srqAll.find(r => r.requestId === requestId);
      if (!req) return;
      const newActive = req.active === false ? true : false;
      req.active = newActive;

      try {
        showToast('Updating status…');
        if (db) {
          await db.collection('business_requests').doc(requestId).set({ active: newActive }, { merge: true });
        }

        let uid = req.assignedUid;
        if (!uid && db) {
          try {
            const accSnap = await db.collection('accounts').get();
            const accDoc = accSnap.docs.find(d => (d.data().email || '').trim().toLowerCase() === (req.email || '').trim().toLowerCase());
            if (accDoc) { uid = accDoc.id; req.assignedUid = uid; }
          } catch (e) { }
        }

        if (uid && db) {
          try {
            await db.collection('accounts').doc(uid).set({ active: newActive }, { merge: true });
          } catch (accErr) {
            console.warn('Could not update accounts doc status in Firestore:', accErr);
          }
        }

        let vendorId = req.assignedVendorId;
        if (!vendorId) {
          const vMatch = DATA.find(d => (uid && d.ownerUid === uid) || (d.venture && d.venture === req.venture));
          if (vMatch) { vendorId = vMatch.id; req.assignedVendorId = vendorId; }
        }

        if (vendorId) {
          if (db) {
            try {
              await db.collection('vendors').doc(vendorId).set({ active: newActive }, { merge: true });
            } catch (vErr) {
              console.warn('Could not update vendors doc status in Firestore:', vErr);
            }
          }
          const v = DATA.find(d => d.id === vendorId);
          if (v) { v.active = newActive; saveData(DATA); }
        }

        if (currentBusiness && ((uid && currentBusiness.uid === uid) || currentBusiness.email === req.email)) {
          currentBusiness.active = newActive;
        }

        renderAll();
        if (typeof window._srqRenderTable === 'function') window._srqRenderTable();
        showToast(`"${req.venture}" account is now ${newActive ? 'Active ✓' : 'Deactivated ✕'}`);
      } catch (e) {
        showToast('Error updating status: ' + e.message);
      }
    }

    /* ═══════════ DATA (localStorage + Firestore) ═══════════ */
    function loadData() {
      try {
        const s = localStorage.getItem('pl_dir_v3');
        if (s) { const c = JSON.parse(s); if (Array.isArray(c) && c.length) return c; }
        return JSON.parse(JSON.stringify(SEED));
      } catch (e) { return JSON.parse(JSON.stringify(SEED)); }
    }
    function loadImages() {
      try { const s = localStorage.getItem('pl_imgs_v3'); return s ? JSON.parse(s) : {}; } catch (e) { return {}; }
    }
    function saveData(d) { try { localStorage.setItem('pl_dir_v3', JSON.stringify(d)); } catch (e) { } }

    let DATA = loadData();
    let IMGS = loadImages();
    /* Categories with zero real (Firestore-backed) vendors fall back to the built-in
       demo listings so customer browsing doesn't look empty before local businesses sign
       up; any category with at least one real vendor shows only real ones (no mixing). */
    function getBrowseData() {
    function isVendorPubliclyVisible(v) {
      if (!v) return false;
      if (v.active === false) return false;
      const status = v.subscriptionStatus;
      if (status) {
        if (status === 'CANCELLED_BY_VENDOR' || status === 'CANCELLED_BY_ADMIN' || status === 'EXPIRED' || status === 'FETCH_FAILED' || status === 'PENDING_APPROVAL') {
          return false;
        }
        if (status === 'active' && v.subscriptionExpiry && new Date(v.subscriptionExpiry) < new Date()) {
          v.subscriptionStatus = 'expired';
          saveData(DATA);
          return false;
        }
      }
      return true;
    }

    function getBrowseData() {
      const activeData = DATA.filter(d => isVendorPubliclyVisible(d));
      const realCats = new Set(activeData.map(d => d.cat));
      return activeData.concat(SEED.filter(s => !realCats.has(s.cat)));
    }

    /* ═══════════ BUSINESS AUTH ═══════════ */
    function setupBusinessAuth() {
      if (!auth) return;
      auth.onAuthStateChanged(async user => {
        if (user) {
          // Admin signs into Firebase Auth too — don't treat them as a business
          if (isAdmin) return;
          try {
            const doc = await db.collection('accounts').doc(user.uid).get();
            if (doc.exists) {
              currentBusiness = { uid: user.uid, ...doc.data() };
              // Reload vendors so business panel has fresh DATA before rendering
              if (FB_READY && db) {
                try {
                  const vendors = await fsLoadVendors();
                  if (vendors && vendors.length) { DATA = vendors; saveData(DATA); }
                } catch (e) { }
              }
              showToast(`Welcome, ${currentBusiness.displayName}!`);
              updatePanelTabs();
              switchPanel('business');
            } else {
              // No account doc — could be admin. Never sign out silently.
              // Admin session is protected by isAdmin flag restored from sessionStorage.
            }
          } catch (e) { console.warn('Auth state error:', e); }
        } else {
          if (currentBusiness) { currentBusiness = null; updatePanelTabs(); }
        }
      });
    }

    async function businessLogin(email, password) {
      if (!auth) { showToast('Firebase not configured yet'); return; }
      const errEl = document.getElementById('loginErr');
      try {
        const cred = await auth.signInWithEmailAndPassword(email, password);
        if (db) {
          const doc = await db.collection('accounts').doc(cred.user.uid).get();
          if (!doc.exists && !isAdmin) {
            await auth.signOut();
            currentBusiness = null;
            if (errEl) {
              errEl.textContent = 'Invalid email or password';
              errEl.style.display = 'block';
            }
            showToast('Invalid email or password');
            return;
          }
        }
        closeModal('loginModal');
      } catch (e) {
        if (errEl) {
          errEl.textContent = 'Invalid email or password';
          errEl.style.display = 'block';
        }
      }
    }

    async function businessForgotPassword() {
      if (!auth) { showToast('Firebase not configured yet'); return; }
      const email = (document.getElementById('businessEmailInput').value || '').trim();
      if (!email || !email.includes('@')) {
        document.getElementById('loginErr').textContent = 'Enter your email above first, then tap "Forgot password?"';
        document.getElementById('loginErr').style.display = 'block';
        document.getElementById('businessEmailInput').focus();
        return;
      }
      try {
        await auth.sendPasswordResetEmail(email);
        document.getElementById('loginErr').style.display = 'none';
        showToast(`Password reset link sent to ${email} ✓`);
      } catch (e) {
        document.getElementById('loginErr').textContent = 'Could not send reset email: ' + e.message;
        document.getElementById('loginErr').style.display = 'block';
      }
    }

    async function businessLogout() {
      if (auth) await auth.signOut();
      currentBusiness = null;
      updatePanelTabs();
      switchPanel('customer');
      showToast('Logged out');
    }

    function updatePanelTabs() {
      const businessTab = document.getElementById('businessPanelTab');
      const adminTab = document.getElementById('adminPanelTab');
      const hdrRight = document.getElementById('hdrRight');
      if (businessTab) businessTab.style.display = currentBusiness ? 'inline-flex' : 'none';
      if (adminTab) adminTab.style.display = isAdmin ? 'inline-flex' : 'none';
      // Show Browse tab and the whole tab bar only when other tabs are visible
      const hasOtherTabs = currentBusiness || isAdmin;
      const browseTab = document.getElementById('browseTab');
      const panelTabs = document.getElementById('panelTabs');
      if (browseTab) browseTab.style.display = hasOtherTabs ? 'inline-flex' : 'none';
      if (panelTabs) panelTabs.style.display = hasOtherTabs ? 'flex' : 'none';
      const customerBtn = currentCustomer
        ? `<button class="btn btn-header-outline btn-sm" onclick="openCustomerAccountModal()"><i class="fa fa-circle-user"></i><span class="hdr-label"> ${(currentCustomer.name || 'My Account').split(' ')[0]}</span></button>`
        : `<button class="btn btn-header-outline btn-sm" onclick="openCustomerAuthModal()"><i class="fa fa-user"></i><span class="hdr-label"> Login / Sign Up</span></button>`;
      if (hdrRight) {
        if (currentBusiness) {
          hdrRight.innerHTML = `${customerBtn}<span class="hdr-label" style="font-size:.78rem;color:var(--text-muted)">${currentBusiness.displayName}</span>
        <button class="btn btn-sm btn-header-outline" onclick="businessLogout()"><i class="fa fa-sign-out-alt"></i><span class="hdr-label"> Logout</span></button>`;
        } else if (isAdmin) {
          hdrRight.innerHTML = `${customerBtn}<span class="admin-badge hdr-label">Admin</span>
        <button class="btn btn-sm btn-header-outline" onclick="exitAdmin()"><i class="fa fa-sign-out-alt"></i><span class="hdr-label"> Exit Admin</span></button>`;
        } else {
          hdrRight.innerHTML = customerBtn;
        }
      }
    }

    /* ═══════════ SEARCH ═══════════ */
    function _searchHaystack(item) {
      const menuText = (item.menu || []).map(m => `${m.name || ''} ${m.desc || ''}`).join(' ');
      return [item.venture, item.speciality, item.desc, item.contact, item.flat, item.cat, menuText]
        .filter(Boolean).join(' ').toLowerCase();
    }
    function _queryWords(q) {
      return (q || '').toLowerCase().trim().split(/\s+/).filter(Boolean);
    }
    function itemMatchesQuery(item, q) {
      const words = _queryWords(q);
      if (!words.length) return true;
      const hay = _searchHaystack(item);
      return words.every(w => hay.includes(w));
    }

    /* ═══════════ RENDER ═══════════ */
    function renderAll() {
      const q = (document.getElementById('searchInput').value || '').trim();
      const grid = document.getElementById('mainGrid');
      if (!grid) return;
      grid.innerHTML = '';
      let total = 0;
      if (!selectedSociety) {
        grid.innerHTML = `<div class="empty-state"><i class="fa fa-map-location-dot"></i><p>Tap a society above to browse businesses near you.</p></div>`;
        document.getElementById('statTotal').textContent = DATA.length;
        return;
      }
      const browseData = getBrowseData();
      CATS.forEach(cat => {
        let items = browseData.filter(d => d.cat === cat.name && (d.society || 'Prateek Laurel') === selectedSociety);
        if (q) items = items.filter(d => itemMatchesQuery(d, q));
        if (!items.length) return;
        total += items.length;
        const sec = document.createElement('div');
        sec.className = 'category-section';
        sec.innerHTML = `<div class="cat-heading">
      <div class="cat-icon"><i class="fa ${cat.icon}"></i></div>
      <span>${cat.name}</span>
      <span style="font-size:.72rem;background:var(--green-pale);color:var(--green);padding:2px 9px;border-radius:10px;font-weight:700;margin-left:4px">${items.length}</span>
    </div><div class="tiles" id="tg_${cat.id}"></div>`;
        grid.appendChild(sec);
        const tg = sec.querySelector(`#tg_${cat.id}`);
        items.forEach((item, i) => tg.appendChild(makeTile(item, i + 1, cat)));
      });
      if (!total) {
        grid.innerHTML = q
          ? `<div class="empty-state"><i class="fa fa-magnifying-glass"></i><p>No results found for "<strong>${esc(q)}</strong>"</p></div>`
          : `<div class="empty-state"><i class="fa fa-store-slash"></i><p>No businesses registered in <strong>${esc(selectedSociety)}</strong> yet.<br>Check back soon, or tap Back to choose a different society.</p></div>`;
      }
      document.getElementById('statTotal').textContent = DATA.length;
    }

    /* ═══════════ SEARCH SUGGESTIONS ═══════════ */
    let _searchSuggestItems = [], _searchSuggestIdx = -1, _searchDebounce = null;

    function onSearchInput() {
      document.getElementById('searchClearBtn').style.display = document.getElementById('searchInput').value ? 'block' : 'none';
      clearTimeout(_searchDebounce);
      renderAll();
      if (_browseLevel === 'category') renderCategoryPage();
      _searchDebounce = setTimeout(renderSearchSuggestions, 100);
    }

    function clearSearch() {
      const input = document.getElementById('searchInput');
      input.value = '';
      input.focus();
      document.getElementById('searchClearBtn').style.display = 'none';
      closeSearchSuggestions();
      renderAll();
      if (_browseLevel === 'category') renderCategoryPage();
    }

    function closeSearchSuggestions() {
      const box = document.getElementById('searchSuggest');
      box.classList.remove('open');
      box.innerHTML = '';
      _searchSuggestItems = []; _searchSuggestIdx = -1;
    }

    /* Search is global — it looks across every society, not just the one currently
       selected, so a customer can find a society, a category (broken out per
       society, since the same category exists in many), a business, or a
       product/service by name from anywhere in the app. Picking any result
       "zooms in" straight to that society/category via _navigateToCategory()/
       _selectSocietyByName(), reusing the same drill-down navigation as tapping
       the boxes directly. */
    function buildSearchSuggestions(q) {
      const words = _queryWords(q);
      if (!words.length) return { societies: [], businesses: [], categories: [], products: [] };

      const browseData = getBrowseData();

      // Societies — matched by name, from the same list the society boxes use.
      const societyPool = _nearbySocieties || _societyList();
      const societies = societyPool
        .filter(s => words.every(w => (s.name || '').toLowerCase().includes(w)))
        .slice(0, 3)
        .map(s => ({ type: 'society', name: s.name, label: s.name }));

      // Businesses — global, matched by venture name; sub-label shows which society.
      const businesses = browseData
        .filter(d => words.every(w => (d.venture || '').toLowerCase().includes(w)))
        .slice(0, 6)
        .map(d => ({
          type: 'business', id: d.id, label: d.venture, society: d.society || 'Prateek Laurel', cat: d.cat,
          sub: `${d.speciality || d.cat} • ${d.society || 'Prateek Laurel'}`
        }));
      const seenBizIds = new Set(businesses.map(b => b.id));

      // Categories — matched by category name, broken out per society (each society
      // with at least one matching business becomes its own selectable result).
      const catSocietyCounts = {};
      browseData.forEach(d => {
        const cat = CATS.find(c => c.name === d.cat);
        if (!cat || !words.every(w => cat.name.toLowerCase().includes(w))) return;
        const society = d.society || 'Prateek Laurel';
        const key = cat.name + '||' + society;
        catSocietyCounts[key] = (catSocietyCounts[key] || 0) + 1;
      });
      const categories = Object.keys(catSocietyCounts)
        .map(key => { const [catName, society] = key.split('||'); return { type: 'category', catName, society, label: catName, count: catSocietyCounts[key] }; })
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Products & services — menu item names (and, as a fallback, specialities)
      // matched globally, showing which vendor + society they belong to.
      const products = [];
      const seenProduct = new Set();
      browseData.forEach(d => {
        const society = d.society || 'Prateek Laurel';
        (d.menu || []).forEach(it => {
          if (!it.name) return;
          const nameLower = it.name.toLowerCase();
          if (!words.every(w => nameLower.includes(w))) return;
          const key = d.id + '|' + nameLower;
          if (seenProduct.has(key)) return;
          seenProduct.add(key);
          products.push({ type: 'product', vendorId: d.id, label: it.name, society, cat: d.cat, sub: `${d.venture} • ${society}` });
        });
        if (products.length >= 8) return;
        if (!seenBizIds.has(d.id) && d.speciality) {
          const specLower = d.speciality.toLowerCase();
          const key = d.id + '|spec|' + specLower;
          if (!seenProduct.has(key) && words.every(w => specLower.includes(w))) {
            seenProduct.add(key);
            products.push({ type: 'product', vendorId: d.id, label: d.speciality, society, cat: d.cat, sub: `${d.venture} • ${society}` });
          }
        }
      });

      return { societies, businesses, categories, products: products.slice(0, 6) };
    }

    function _highlightMatch(text, q) {
      const words = _queryWords(q).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).filter(Boolean);
      const safe = esc(text);
      if (!words.length) return safe;
      return safe.replace(new RegExp('(' + words.join('|') + ')', 'ig'), '<b>$1</b>');
    }

    function renderSearchSuggestions() {
      const box = document.getElementById('searchSuggest');
      const q = document.getElementById('searchInput').value.trim();
      _searchSuggestIdx = -1;
      if (!q) { closeSearchSuggestions(); return; }

      const { societies, businesses, categories, products } = buildSearchSuggestions(q);
      _searchSuggestItems = [...societies, ...businesses, ...categories, ...products];

      if (!_searchSuggestItems.length) {
        box.innerHTML = `<div class="search-suggest-empty"><i class="fa fa-magnifying-glass" style="opacity:.4"></i> No matches — try a different keyword</div>`;
        box.classList.add('open');
        return;
      }

      let html = '', idx = 0;
      const row = (label, sub, icon) => {
        const i = idx++;
        return `<div class="search-suggest-item" data-idx="${i}" onmousedown="event.preventDefault();selectSearchSuggestion(${i})">
      <i class="fa ${icon}"></i><span>${_highlightMatch(label, q)}${sub ? `<div class="search-suggest-sub">${esc(sub)}</div>` : ''}</span>
    </div>`;
      };
      if (societies.length) { html += `<div class="search-suggest-group">Societies</div>` + societies.map(m => row(m.label, null, 'fa-location-dot')).join(''); }
      if (businesses.length) { html += `<div class="search-suggest-group">Businesses</div>` + businesses.map(m => row(m.label, m.sub, 'fa-store')).join(''); }
      if (categories.length) { html += `<div class="search-suggest-group">Categories</div>` + categories.map(m => row(m.catName, `${m.society} (${m.count})`, 'fa-layer-group')).join(''); }
      if (products.length) { html += `<div class="search-suggest-group">Products &amp; Services</div>` + products.map(m => row(m.label, m.sub, 'fa-tag')).join(''); }

      box.innerHTML = html;
      box.classList.add('open');
    }

    function selectSearchSuggestion(idx) {
      const item = _searchSuggestItems[idx];
      if (!item) return;
      const input = document.getElementById('searchInput');
      closeSearchSuggestions();
      if (item.type === 'business') {
        input.value = item.label;
        _navigateToCategory(item.society, item.cat);
        openMenuModal(item.id);
      } else if (item.type === 'product') {
        input.value = item.label;
        _navigateToCategory(item.society, item.cat);
        openMenuModal(item.vendorId);
      } else if (item.type === 'category') {
        input.value = '';
        _navigateToCategory(item.society, item.catName);
      } else if (item.type === 'society') {
        input.value = '';
        _selectSocietyByName(item.name);
      } else {
        input.value = item.label;
        renderAll();
      }
      document.getElementById('searchClearBtn').style.display = input.value ? 'block' : 'none';
    }

    function onSearchKeydown(e) {
      const box = document.getElementById('searchSuggest');
      if (!box.classList.contains('open') || !_searchSuggestItems.length) {
        if (e.key === 'Escape') { closeSearchSuggestions(); }
        return;
      }
      const items = box.querySelectorAll('.search-suggest-item');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        _searchSuggestIdx = Math.min(_searchSuggestIdx + 1, items.length - 1);
        items.forEach((el, i) => el.classList.toggle('active', i === _searchSuggestIdx));
        items[_searchSuggestIdx]?.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        _searchSuggestIdx = Math.max(_searchSuggestIdx - 1, 0);
        items.forEach((el, i) => el.classList.toggle('active', i === _searchSuggestIdx));
        items[_searchSuggestIdx]?.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        if (_searchSuggestIdx >= 0) { e.preventDefault(); selectSearchSuggestion(_searchSuggestIdx); }
        else { closeSearchSuggestions(); }
      } else if (e.key === 'Escape') {
        closeSearchSuggestions();
      }
    }

    document.addEventListener('click', (e) => {
      const wrap = document.querySelector('.search-big-wrap');
      if (wrap && !wrap.contains(e.target)) closeSearchSuggestions();
    });

    function makeTile(item, sno, cat) {
      const div = document.createElement('div');
      div.className = 'tile';
      div.style.cursor = 'pointer';
      div.addEventListener('click', () => openMenuModal(item.id));
      // Real vendor photo if uploaded; otherwise a cartoon-style category icon instead of a
      // flat placeholder logo, so the feed reads as live/colorful even before businesses add photos.
      const imgSrc = item.image || IMGS[item.id] || '';
      const imgInner = imgSrc ? `<img src="${imgSrc}" alt="${item.venture}" loading="lazy">` : _categoryFallbackFill(item.cat);

      /* Image zone */
      const imgHtml = `<div class="tile-img-wrap">
      ${imgInner}
      <span class="tile-cat-badge">${cat.name.split(',')[0]}</span>
      <span class="tile-sno">#${sno}</span>
    </div>`;

      /* Links — phone & WhatsApp are hidden on tile; accessible via modal */
      let links = '';
      if (item.instagram) {
        const ig = item.instagram.startsWith('http') ? item.instagram : `https://instagram.com/${item.instagram.replace('@', '')}`;
        links += `<a class="tile-link tl-ig" href="${ig}" target="_blank"><i class="fab fa-instagram"></i>${item.instagram}</a>`;
      }
      if (item.video) links += `<a class="tile-link tl-video" href="${item.video}" target="_blank"><i class="fab fa-youtube"></i>Video</a>`;
      if (item.url) links += `<a class="tile-link tl-url" href="${item.url}" target="_blank"><i class="fa fa-globe"></i>Website</a>`;

      /* Admin actions */
      let adminHtml = isAdmin ? `<div class="admin-tile-actions">
    <button class="btn btn-sm btn-ghost" onclick="openEditModal('${item.id}')"><i class="fa fa-pen"></i> Edit</button>
    <button class="btn btn-sm btn-danger" onclick="deleteTile('${item.id}')"><i class="fa fa-trash"></i> Delete</button>
  </div>` : '';

      /* Order button */
      const hasWa = item.whatsapp || item.phone;
      const _cc = getCatConfig(item.cat);
      const orderBtn = hasWa
        ? `<button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:10px" onclick="event.stopPropagation();openMenuModal('${item.id}')">
        <i class="fa ${_cc.tileBtnIcon}"></i> ${_cc.tileBtnText}
       </button>`
        : '';

      div.innerHTML = `${imgHtml}
    <div class="tile-body">
      <div class="tile-name">${item.venture}</div>
      <div class="tile-spec">${item.speciality}</div>
      ${(() => { const ri = getVendorRating(item.id); return ri ? `<div style="font-size:.8rem;margin-bottom:5px">${renderStarsHtml(ri.avg)} <span style="color:var(--gold);font-weight:600">${ri.avg}</span> <span style="color:var(--text-muted);font-size:.72rem">(${ri.count})</span></div>` : ''; })()}
      ${item.desc ? `<div class="tile-desc">${item.desc}</div>` : ''}
      <div class="tile-divider"></div>
      <div class="tile-info">
        ${item.contact ? `<div class="tile-info-row"><i class="fa fa-user"></i><span>${item.contact}</span></div>` : ''}
        ${item.flat && item.flat !== '—' ? `<div class="tile-info-row"><i class="fa fa-building"></i><span>Flat ${item.flat}</span></div>` : ''}
      </div>
      ${orderBtn}
      ${links ? `<div class="tile-links" onclick="event.stopPropagation()">${links}</div>` : ''}
      ${adminHtml ? `<div onclick="event.stopPropagation()">${adminHtml}</div>` : ''}
    </div>`;
      return div;
    }

    /* ═══════════ CATEGORY CONFIG ═══════════ */
    function getCatConfig(cat) {
      const c = (cat || '').toLowerCase();
      if (c.includes('food') || c.includes('baker') || c.includes('beverage'))
        return { tileBtnIcon: 'fa-utensils', tileBtnText: 'View Menu & Order', modalTerm: 'Menu', useQty: true, actionText: 'Order via WhatsApp', emptyIcon: 'fa-utensils', emptyText: 'No menu added yet — contact business directly.', waIntro: "Hi! I'd like to place an order 🛒", waTotal: (t, a) => `\n\n💰 *Total: ₹${t}*${a ? '\n🏠 Address: ' + a : ''}\n\nPlease confirm. Thank you!` };
      if (c.includes('fashion') || c.includes('gift') || c.includes('lifestyle'))
        return { tileBtnIcon: 'fa-bag-shopping', tileBtnText: 'Browse & Order', modalTerm: 'Products', useQty: true, actionText: 'Order via WhatsApp', emptyIcon: 'fa-bag-shopping', emptyText: 'No products listed yet — contact business directly.', waIntro: "Hi! I'd like to order 🛍️", waTotal: (t, a) => `\n\n💰 *Total: ₹${t}*${a ? '\n🏠 Address: ' + a : ''}\n\nPlease confirm. Thank you!` };
      if (c.includes('education') || c.includes('coaching'))
        return { tileBtnIcon: 'fa-graduation-cap', tileBtnText: 'View Details', modalTerm: 'Courses & Sessions', useQty: false, actionText: "I'm Interested — WhatsApp", emptyIcon: 'fa-graduation-cap', emptyText: 'Contact the educator directly for course details.', waIntro: "Hi! I'm interested in enrolling 🎓", waTotal: (t, a) => `${t > 0 ? '\n💰 *Reference Fees: ₹' + t + ' (subject to confirmation)*' : ''}\n\nCould you please share schedule and batch details? Thank you!` };
      if (c.includes('camp') || c.includes('music') || c.includes('kids'))
        return { tileBtnIcon: 'fa-music', tileBtnText: 'View Details', modalTerm: 'Activities & Sessions', useQty: false, actionText: "I'm Interested — WhatsApp", emptyIcon: 'fa-music', emptyText: 'Contact the organiser directly for activity details.', waIntro: "Hi! I'm interested in joining 🎵", waTotal: (t, a) => `${t > 0 ? '\n💰 *Reference Fees: ₹' + t + ' (subject to confirmation)*' : ''}\n\nCould you please share schedules and batch details? Thank you!` };
      if (c.includes('health') || c.includes('professional'))
        return { tileBtnIcon: 'fa-briefcase-medical', tileBtnText: 'View Details & Consult', modalTerm: 'Services', useQty: false, actionText: 'Consult Now — WhatsApp', emptyIcon: 'fa-briefcase-medical', emptyText: 'Contact the professional directly to book a session.', waIntro: "Hi! I'd like to book a consultation 🏥", waTotal: (t, a) => `${t > 0 ? '\n💰 *Service Fees: ₹' + t + ' (subject to consultation)*' : ''}\n\nPlease share your availability. Thank you!` };
      if (c.includes('home') || c.includes('print') || c.includes('tech'))
        return { tileBtnIcon: 'fa-print', tileBtnText: 'View Details & Book', modalTerm: 'Services & Products', useQty: false, actionText: 'Book Now — WhatsApp', emptyIcon: 'fa-print', emptyText: 'Contact the service provider directly.', waIntro: "Hi! I'd like to enquire about your services 🛠️", waTotal: (t, a) => `${t > 0 ? '\n💰 *Estimated Cost: ₹' + t + ' (subject to discussion)*' : ''}${a ? '\n🏠 Address: ' + a : ''}\n\nPlease confirm availability. Thank you!` };
      return { tileBtnIcon: 'fa-store', tileBtnText: 'View Details & Order', modalTerm: 'Menu', useQty: true, actionText: 'Order via WhatsApp', emptyIcon: 'fa-store', emptyText: 'No items listed yet — contact business directly.', waIntro: "Hi! I'd like to place an order", waTotal: (t, a) => `\n\n💰 *Total: ₹${t}*${a ? '\n🏠 Address: ' + a : ''}\n\nPlease confirm. Thank you!` };
    }

    /* ═══════════ MENU MODAL + ORDERING ═══════════ */
    let _menuVendor = null, _menuQtys = {}, _catCfg = null;

    function openMenuModal(vendorId) {
      _menuVendor = getBrowseData().find(d => d.id === vendorId);
      if (!_menuVendor) return;
      _catCfg = getCatConfig(_menuVendor.cat);
      _menuQtys = {};
      document.getElementById('menuModalTitle').textContent = _menuVendor.venture;
      document.getElementById('menuModalSpec').textContent = _menuVendor.speciality || '';
      document.getElementById('menuModalTerm').textContent = _catCfg.modalTerm;
      document.getElementById('menuCustomerName').value = currentCustomer ? (currentCustomer.name || '') : '';
      document.getElementById('menuCustomerMobile').value = currentCustomer ? (currentCustomer.mobile || '') : '';
      document.getElementById('menuCustomerAddress').value = currentCustomer ? (currentCustomer.address || '') : '';
      ['menuCustomerName', 'menuCustomerMobile', 'menuCustomerAddress'].forEach(id => {
        document.getElementById(id).style.borderColor = 'var(--border)';
      });
      const addrPicker = document.getElementById('menuAddressPicker');
      const savedAddresses = currentCustomer ? (currentCustomer.addresses || []) : [];
      if (savedAddresses.length) {
        addrPicker.style.display = 'block';
        addrPicker.innerHTML = savedAddresses.map((a, i) => `<option value="${i}">${esc(a.label || 'Address')} — ${esc(a.address)}</option>`).join('')
          + `<option value="new">+ Use a different address</option>`;
        document.getElementById('menuCustomerAddress').value = savedAddresses[0].address;
      } else {
        addrPicker.style.display = 'none';
      }

      const menu = (_menuVendor.menu || []).filter(it => it.available !== false);
      const list = document.getElementById('menuItemsList');
      const wa = _menuVendor.whatsapp || _menuVendor.phone;

      const statusInfo = getVendorStatusInfo(_menuVendor);
      const isShopClosed = statusInfo.isClosed;
      const subs = JSON.parse(localStorage.getItem('hb_reopen_subscriptions') || '{}');
      const isSubscribed = !!subs[_menuVendor.id];

      const closedBannerHTML = isShopClosed ? `
        <div class="shop-closed-banner" style="background:#fff3e0;border:1px solid #ffe0b2;border-radius:12px;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:1.2rem;line-height:1">🔴</span>
            <div>
              <strong style="color:#c62828;font-size:0.92rem;display:block">Shop Currently Closed</strong>
              <span style="font-size:0.8rem;color:#e65100">${esc(statusInfo.customerText || statusInfo.subtext)}</span>
            </div>
          </div>
          <button type="button" class="btn btn-sm ${isSubscribed ? 'btn-success' : 'btn-outline'}" style="${isSubscribed ? 'background:#e8f5e9;color:#2e7d32;border:1px solid #a5d6a7' : 'border-color:#e65100;color:#e65100'};white-space:nowrap;font-weight:700;padding:6px 14px;border-radius:20px;display:inline-flex;align-items:center;gap:6px" onclick="toggleNotifyMeWhenOpen('${_menuVendor.id}', this)">
            <i class="fa ${isSubscribed ? 'fa-check' : 'fa-bell'}"></i> ${isSubscribed ? "✓ We'll notify you" : 'Notify Me'}
          </button>
        </div>` : '';

      const scheduleObj = _menuVendor.schedule || getDefaultSchedule();
      const openTime = scheduleObj.openTime || '10:00';
      const closeTime = scheduleObj.closeTime || '21:00';

      let openDaysArr = scheduleObj.openDays;
      if (!openDaysArr && typeof scheduleObj === 'object') {
        openDaysArr = DAYS_OF_WEEK.filter(day => scheduleObj[day] && !scheduleObj[day].closed);
      }
      if (!openDaysArr || !openDaysArr.length) {
        openDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      }

      const closedDatesArr = scheduleObj.closedDates || [];
      const weekDayDates = getWeekDayDates();

      const scheduleHtml = `
        <details class="vendor-schedule-details" style="margin-bottom:14px;background:var(--cream,#f8f9fa);border:1px solid var(--border,#e5e7eb);border-radius:12px;padding:10px 14px;font-size:0.83rem">
          <summary style="cursor:pointer;font-weight:700;color:var(--text);display:flex;align-items:center;gap:6px;user-select:none">
            <i class="fa fa-clock" style="color:var(--green)"></i> View Shop Operating Hours
          </summary>
          <div style="margin-top:10px;display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;padding-top:8px;border-top:1px dashed var(--border,#e5e7eb)">
            ${DAYS_OF_WEEK.map(day => {
        const dayDateStr = weekDayDates[day];
        const isHolidayDate = closedDatesArr.includes(dayDateStr);
        let isClosedDay = !openDaysArr.includes(day) || isHolidayDate;

        let dayOpenTime = openTime;
        let dayCloseTime = closeTime;
        if (scheduleObj[day]) {
          if (scheduleObj[day].closed) isClosedDay = true;
          if (scheduleObj[day].open) dayOpenTime = scheduleObj[day].open;
          if (scheduleObj[day].close) dayCloseTime = scheduleObj[day].close;
        }

        const hoursText = isClosedDay
          ? (isHolidayDate ? 'Closed (Holiday)' : 'Closed')
          : `${formatTime12h(dayOpenTime)} – ${formatTime12h(dayCloseTime)}`;

        const isToday = DAYS_OF_WEEK[(new Date().getDay() + 6) % 7] === day;
        return `
                <div style="font-size:0.78rem;padding:5px 8px;border-radius:8px;background:${isHolidayDate ? '#fff3e0' : (isToday ? 'rgba(40,167,69,0.12)' : 'var(--white)')};border:${isHolidayDate ? '1px solid #ffe0b2' : (isToday ? '1px solid var(--green)' : '1px solid var(--border)')}">
                  <strong style="color:var(--text)">${day.slice(0, 3)}:</strong> 
                  <span style="color:${isClosedDay ? '#c0392b' : 'var(--text-muted)'};font-weight:${isClosedDay ? '700' : '500'}">${hoursText}</span>
                </div>
              `;
      }).join('')}
          </div>
          ${closedDatesArr.length ? `
            <div style="font-size:0.78rem;color:#e65100;margin-top:8px;padding-top:6px;border-top:1px dashed var(--border,#e5e7eb)">
              <strong>📅 Upcoming Holiday Closures:</strong> ${closedDatesArr.map(formatDateReadable).join(', ')}
            </div>
          ` : ''}
        </details>`;

      const modalInfoBannerHTML = closedBannerHTML + scheduleHtml;

      const contactSection = document.getElementById('menuContactSection');
      const vendorNumEl = document.getElementById('menuVendorNumber');
      if (contactSection) { contactSection.style.display = wa ? 'block' : 'none'; }
      if (vendorNumEl) { vendorNumEl.style.display = 'none'; }

      if (!menu.length) {
        if (_menuVendor.detailsText || _menuVendor.detailsImage) {
          list.innerHTML = modalInfoBannerHTML + `
        ${_menuVendor.detailsImage ? `<img src="${_menuVendor.detailsImage}" style="width:100%;max-height:320px;object-fit:contain;border-radius:10px;margin-bottom:14px;background:var(--cream)">` : ''}
        ${_menuVendor.detailsText ? `<div style="white-space:pre-wrap;font-size:.9rem;color:var(--text);line-height:1.6;padding:4px 2px">${esc(_menuVendor.detailsText)}</div>` : ''}`;
        } else {
          list.innerHTML = modalInfoBannerHTML + `<div style="text-align:center;padding:28px 0;color:var(--text-muted)">
        <i class="fa ${_catCfg.emptyIcon}" style="font-size:2rem;opacity:.3;display:block;margin-bottom:10px"></i>
        <p style="margin-bottom:14px">${_catCfg.emptyText}</p>
      </div>`;
        }
        document.getElementById('menuOrderBtn').style.display = 'none';
        document.getElementById('menuFlatRow').style.display = 'none';
      } else {
        if (_catCfg.useQty) {
          list.innerHTML = modalInfoBannerHTML + menu.map(it => `
        <div class="menu-item-row" style="${isShopClosed ? 'opacity:0.75' : ''}">
          <div style="flex:1;min-width:0">
            <div class="menu-item-name">${it.name}</div>
            ${it.desc ? `<div class="menu-item-desc">${it.desc}</div>` : ''}
          </div>
          <div style="display:flex;align-items:center;flex-shrink:0;gap:4px">
            ${it.price > 0 ? `<div class="menu-item-price">₹${it.price}</div>` : '<div class="menu-item-price" style="font-size:.72rem;color:var(--text-muted)">Enquiry</div>'}
            <div class="qty-ctrl">
              <button class="qty-btn" ${isShopClosed ? 'disabled style="opacity:0.4;cursor:not-allowed"' : `onclick="chQty('${it.id}',${it.price},-1)"`}>−</button>
              <span class="qty-num" id="qn_${it.id}">0</span>
              <button class="qty-btn" ${isShopClosed ? 'disabled style="opacity:0.4;cursor:not-allowed"' : `onclick="chQty('${it.id}',${it.price},1)"`}>+</button>
            </div>
          </div>
        </div>`).join('');
        } else {
          list.innerHTML = modalInfoBannerHTML + menu.map(it => `
        <div class="menu-item-row" style="${isShopClosed ? 'cursor:default;opacity:0.75' : 'cursor:pointer'}" ${isShopClosed ? '' : `onclick="document.getElementById('chk_${it.id}').click()"`}>
          <label style="flex:1;min-width:0;display:flex;align-items:flex-start;gap:10px;cursor:${isShopClosed ? 'default' : 'pointer'}" onclick="event.stopPropagation()">
            <input type="checkbox" id="chk_${it.id}" ${isShopClosed ? 'disabled' : 'onchange="_updMenuTotal()"'} style="margin-top:3px;accent-color:var(--green);flex-shrink:0;width:16px;height:16px;${isShopClosed ? 'cursor:not-allowed' : ''}">
            <div style="flex:1">
              <div class="menu-item-name">${it.name}</div>
              ${it.desc ? `<div class="menu-item-desc">${it.desc}</div>` : ''}
            </div>
          </label>
          ${it.price > 0 ? `<div class="menu-item-price" style="flex-shrink:0;margin-left:10px">₹${it.price}</div>` : `<div class="menu-item-price" style="flex-shrink:0;margin-left:10px;font-size:.72rem;color:var(--text-muted)">Enquiry</div>`}
        </div>`).join('');
        }
        const orderBtn = document.getElementById('menuOrderBtn');
        const callBtn = document.getElementById('menuCallBtn');
        const waBtn = document.getElementById('menuWaBtn');

        if (isShopClosed) {
          orderBtn.style.display = 'flex';
          orderBtn.disabled = true;
          orderBtn.style.opacity = '0.5';
          orderBtn.style.cursor = 'not-allowed';
          orderBtn.onclick = function() { showToast('Shop is currently closed. Orders can only be placed when shop opens.'); };
          orderBtn.innerHTML = '<i class="fa fa-moon"></i> Shop Currently Closed';
          document.getElementById('menuFlatRow').style.display = 'none';

          if (callBtn) {
            callBtn.disabled = true;
            callBtn.style.opacity = '0.5';
            callBtn.style.cursor = 'not-allowed';
            callBtn.title = 'Shop is currently closed';
            callBtn.onclick = function() { showToast('Shop is currently closed. Contacting vendor is available when shop opens.'); };
          }
          if (waBtn) {
            waBtn.disabled = true;
            waBtn.style.opacity = '0.5';
            waBtn.style.cursor = 'not-allowed';
            waBtn.title = 'Shop is currently closed';
            waBtn.onclick = function() { showToast('Shop is currently closed. Contacting vendor is available when shop opens.'); };
          }
        } else {
          orderBtn.disabled = false;
          orderBtn.style.opacity = '1';
          orderBtn.style.cursor = 'pointer';
          if (currentCustomer) {
            document.getElementById('menuFlatRow').style.display = 'flex';
            orderBtn.onclick = placeOrder;
            orderBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Place Order via WhatsApp';
          } else {
            document.getElementById('menuFlatRow').style.display = 'none';
            orderBtn.onclick = openCustomerAuthModal;
            orderBtn.innerHTML = '<i class="fa fa-right-to-bracket"></i> Login to Order';
          }

          if (callBtn) {
            callBtn.disabled = false;
            callBtn.style.opacity = '1';
            callBtn.style.cursor = 'pointer';
            callBtn.onclick = function() { showVendorContact('call'); };
          }
          if (waBtn) {
            waBtn.disabled = false;
            waBtn.style.opacity = '1';
            waBtn.style.cursor = 'pointer';
            waBtn.onclick = function() { showVendorContact('wa'); };
          }
        }
      }
      // Populate vendor image and description
      const imgSrc = _menuVendor.image || IMGS[_menuVendor.id] || '';
      const vdImg = document.getElementById('vdHeroImg');
      if (vdImg) {
        vdImg.innerHTML = imgSrc
          ? `<img src="${imgSrc}" alt="${_menuVendor.venture}" style="width:100%;height:auto;max-height:340px;object-fit:contain;border-radius:14px;display:block;background:var(--cream)">`
          : '';
        vdImg.style.display = imgSrc ? 'block' : 'none';
      }
      const vdDesc = document.getElementById('vdDesc');
      if (vdDesc) { vdDesc.textContent = _menuVendor.desc || ''; vdDesc.style.display = _menuVendor.desc ? 'block' : 'none'; }
      const vdInfo = document.getElementById('vdInfo');
      if (vdInfo) {
        let infoHtml = '';
        if (_menuVendor.contact) infoHtml += `<span style="margin-right:16px"><i class="fa fa-user" style="color:var(--green);margin-right:5px"></i>${_menuVendor.contact}</span>`;
        if (_menuVendor.flat && _menuVendor.flat !== '—') infoHtml += `<span><i class="fa fa-building" style="color:var(--green);margin-right:5px"></i>Flat ${_menuVendor.flat}</span>`;
        vdInfo.innerHTML = infoHtml;
        vdInfo.style.display = infoHtml ? 'block' : 'none';
      }

      _updMenuTotal();
      _renderMenuReviews(vendorId);

      // Back bar title
      const vdBackTitle = document.getElementById('vdBackTitle');
      if (vdBackTitle) vdBackTitle.textContent = _menuVendor.venture;

      // Similar vendors
      _renderSimilarVendors(vendorId);

      // Show inline detail view, hide search + whichever browse level is active
      hideAllBrowseLevels();
      const searchSection = document.getElementById('searchSection');
      if (searchSection) searchSection.style.display = 'none';
      document.getElementById('vendorDetailView').style.display = 'block';
      window.scrollTo({ top: document.getElementById('vendorDetailView').offsetTop - 70, behavior: 'smooth' });

      fsRecordStat(vendorId, 'profileViews');
    }

    function closeVendorDetail() {
      document.getElementById('vendorDetailView').style.display = 'none';
      const searchSection = document.getElementById('searchSection');
      if (searchSection) searchSection.style.display = '';
      showBrowseLevel(_browseLevel);
      _menuVendor = null; _catCfg = null; _menuQtys = {};
    }

    function _renderSimilarVendors(currentId) {
      const el = document.getElementById('vdSimilar');
      if (!el || !_menuVendor) return;
      const similar = getBrowseData().filter(d => d.cat === _menuVendor.cat && d.id !== currentId && d.visible !== false);
      if (!similar.length) { el.style.display = 'none'; return; }
      const catObj = CATS.find(c => c.name === _menuVendor.cat);
      const catIcon = catObj ? catObj.icon : 'fa-store';
      const catLabel = _menuVendor.cat || '';
      el.style.display = 'block';
      el.innerHTML = '<div style="font-weight:700;font-size:1rem;color:var(--green-dark);margin-bottom:14px">'
        + '<i class="fa ' + catIcon + '" style="color:var(--green);margin-right:6px"></i>More in ' + catLabel
        + '</div>'
        + '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:12px">'
        + similar.slice(0, 6).map(function (v) {
          var imgSrc = v.image || (IMGS && IMGS[v.id]) || '';
          var rating = getVendorRating(v.id);
          var imgHtml = imgSrc
            ? '<img src="' + imgSrc + '" alt="' + v.venture + '" style="width:100%;height:88px;object-fit:contain;display:block;background:var(--cream)">'
            : '<div style="width:100%;height:88px;background:var(--green);display:flex;align-items:center;justify-content:center"><i class="fa fa-store" style="color:#fff;font-size:1.4rem;opacity:.8"></i></div>';
          var ratingHtml = rating
            ? '<div style="font-size:.72rem;color:var(--gold);font-weight:600">★ ' + rating.avg + '<span style="color:var(--text-muted);font-weight:400"> (' + rating.count + ')</span></div>'
            : '<div style="font-size:.72rem;color:var(--text-muted)">Tap to view</div>';
          return '<div onclick="openMenuModal(\'' + v.id + '\')" style="cursor:pointer;background:var(--white);border:1.5px solid var(--border);border-radius:12px;overflow:hidden;transition:box-shadow .2s,border-color .2s,transform .2s" onmouseover="this.style.borderColor=\'var(--green)\';this.style.transform=\'translateY(-3px)\';this.style.boxShadow=\'0 8px 24px rgba(255,153,51,.18)\'" onmouseout="this.style.borderColor=\'var(--border)\';this.style.transform=\'\';this.style.boxShadow=\'\'">'
            + imgHtml
            + '<div style="padding:8px 10px">'
            + '<div style="font-size:.82rem;font-weight:700;color:var(--green-dark);line-height:1.3;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + v.venture + '</div>'
            + ratingHtml
            + '</div></div>';
        }).join('')
        + '</div>';
    }

    function chQty(id, price, delta) {
      _menuQtys[id] = Math.max(0, ((_menuQtys[id] || 0) + delta));
      document.getElementById('qn_' + id).textContent = _menuQtys[id];
      _updMenuTotal();
    }

    function _updMenuTotal() {
      if (!_menuVendor || !_menuVendor.menu || !_catCfg) return;
      const menu = (_menuVendor.menu || []).filter(it => it.available !== false);
      const btn = document.getElementById('menuOrderBtn');
      if (!btn) return;
      const label = currentCustomer ? _catCfg.actionText : 'Login to Order';
      const icon = currentCustomer ? 'fab fa-whatsapp' : 'fa fa-right-to-bracket';
      if (_catCfg.useQty) {
        let total = 0;
        menu.forEach(it => { total += ((_menuQtys[it.id] || 0) * it.price); });
        btn.innerHTML = total > 0
          ? `<i class="${icon}"></i> ${label} — ₹${total}`
          : `<i class="${icon}"></i> ${label}`;
      } else {
        const anyChecked = menu.some(it => document.getElementById('chk_' + it.id)?.checked);
        const total = menu.filter(it => document.getElementById('chk_' + it.id)?.checked).reduce((s, it) => s + (it.price || 0), 0);
        btn.innerHTML = anyChecked && total > 0
          ? `<i class="${icon}"></i> ${label} — ₹${total}`
          : `<i class="${icon}"></i> ${label}`;
      }
    }

    function placeOrder() {
      if (!_menuVendor || !_catCfg) return;
      const statusInfo = getVendorStatusInfo(_menuVendor);
      if (statusInfo.isClosed) {
        showToast('Shop is currently closed. Orders can only be placed when shop opens.');
        return;
      }
      if (!currentCustomer) { openCustomerAuthModal(); return; }
      const menu = (_menuVendor.menu || []).filter(it => it.available !== false);
      const wa = _menuVendor.whatsapp || _menuVendor.phone;

      // Validate selections first
      let chosen, lines, total = 0;
      if (_catCfg.useQty) {
        chosen = menu.filter(it => (_menuQtys[it.id] || 0) > 0);
        if (!chosen.length) { showToast('Select at least one item'); return; }
        lines = chosen.map(it => {
          const sub = (_menuQtys[it.id] || 0) * (it.price || 0); total += sub;
          return it.price > 0 ? `• ${it.name} x${_menuQtys[it.id]} — ₹${sub}` : `• ${it.name} x${_menuQtys[it.id]}`;
        });
      } else {
        chosen = menu.filter(it => document.getElementById('chk_' + it.id)?.checked);
        if (!chosen.length) { showToast('Please select at least one option'); return; }
        lines = chosen.map(it => {
          total += (it.price || 0);
          return it.price > 0 ? `• ${it.name} — ₹${it.price}` : `• ${it.name}`;
        });
      }

      // Validate customer details (name/mobile/address — email no longer needed to order)
      const nameEl = document.getElementById('menuCustomerName');
      const mobileEl = document.getElementById('menuCustomerMobile');
      const addressEl = document.getElementById('menuCustomerAddress');
      const name = (nameEl.value || '').trim();
      const mobile = (mobileEl.value || '').trim();
      const address = (addressEl.value || '').trim();

      let valid = true;
      if (!name) {
        nameEl.style.borderColor = 'var(--danger)';
        showToast('Please enter your name');
        valid = false;
      } else { nameEl.style.borderColor = 'var(--green)'; }

      if (!mobile || !/^\d{7,15}$/.test(mobile.replace(/[\s\-]/g, ''))) {
        mobileEl.style.borderColor = 'var(--danger)';
        if (valid) showToast('Please enter a valid mobile number');
        valid = false;
      } else { mobileEl.style.borderColor = 'var(--green)'; }

      if (!address) {
        addressEl.style.borderColor = 'var(--danger)';
        if (valid) showToast('Please enter your complete delivery address');
        valid = false;
      } else { addressEl.style.borderColor = 'var(--green)'; }

      if (!valid) return;

      _finalizePlaceOrder({ chosen, lines, total, name, mobile, address, wa });
    }

    function onMenuAddressPick() {
      const sel = document.getElementById('menuAddressPicker');
      const addrInput = document.getElementById('menuCustomerAddress');
      if (sel.value === 'new') { addrInput.value = ''; addrInput.focus(); return; }
      const a = (currentCustomer?.addresses || [])[+sel.value];
      if (a) addrInput.value = a.address;
    }

    function _finalizePlaceOrder(ctx) {
      const { chosen, lines, total, name, mobile, address, wa } = ctx;
      const msg = `${_catCfg.waIntro}\n\n*${_menuVendor.venture}*\n${lines.join('\n')}${_catCfg.waTotal(total, address)}\n👤 ${name}\n📱 Mobile: ${mobile}`;
      window.open(`https://wa.me/91${wa}?text=${encodeURIComponent(msg)}`, '_blank');
      fsRecordStat(_menuVendor.id, 'orderClicks');
      fsRecordStat(_menuVendor.id, 'whatsappClicks');
      fsLogOrder(_menuVendor.id, _menuVendor.venture,
        chosen.map(it => ({ name: it.name, price: it.price, qty: _menuQtys[it.id] || 1 })),
        total, `${address} | 📱 ${mobile}`, currentCustomer?.email || null, name, mobile);
      const toastMap = {
        "I'm Interested — WhatsApp": 'Interest sent via WhatsApp!',
        'Consult Now — WhatsApp': 'Consultation request sent!',
        'Book Now — WhatsApp': 'Booking request sent!',
        'Connect Now — WhatsApp': 'Message sent via WhatsApp!'
      };
      const toastMsg = toastMap[_catCfg.actionText] || 'Sent via WhatsApp!';
      closeVendorDetail();
      _menuQtys = {};
      showToast(toastMsg);
    }

    function showVendorContact(type) {
      if (!_menuVendor) return;
      const statusInfo = getVendorStatusInfo(_menuVendor);
      if (statusInfo.isClosed) {
        showToast('Shop is currently closed. Contacting vendor is available when shop opens.');
        return;
      }
      const mobileEl = document.getElementById('menuCustomerMobile');
      const addressEl = document.getElementById('menuCustomerAddress');
      const mobile = (mobileEl?.value || '').trim();
      const address = (addressEl?.value || '').trim();

      let valid = true;
      if (!mobile || !/^\d{7,15}$/.test(mobile.replace(/[\s\-]/g, ''))) {
        if (mobileEl) mobileEl.style.borderColor = 'var(--danger)';
        showToast('Please enter your mobile number first');
        valid = false;
      } else if (mobileEl) mobileEl.style.borderColor = 'var(--green)';

      if (!address) {
        if (addressEl) addressEl.style.borderColor = 'var(--danger)';
        if (valid) showToast('Please enter your address first');
        valid = false;
      } else if (addressEl) addressEl.style.borderColor = 'var(--green)';

      if (!valid) { if (mobileEl) mobileEl.focus(); return; }

      const wa = _menuVendor.whatsapp || _menuVendor.phone;
      const phone = _menuVendor.phone || _menuVendor.whatsapp;
      const numEl = document.getElementById('menuVendorNumber');

      if (type === 'call') {
        if (numEl) { numEl.style.display = 'block'; numEl.innerHTML = `<i class="fa fa-phone" style="color:var(--green)"></i> <a href="tel:${phone}" style="color:var(--green-dark);text-decoration:none;font-size:1.1rem">${phone}</a>`; }
      } else {
        if (numEl) { numEl.style.display = 'none'; }
        const msg = `Hi! I'm ${mobile} from ${address}. I'd like to connect with ${_menuVendor.venture}.`;
        window.open(`https://wa.me/91${wa}?text=${encodeURIComponent(msg)}`, '_blank');
        fsRecordStat(_menuVendor.id, 'whatsappClicks');
      }
    }

    /* ═══════════ CATEGORY TABS (quick-jump navigation into the Category-level screen) ═══════════ */
    function buildTabs() {
      const el = document.getElementById('catTabs');
      if (!el) return;
      el.innerHTML = '';
      const mk = (label, val) => {
        const b = document.createElement('button');
        b.className = 'cat-tab' + (_browseLevel === 'category' && _browseCategory === val ? ' active' : '');
        b.innerHTML = `${_categoryIconBox('cat-tab-icon', val)}<span class="cat-tab-label">${label}</span>`;
        b.onclick = () => openCategoryPage(val);
        el.appendChild(b);
      };
      CATS.forEach(c => mk(c.name, c.name));
    }

    /* ═══════════ ADMIN AUTH ═══════════
       Admin access has no dedicated login button — it's detected inline during
       customer mobile-OTP login (see caVerifyOtp()): if the verified number is on
       the authorized list, caAdminActivate() below asks for Firebase email/password
       to finish activating admin mode, instead of continuing the customer signup. */
    async function caAdminActivate() {
      const errEl = document.getElementById('caAdminErr');
      errEl.style.display = 'none';
      // Set isAdmin=true BEFORE Firebase sign-in so that when onAuthStateChanged
      // fires (synchronously after signIn resolves), it sees isAdmin=true and
      // does NOT sign the user back out.
      isAdmin = true;

      if (auth) {
        // Wait for Firebase Auth to finish restoring any persisted session
        let currentUser = auth.currentUser;
        if (!currentUser) {
          currentUser = await new Promise(resolve => {
            const unsub = auth.onAuthStateChanged(u => { unsub(); resolve(u); });
          });
        }

        if (currentUser) {
          // Firebase session already active (persisted from previous login) — reuse it
          window._adminUid = currentUser.uid;
          sessionStorage.setItem('hb_adminUid', currentUser.uid);
        } else {
          // No active session — sign in with credentials
          const fbEmail = (document.getElementById('ca_adminEmail').value || '').trim();
          const fbPw = document.getElementById('ca_adminPw').value;
          if (!fbEmail || !fbPw) {
            isAdmin = false;
            errEl.textContent = 'Enter your Firebase email and password';
            errEl.style.display = 'block';
            return;
          }
          try {
            const cred = await auth.signInWithEmailAndPassword(fbEmail, fbPw);
            window._adminUid = cred.user.uid;
            sessionStorage.setItem('hb_adminUid', cred.user.uid);
          } catch (e) {
            isAdmin = false;
            errEl.textContent = 'Firebase login failed: ' + e.message;
            errEl.style.display = 'block';
            return;
          }
        }
      }

      closeModal('customerAuthModal');
      document.getElementById('adminBanner').style.display = 'block';
      switchPanel('admin');
      updatePanelTabs();
      renderAll();
      showToast(window._adminUid ? 'Admin mode activated — Firebase connected ✓' : 'Admin mode activated ✓');
    }
    async function exitAdmin() {
      if (auth && auth.currentUser && !currentBusiness) {
        await auth.signOut().catch(() => { });
      }
      isAdmin = false;
      window._adminUid = null;
      sessionStorage.removeItem('hb_adminUid');
      document.getElementById('adminBanner').style.display = 'none';
      switchPanel('customer');
      updatePanelTabs();
      renderAll();
      showToast('Exited admin mode');
    }
    function goUser() { if (isAdmin) exitAdmin(); }

    /* ═══════════ MODAL ═══════════ */
    function openModal(id) { const el = document.getElementById(id); if (el) el.classList.add('open'); }
    function closeModal(id) { const el = document.getElementById(id); if (el) el.classList.remove('open'); }
    document.querySelectorAll('.modal-overlay').forEach(m => m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); }));

    function openPolicyModal(type) {
      const map = {
        mission: { title: 'Our Mission', key: 'mission' },
        vision: { title: 'Our Vision', key: 'vision' },
        whocanjoin: { title: 'Who Can Join TynTron', key: 'whoCanJoin' },
        terms: { title: 'Terms of Use', key: 'terms' },
        return: { title: 'Return Policy', key: 'returnPolicy' },
        delivery: { title: 'Delivery Policy', key: 'deliveryPolicy' },
        privacy: { title: 'Privacy Policy', key: 'privacy' },
      };
      const cfg = map[type] || map.terms;
      document.getElementById('policyModalTitle').textContent = cfg.title;
      document.getElementById('policyModalBody').textContent = SITE_CONFIG[cfg.key] || 'Content not set yet. Admin can add this in Site Config.';
      document.getElementById('policyModal').classList.add('open');
    }

    const DEFAULT_ABOUT_US = `Welcome to TynTron — Where Neighbours Meet Business

TynTron is a community-first marketplace built for the residents of Prateek Laurel Society. We believe that every household holds a story, a skill, and a passion worth sharing — and we've created a space where those passions turn into thriving home-grown businesses.

🏡 Our Mission
To connect talented home entrepreneurs with their neighbours, making it easier to discover, support, and celebrate local talent — right within the gates of our community.

🌟 What We Offer
• A curated directory of home-based businesses across food, beauty, education, wellness, and more
• Direct WhatsApp ordering — no middlemen, no extra fees
• A trusted, verified platform exclusive to our society residents

🤝 Why Choose TynTron?
When you order from a TynTron vendor, your money stays in the community. You support a neighbour's dream, get freshly made products with love, and build the kind of trust that only comes from knowing who made your food or taught your child.

📍 Exclusively for Prateek Laurel Society, Sector 120, Noida

Together, we grow stronger — one order at a time.`;

    /* ═══════════ SOCIETY ═══════════ */
    let _currentLocationCoords = null; // { lat, lng }

    function getCurrentUserCoords() {
      if (_currentLocationCoords && _currentLocationCoords.lat && _currentLocationCoords.lng) {
        return _currentLocationCoords;
      }
      if (selectedSociety) {
        const s = _societyList().find(x => (x.name || '').toLowerCase() === selectedSociety.toLowerCase());
        if (s && s.lat && s.lng) return { lat: +s.lat, lng: +s.lng };
      }
      const defaultSoc = _societyList()[0];
      if (defaultSoc && defaultSoc.lat && defaultSoc.lng) {
        return { lat: +defaultSoc.lat, lng: +defaultSoc.lng };
      }
      return { lat: 28.5900, lng: 77.3610 };
    }

    function isVendorWithin5km(vendor) {
      const userCoords = getCurrentUserCoords();
      if (!userCoords || !userCoords.lat || !userCoords.lng) return true;

      let vLat = vendor.lat ? +vendor.lat : null;
      let vLng = vendor.lng ? +vendor.lng : null;

      if (!vLat || !vLng) {
        const vSocName = vendor.society || 'Prateek Laurel';
        const s = _societyList().find(x => (x.name || '').toLowerCase() === vSocName.toLowerCase());
        if (s && s.lat && s.lng) {
          vLat = +s.lat;
          vLng = +s.lng;
        }
      }

      if (vLat && vLng) {
        const dist = _haversineDist(userCoords.lat, userCoords.lng, vLat, vLng);
        return dist <= 5000; // 5 km radius
      }
      return true;
    }

    function _societyList() { return SITE_CONFIG.societies || DEFAULT_SOCIETIES; }
    function _haversineDist(lat1, lon1, lat2, lon2) {
      const R = 6371000, dLat = (lat2 - lat1) * Math.PI / 180, dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }
    function _nearestSociety(lat, lng) {
      let best = null, minD = Infinity;
      _societyList().forEach(s => { if (!s.lat || !s.lng) return; const d = _haversineDist(lat, lng, +s.lat, +s.lng); if (d < minD) { minD = d; best = s; } });
      return (best && minD < 800) ? best.name : null;
    }
    // Once GPS detection resolves, this holds the societies within 5km — so any LATER call
    // to buildSocietySelector() (e.g. after Firestore config loads) still respects it instead
    // of racing back to the full list.
    let _nearbySocieties = null;
    function buildSocietySelector(filterList) {
      const list = filterList || _nearbySocieties || _societyList();
      ['societySelect', 'f_society', 'sr_society'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.tagName === 'SELECT') {
          const cur = el.value || selectedSociety;
          const finalList = list.length ? list : _societyList(); // never render an empty dropdown
          el.innerHTML = finalList.map(s => `<option value="${s.name}"${s.name === cur ? ' selected' : ''}>${s.name}</option>`).join('');
        } else if (el.tagName === 'INPUT') {
          if (!el.value && selectedSociety) {
            el.value = selectedSociety;
          }
        }
      });
      renderSocietyBoxes(list.length ? list : _societyList());
    }

    let _societySearchDebounce = null;
    function onSocietyManualSearch(inputId, suggestionsId) {
      clearTimeout(_societySearchDebounce);
      const input = document.getElementById(inputId);
      const box = document.getElementById(suggestionsId);
      if (!input || !box) return;
      const q = input.value.trim();

      const allSocieties = _societyList() || [];
      const matches = q ? allSocieties.filter(s =>
        (s.name || '').toLowerCase().includes(q.toLowerCase()) ||
        (s.address || '').toLowerCase().includes(q.toLowerCase())
      ) : allSocieties;

      let localHtml = '';
      if (matches.length > 0) {
        localHtml += matches.map(s => `
          <div class="loc-suggest-row" onclick="selectManualSociety('${inputId}', '${suggestionsId}', '${esc(s.name)}')">
            <i class="fa fa-building" style="color:var(--green)"></i>
            <div style="display:flex;flex-direction:column;gap:1px">
              <strong style="font-size:.84rem;color:var(--text-main,#222)">${esc(s.name)}</strong>
              ${s.address ? `<span style="font-size:.74rem;color:var(--text-muted,#777)">${esc(s.address)}</span>` : ''}
            </div>
          </div>
        `).join('');
      }

      if (!q) {
        box.innerHTML = localHtml || '<div style="padding:10px;color:var(--text-muted);font-size:.82rem">Type to search area or society name</div>';
        box.style.display = 'block';
        return;
      }

      box.innerHTML = localHtml + `
        <div id="${suggestionsId}_loader" style="padding:8px 10px;color:var(--text-muted);font-size:.78rem;display:flex;align-items:center;gap:6px;border-top:1px solid var(--border)">
          <i class="fa fa-spinner fa-spin" style="color:var(--gold)"></i> Searching global locations…
        </div>
      `;
      box.style.display = 'block';

      _societySearchDebounce = setTimeout(async () => {
        const preds = await _placesAutocomplete(q);
        let placesHtml = '';
        if (preds && preds.length > 0) {
          const localNames = new Set(matches.map(m => m.name.toLowerCase()));
          const uniquePreds = preds.filter(p => !localNames.has(p.description.toLowerCase()));
          if (uniquePreds.length > 0) {
            placesHtml = uniquePreds.map(p => `
              <div class="loc-suggest-row" onclick="selectManualSociety('${inputId}', '${suggestionsId}', '${esc(p.description)}')">
                <i class="fa fa-location-dot" style="color:var(--gold)"></i>
                <div style="display:flex;flex-direction:column;gap:1px">
                  <strong style="font-size:.84rem;color:var(--text-main,#222)">${esc(p.description)}</strong>
                </div>
              </div>
            `).join('');
          }
        }

        let finalHtml = localHtml + placesHtml;
        if (!finalHtml) {
          finalHtml = `
            <div class="loc-suggest-row" onclick="selectManualSociety('${inputId}', '${suggestionsId}', '${esc(q)}')">
              <i class="fa fa-check" style="color:var(--green)"></i>
              <span>Use "<strong>${esc(q)}</strong>"</span>
            </div>
          `;
        }
        box.innerHTML = finalHtml;
        box.style.display = 'block';
      }, 300);
    }

    function selectManualSociety(inputId, suggestionsId, societyName) {
      const input = document.getElementById(inputId);
      const box = document.getElementById(suggestionsId);
      if (input) input.value = societyName;
      if (box) box.style.display = 'none';
    }

    document.addEventListener('click', function (e) {
      ['f_society', 'sr_society'].forEach(id => {
        const input = document.getElementById(id);
        const box = document.getElementById(id + '_suggestions');
        if (box && input && !input.contains(e.target) && !box.contains(e.target)) {
          box.style.display = 'none';
        }
      });
    });
    function onSocietyChange() {
      const sel = document.getElementById('societySelect');
      if (sel) selectedSociety = sel.value;
      renderAll();
    }

    /* ═══════════ SOCIETY BOXES (Blinkit/UC-style picker, replaces the plain dropdown) ═══════════ */
    let _societyBoxesExpanded = false;
    let _societyBoxesList = [];
    function renderSocietyBoxes(list) {
      _societyBoxesList = list || [];
      const row = document.getElementById('societyBoxRow');
      if (!row) return;
      const visible = _societyBoxesExpanded ? _societyBoxesList : _societyBoxesList.slice(0, 5);
      let html = visible.map((s, i) => `
    <button type="button" class="society-box${s.name === selectedSociety ? ' active' : ''}" onclick="selectSocietyBox(${_societyBoxesList.indexOf(s)})">
      ${_societyIconBox('society-box-icon')}
      <span class="society-box-label">${esc(s.name)}</span>
    </button>`).join('');
      if (_societyBoxesList.length > 5) {
        html += _societyBoxesExpanded
          ? `<button type="button" class="society-box society-box-more" onclick="_societyBoxesExpanded=false;renderSocietyBoxes(_societyBoxesList)"><span class="society-box-icon"><i class="fa fa-chevron-up"></i></span><span class="society-box-label">Show less</span></button>`
          : `<button type="button" class="society-box society-box-more" onclick="_societyBoxesExpanded=true;renderSocietyBoxes(_societyBoxesList)"><span class="society-box-icon"><i class="fa fa-chevron-down"></i></span><span class="society-box-label">Show more (${_societyBoxesList.length - 5})</span></button>`;
      }
      row.innerHTML = html;
    }
    function selectSocietyBox(idx) {
      const s = _societyBoxesList[idx];
      if (!s) return;
      _selectSocietyByName(s.name);
    }

    /* Shared by the society boxes and search suggestions — jump straight to a
       society (or a specific category within one), same "zoom in" navigation
       either way. */
    function _selectSocietyByName(name) {
      selectedSociety = name;
      const sel = document.getElementById('societySelect');
      if (sel) sel.value = name;
      renderSocietyBoxes(_societyBoxesList);
      openSocietyPage();
    }
    let _browseSubCategory = null;

    function _navigateToCategory(society, catName, subCatName) {
      selectedSociety = society;
      const sel = document.getElementById('societySelect');
      if (sel) sel.value = society;
      renderSocietyBoxes(_societyBoxesList);
      openCategoryPage(catName, subCatName);
    }

    /* ═══════════ DRILL-DOWN NAVIGATION (Home → Society → Category → Business) ═══════════ */
    function hideAllBrowseLevels() {
      ['browseLevelSocieties', 'browseLevelSocietyPicker', 'browseLevelSociety', 'browseLevelCategory'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
    }
    function showBrowseLevel(level) {
      _browseLevel = level;
      hideAllBrowseLevels();
      const map = { societies: 'browseLevelSocieties', societyPicker: 'browseLevelSocietyPicker', society: 'browseLevelSociety', category: 'browseLevelCategory' };
      const el = document.getElementById(map[level]);
      if (el) el.style.display = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function openSocietyPage() {
      const titleEl = document.getElementById('societyPageTitle');
      if (titleEl) titleEl.textContent = selectedSociety;
      showBrowseLevel('society');
      renderCategorySections('societyCategorySectionsContainer');
      renderAll();
    }
    function backToSocieties() {
      showBrowseLevel('societies');
    }
    function backToSociety() {
      _browseCategory = null;
      _browseSubCategory = null;
      _browseProductQuery = null;
      showBrowseLevel('society');
      buildTabs();
    }
    function openCategoryPage(catName, subCatName) {
      _browseCategory = catName;
      _browseSubCategory = subCatName || null;
      _browseProductQuery = null;
      const titleEl = document.getElementById('categoryPageTitle');
      if (titleEl) titleEl.textContent = subCatName ? `${subCatName} (${catName}) in ${selectedSociety}` : `${catName} in ${selectedSociety}`;
      showBrowseLevel('category');
      buildTabs();
      renderCategoryPage();
    }
    function renderCategoryPage() {
      const grid = document.getElementById('bizBoxGrid');
      if (!grid) return;
      const q = (document.getElementById('searchInput').value || '').trim();
      let items;
      const browseData = getBrowseData();
      if (_browseProductQuery) {
        const pq = _browseProductQuery.toLowerCase();
        items = browseData.filter(d => (d.society || 'Prateek Laurel') === selectedSociety && (d.menu || []).some(it => (it.name || '').toLowerCase() === pq));
      } else if (_browseSubCategory) {
        const subLower = _browseSubCategory.toLowerCase();
        const catLower = (_browseCategory || '').toLowerCase();
        let catItems = browseData.filter(d => (d.cat || '').toLowerCase() === catLower && (d.society || 'Prateek Laurel') === selectedSociety);
        let subItems = catItems.filter(d =>
          (d.speciality || '').toLowerCase().includes(subLower) ||
          (d.desc || '').toLowerCase().includes(subLower) ||
          (d.venture || '').toLowerCase().includes(subLower) ||
          (d.menu || []).some(m => (m.name || '').toLowerCase().includes(subLower))
        );
        items = subItems.length ? subItems : catItems;
      } else {
        items = browseData.filter(d => d.cat === _browseCategory && (d.society || 'Prateek Laurel') === selectedSociety);
      }
      if (q) items = items.filter(d => itemMatchesQuery(d, q));
      grid.innerHTML = items.length
        ? items.map(item => makeBizBox(item)).join('')
        : renderNoServiceProtocolHTML(_browseSubCategory || _browseCategory || 'this category');
    }

    /* ═══════════ GLOBAL CATEGORY / PRODUCT BOXES (Home, below the society boxes) ═══════════ */
    function onSubCategoryTileClick(subCatName, catName) {
      if (_browseLevel === 'society' || selectedSociety) {
        openCategoryPage(catName, subCatName);
      } else {
        openSocietyPickerForSubCategory(subCatName, catName);
      }
    }

    let _catExpanded = {};
    function renderCategorySections(containerId) {
      const targetId = containerId || 'categorySectionsContainer';
      const container = document.getElementById(targetId);
      if (!container) return;

      let html = CATS.map((c) => {
        const subList = c.subcategories || [];
        const expKey = c.id + '_' + targetId;
        const isExpanded = !!_catExpanded[expKey];
        const initialLimit = 7;
        const visibleSubs = isExpanded ? subList : subList.slice(0, initialLimit);
        const hasMore = subList.length > initialLimit;

        let subHtml = visibleSubs.map(sub => {
          const iconMarkup = sub.image
            ? `<img src="${sub.image}" alt="${esc(sub.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:14px" onerror="this.onerror=null;this.parentNode.innerHTML='${sub.emoji || '🏪'}';">`
            : (sub.emoji || '🏪');
          return `
          <button type="button" class="society-box" onclick="onSubCategoryTileClick('${sub.name.replace(/'/g, "\\'")}', '${c.name.replace(/'/g, "\\'")}')">
            <span class="society-box-icon" style="background:${c.bg || '#FFE8CC'};padding:0;overflow:hidden">${iconMarkup}</span>
            <span class="society-box-label">${esc(sub.name)}</span>
          </button>`;
        }).join('');

        if (hasMore) {
          subHtml += isExpanded
            ? `<button type="button" class="society-box society-box-more" onclick="_catExpanded['${expKey}']=false;renderCategorySections('${targetId}')"><span class="society-box-icon"><i class="fa fa-chevron-up"></i></span><span class="society-box-label">Show less</span></button>`
            : `<button type="button" class="society-box society-box-more" onclick="_catExpanded['${expKey}']=true;renderCategorySections('${targetId}')"><span class="society-box-icon"><i class="fa fa-chevron-down"></i></span><span class="society-box-label">Show more (${subList.length - initialLimit})</span></button>`;
        }

        return `
        <div class="cat-section-block" style="max-width:1000px;margin:24px auto 0">
          <div class="cat-box-label" style="padding:0 20px;display:flex;align-items:center;gap:8px">
            <span style="font-weight:700;color:var(--text);font-size:1.02rem">${esc(c.name)}</span>
          </div>
          <div class="society-box-section" style="padding-top:10px">
            <div class="society-box-row">
              ${subHtml}
            </div>
          </div>
        </div>`;
      }).join('');

      container.innerHTML = html;
    }
    const renderGlobalCategoryBoxes = () => renderCategorySections('categorySectionsContainer');

    function openSocietyPickerForSubCategory(subCatName, catName) {
      const titleEl = document.getElementById('societyPickerTitle');
      if (titleEl) titleEl.textContent = `Societies with ${subCatName} (${catName})`;
      
      const subLower = (subCatName || '').toLowerCase();
      const catLower = (catName || '').toLowerCase();
      const counts = {};

      const matchingVendors = getBrowseData().filter(d => {
        if (!isVendorWithin5km(d)) return false;
        const matchesCat = (d.cat || '').toLowerCase() === catLower;
        const matchesSub = (d.subCat || '').toLowerCase().includes(subLower) ||
          (d.speciality || '').toLowerCase().includes(subLower) ||
          (d.desc || '').toLowerCase().includes(subLower) ||
          (d.venture || '').toLowerCase().includes(subLower) ||
          (d.menu || []).some(m => (m.name || '').toLowerCase().includes(subLower));
        return matchesCat || matchesSub;
      });

      matchingVendors.forEach(d => {
        const society = d.society || 'Prateek Laurel';
        counts[society] = (counts[society] || 0) + 1;
      });

      const row = document.getElementById('societyPickerRow');
      const catEsc = catName.replace(/'/g, "\\'");
      const subEsc = subCatName.replace(/'/g, "\\'");
      const societies = Object.keys(counts);

      if (societies.length) {
        row.innerHTML = societies.sort((a, b) => counts[b] - counts[a]).map(society => `
      <button type="button" class="society-box" onclick="_navigateToCategory('${society.replace(/'/g, "\\'")}','${catEsc}','${subEsc}')">
        ${_societyIconBox('society-box-icon')}
        <span class="society-box-label">${esc(society)} (${counts[society]})</span>
      </button>`).join('');
      } else {
        row.innerHTML = renderNoServiceProtocolHTML(subCatName || catName);
      }
      showBrowseLevel('societyPicker');
    }

    function renderNoServiceProtocolHTML(serviceName) {
      const locName = selectedSociety || (document.getElementById('locationBarText')?.textContent) || 'this area';
      const cleanLocName = esc(locName.replace('Detecting your location…', 'this area').replace('Location detected — tap to set it ›', 'this area'));
      return `
        <div class="empty-state" style="grid-column:1/-1;width:100%;padding:36px 20px;text-align:center;background:var(--white);border-radius:20px;border:1.5px dashed var(--border);box-shadow:var(--shadow)">
          <div style="width:64px;height:64px;border-radius:50%;background:#fff3e0;color:#e65100;display:inline-flex;align-items:center;justify-content:center;font-size:1.8rem;margin-bottom:14px">
            <i class="fa fa-map-location-dot"></i>
          </div>
          <h3 style="font-weight:800;color:var(--text);margin-bottom:6px;font-size:1.08rem">Currently, no service is available in this area.</h3>
          <p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:20px;max-width:380px;margin-left:auto;margin-right:auto;line-height:1.5">
            If you want your service to be present here, notify us here.
          </p>
          <button type="button" class="btn btn-primary" id="noServiceNotifyBtn" onclick="triggerServiceExpansionRequest('${esc((serviceName || 'Service').replace(/'/g, "\\'"))}', '${cleanLocName.replace(/'/g, "\\'")}')" style="border-radius:12px;padding:12px 24px;font-weight:700;display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg, #ff9933 0%, #b85c1a 100%);color:#fff;border:none;box-shadow:0 4px 14px rgba(255,153,51,0.35)">
            <i class="fa fa-bell"></i> Notify Me
          </button>
        </div>
      `;
    }

    async function triggerServiceExpansionRequest(serviceName, locationName) {
      const btn = document.getElementById('noServiceNotifyBtn');
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i class="fa fa-spinner fa-spin"></i> Sending request to admin…`;
      }

      const coords = getCurrentUserCoords();
      const userName = currentCustomer ? (currentCustomer.name || 'Customer') : 'Customer User';
      const userEmail = currentCustomer ? currentCustomer.email : (auth && auth.currentUser ? auth.currentUser.email : '');
      const userMobile = currentCustomer ? (currentCustomer.mobile || currentCustomer.phone || '') : '';

      try {
        if (db) {
          await db.collection('service_expansion_requests').add({
            serviceName: serviceName || 'General Expansion',
            locationName: locationName || 'Current Location',
            lat: coords.lat,
            lng: coords.lng,
            userName: userName,
            userEmail: userEmail,
            userMobile: userMobile,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        }

        const ejsPubKey = SITE_CONFIG.ejsPublicKey || '';
        const ejsService = SITE_CONFIG.ejsServiceId || '';
        const ejsTemplate = SITE_CONFIG.ejsBusinessTemplateId || SITE_CONFIG.ejsTemplateId || '';
        const adminEmail = SITE_CONFIG.contactEmail || 'admin@tyntron.co.in';

        if (ejsPubKey && ejsService && ejsTemplate) {
          try {
            await emailjs.init({ publicKey: ejsPubKey });
            await emailjs.send(ejsService, ejsTemplate, {
              from_name: userName || 'TynTron Customer',
              from_email: userEmail || 'noreply@tyntron.co.in',
              mobile: userMobile || 'Not provided',
              subject: `📍 Service Expansion Request: ${serviceName} in ${locationName}`,
              message: `Service Expansion Alert!\n\nA user requested service expansion on TynTron:\n\n`
                + `• Requested Service: ${serviceName}\n`
                + `• Location Area: ${locationName}\n`
                + `• GPS Coordinates: Lat ${coords.lat}, Lng ${coords.lng}\n`
                + `• Customer Name: ${userName}\n`
                + `• Customer Email: ${userEmail || 'Not provided'}\n`
                + `• Customer Mobile: ${userMobile || 'Not provided'}\n`
                + `• Timestamp: ${new Date().toLocaleString()}\n\n`
                + `Please review this area for business onboarding and business expansion planning.`,
              to_email: adminEmail
            });
          } catch (eErr) {
            console.warn('Failed to send expansion request email:', eErr);
          }
        }

        if (btn) {
          btn.className = 'btn';
          btn.style.background = '#2e7d32';
          btn.style.color = '#ffffff';
          btn.style.boxShadow = '0 4px 14px rgba(46, 125, 50, 0.35)';
          btn.innerHTML = `<i class="fa fa-circle-check"></i> We've notified admin for service expansion`;
        }
        showToast(`✓ Expansion notification & email sent to admin for ${locationName}!`);
      } catch (e) {
        showToast(`✓ Expansion notification sent to admin for ${locationName}!`);
        if (btn) {
          btn.className = 'btn';
          btn.style.background = '#2e7d32';
          btn.style.color = '#ffffff';
          btn.innerHTML = `<i class="fa fa-circle-check"></i> We've notified admin for service expansion`;
        }
      }
    }

    function _globalProductsList() {
      const seen = new Map();
      getBrowseData().forEach(d => {
        (d.menu || []).forEach(it => {
          const name = (it.name || '').trim();
          if (!name) return;
          const key = name.toLowerCase();
          if (!seen.has(key)) seen.set(key, { label: name, count: 0, cat: d.cat });
          seen.get(key).count++;
        });
      });
      return Array.from(seen.values()).sort((a, b) => b.count - a.count);
    }
    let _globalProdExpanded = false;
    function renderGlobalProductBoxes() {
      const section = document.getElementById('globalProductsSection');
      if (section) section.style.display = SITE_CONFIG.showProductListing ? '' : 'none';
      const row = document.getElementById('globalProductRow');
      if (!row) return;
      if (!SITE_CONFIG.showProductListing) return;
      const list = _globalProductsList();
      const visible = _globalProdExpanded ? list : list.slice(0, 5);
      let html = visible.map(p => `
    <button type="button" class="society-box" onclick="openSocietyPickerForProduct('${p.label.replace(/'/g, "\\'")}')">
      ${_productIconBox('society-box-icon', p.label, p.cat)}
      <span class="society-box-label">${esc(p.label)}</span>
    </button>`).join('');
      if (list.length > 5) {
        html += _globalProdExpanded
          ? `<button type="button" class="society-box society-box-more" onclick="_globalProdExpanded=false;renderGlobalProductBoxes()"><span class="society-box-icon"><i class="fa fa-chevron-up"></i></span><span class="society-box-label">Show less</span></button>`
          : `<button type="button" class="society-box society-box-more" onclick="_globalProdExpanded=true;renderGlobalProductBoxes()"><span class="society-box-icon"><i class="fa fa-chevron-down"></i></span><span class="society-box-label">Show more (${list.length - 5})</span></button>`;
      }
      row.innerHTML = html;
    }

    function openSocietyPickerForCategory(catName) {
      const titleEl = document.getElementById('societyPickerTitle');
      if (titleEl) titleEl.textContent = `Which society has ${catName}?`;
      const counts = {};
      getBrowseData().forEach(d => {
        if (d.cat !== catName) return;
        const society = d.society || 'Prateek Laurel';
        counts[society] = (counts[society] || 0) + 1;
      });
      const row = document.getElementById('societyPickerRow');
      const catEsc = catName.replace(/'/g, "\\'");
      row.innerHTML = Object.keys(counts).length ? Object.keys(counts).sort((a, b) => counts[b] - counts[a]).map(society => `
    <button type="button" class="society-box" onclick="_navigateToCategory('${society.replace(/'/g, "\\'")}','${catEsc}')">
      ${_societyIconBox('society-box-icon')}
      <span class="society-box-label">${esc(society)} (${counts[society]})</span>
    </button>`).join('') : `<div class="empty-state"><i class="fa fa-store-slash"></i><p>No societies have this category yet.</p></div>`;
      showBrowseLevel('societyPicker');
    }

    function openSocietyPickerForProduct(productName) {
      const titleEl = document.getElementById('societyPickerTitle');
      if (titleEl) titleEl.textContent = `Which society has ${productName}?`;
      const pq = productName.toLowerCase();
      const counts = {};
      getBrowseData().forEach(d => {
        if (!(d.menu || []).some(it => (it.name || '').toLowerCase() === pq)) return;
        const society = d.society || 'Prateek Laurel';
        counts[society] = (counts[society] || 0) + 1;
      });
      const row = document.getElementById('societyPickerRow');
      const prodEsc = productName.replace(/'/g, "\\'");
      row.innerHTML = Object.keys(counts).length ? Object.keys(counts).sort((a, b) => counts[b] - counts[a]).map(society => `
    <button type="button" class="society-box" onclick="_navigateToProductResults('${society.replace(/'/g, "\\'")}','${prodEsc}')">
      ${_societyIconBox('society-box-icon')}
      <span class="society-box-label">${esc(society)} (${counts[society]})</span>
    </button>`).join('') : `<div class="empty-state"><i class="fa fa-store-slash"></i><p>No societies have this yet.</p></div>`;
      showBrowseLevel('societyPicker');
    }

    function _navigateToProductResults(society, productName) {
      selectedSociety = society;
      const sel = document.getElementById('societySelect');
      if (sel) sel.value = society;
      renderSocietyBoxes(_societyBoxesList);
      const pq = productName.toLowerCase();
      const matches = getBrowseData().filter(d => (d.society || 'Prateek Laurel') === society && (d.menu || []).some(it => (it.name || '').toLowerCase() === pq));
      if (matches.length === 1) {
        _navigateToCategory(society, matches[0].cat);
        openMenuModal(matches[0].id);
        return;
      }
      _browseCategory = null;
      _browseProductQuery = productName;
      const titleEl = document.getElementById('categoryPageTitle');
      if (titleEl) titleEl.textContent = `${productName} in ${society}`;
      showBrowseLevel('category');
      buildTabs();
      renderCategoryPage();
    }
    function makeBizBox(item) {
      // Real vendor photo if uploaded; otherwise a cartoon-style category icon reads as much
      // more "alive" than a flat placeholder logo, matching Blinkit/Zomato/Zepto-style tiles.
      const imgSrc = item.image || IMGS[item.id] || '';
      const img = imgSrc ? `<img src="${imgSrc}" alt="${esc(item.venture)}" loading="lazy">` : _categoryFallbackFill(item.cat);
      const isClosed = isVendorClosed(item);
      const closedBadge = isClosed ? `<span class="tile-closed-badge"><i class="fa fa-moon"></i> CLOSED</span>` : '';
      return `<div class="biz-box${isClosed ? ' shop-closed-box' : ''}" onclick="openMenuModal('${item.id}')">
    <div class="biz-box-img" style="position:relative">
      ${closedBadge}
      ${img}
    </div>
    <div class="biz-box-body">
      <div class="biz-box-name">${esc(item.venture)}</div>
      <div class="biz-box-spec">${esc(item.speciality || '')}</div>
    </div>
  </div>`;
    }
    /* Reverse-geocode lat/lng into a short readable address via Google Maps Geocoding API. */
    async function _reverseGeocode(lat, lng) {
      const key = SITE_CONFIG.gmapsApiKey || '';
      if (!key) return null;
      try {
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${encodeURIComponent(key)}`);
        const data = await res.json();
        if (data.status !== 'OK' || !data.results?.length) return null;
        // Prefer a precise result (premise/sublocality) over the full formatted_address, and
        // trim to the first 2-3 comma segments so it reads like "TOWER-C, Nirvana Country, Sec 50".
        const best = data.results.find(r => r.types?.some(t => ['premise', 'sublocality_level_1', 'sublocality'].includes(t))) || data.results[0];
        const parts = best.formatted_address.split(',').map(s => s.trim());
        return parts.slice(0, 3).join(', ');
      } catch (e) { console.warn('Reverse geocoding failed:', e.message); return null; }
    }

    /* Google's legacy Places REST endpoints (nearbysearch/autocomplete/details) don't send
       CORS headers, so browsers silently block fetch() calls to them — unlike Geocoding,
       which does support CORS and is why reverse-geocoding worked while Places didn't.
       The Places *JavaScript* SDK is Google's browser-safe path: load it via <script>, then
       call it as an object with callbacks (no fetch, no CORS issue). Loaded lazily, once,
       as soon as the API key is known. Needs the "Maps JavaScript API" enabled alongside
       Geocoding API and Places API in Google Cloud Console. */
    /* When the "Maps JavaScript API" isn't activated on the Cloud project, Google's SDK
       doesn't throw or reject — it logs an internal error and the callback just never
       fires, so a bare Promise around it hangs forever. Race it against a timeout so
       every caller still resolves to a safe fallback within a few seconds. */
    function _withTimeout(promise, ms, fallback) {
      return Promise.race([
        promise,
        new Promise(resolve => setTimeout(() => resolve(fallback), ms)),
      ]);
    }

    let _gmapsScriptPromise = null;
    function _ensureGoogleMapsScript() {
      if (_gmapsScriptPromise) return _gmapsScriptPromise;
      _gmapsScriptPromise = new Promise(resolve => {
        const key = SITE_CONFIG.gmapsApiKey || '';
        if (!key) { resolve(false); return; }
        if (window.google?.maps?.places) { resolve(true); return; }
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&libraries=places`;
        script.async = true;
        script.onload = () => resolve(!!window.google?.maps?.places);
        script.onerror = () => { console.warn('Failed to load Google Maps JS SDK'); resolve(false); };
        document.head.appendChild(script);
      });
      return _gmapsScriptPromise;
    }
    /* google.maps.places.PlacesService / AutocompleteService are deprecated for any
       Google Cloud project created after March 1 2025 — calls to them never throw, the
       callback just never fires (see _withTimeout above). The replacements live behind
       google.maps.importLibrary('places'): Place (searchByText/fetchFields) and
       AutocompleteSuggestion. Both require "Places API (New)" enabled in Cloud Console,
       in addition to the legacy Places API. */
    let _placesLibraryPromise = null;
    function _getPlacesLibrary() {
      if (!_placesLibraryPromise) _placesLibraryPromise = google.maps.importLibrary('places');
      return _placesLibraryPromise;
    }

    /* Discover nearby residential societies/apartments via Google Places — so the dropdown
       shows real nearby communities even ones TynTron hasn't onboarded yet, not just the
       handful with vendors already registered. Every failure mode here (SDK not loaded, API
       not activated on the Cloud project, network hiccup, etc.) must resolve to [] rather
       than throw/reject — an uncaught rejection here would abort the whole location pipeline
       and leave the location bar stuck on "Detecting…" forever.
       Text Search (New) has no free-text "keyword" param like the legacy nearbySearch did —
       it takes one textQuery per call — so several likely society-naming words are searched
       in parallel and merged/deduped by name. */
    async function _placesNearbySocieties(lat, lng) {
      try {
        const ready = await _ensureGoogleMapsScript();
        if (!ready) return [];
        const lib = await _getPlacesLibrary();
        if (!lib?.Place) return [];
        const { Place } = lib;
        const queries = ['society', 'apartments', 'residency', 'enclave'];
        const searchAll = Promise.all(queries.map(q =>
          Place.searchByText({
            textQuery: q,
            fields: ['displayName', 'location'],
            locationBias: { center: { lat, lng }, radius: 5000 },
            maxResultCount: 10,
            language: 'en-US', region: 'in',
          }).then(r => r.places || []).catch(e => { console.warn('Places text search ("' + q + '") failed:', e.message); return []; })
        )).catch(() => []);
        const resultsByQuery = await _withTimeout(searchAll, 6000, []);
        const seen = new Set();
        const merged = [];
        for (const list of (resultsByQuery || [])) {
          for (const p of (list || [])) {
            if (!p?.displayName || !p?.location) continue;
            const key = p.displayName.toLowerCase();
            if (seen.has(key)) continue;
            seen.add(key);
            merged.push({ name: p.displayName, lat: p.location.lat(), lng: p.location.lng() });
          }
        }
        return merged.slice(0, 20);
      } catch (e) { console.warn('Places nearby search failed:', e.message); return []; }
    }

    /* Shared pipeline for "here's a lat/lng, now figure out nearby societies + address" —
       used by both GPS auto-detect and manual location search, so they behave identically.
       Wrapped in try/catch/finally as a last line of defense: whatever goes wrong inside,
       the location bar must still end up with SOME readable text, never stuck on
       "Detecting your location…" indefinitely. */
    async function _applyDetectedLocation(lat, lng, knownAddress) {
      _currentLocationCoords = { lat: +lat, lng: +lng };
      const barText = document.getElementById('locationBarText');
      const barIcon = document.getElementById('locationBarIcon');
      if (barIcon) barIcon.className = 'fa fa-location-crosshairs loc-icon';
      let address = knownAddress || null;
      try {
        // GPS/search can resolve before Firestore config does — wait for it so gmapsApiKey and
        // the full societies list are actually available (otherwise this silently sees an empty
        // config and only the DEFAULT_SOCIETIES fallback ever shows up).
        if (window._configLoadPromise) await window._configLoadPromise;

        // Societies TynTron already has content for, within 5km (always shown first).
        const configuredNearby = _societyList().filter(s => {
          if (!s.lat || !s.lng) return false;
          return _haversineDist(lat, lng, +s.lat, +s.lng) <= 5000;
        });

        // Any OTHER nearby society/community discovered via Google Places, even if
        // TynTron has no vendors there yet (selecting one shows a friendly empty state).
        const discovered = await _placesNearbySocieties(lat, lng);
        const configuredNames = new Set(_societyList().map(s => s.name.toLowerCase()));
        const discoveredOnly = discovered.filter(d => !configuredNames.has(d.name.toLowerCase()));
        const merged = [...configuredNearby, ...discoveredOnly.map(d => ({ name: d.name }))];

        if (merged.length) {
          _nearbySocieties = merged;
          buildSocietySelector(merged);
          const m = _nearestSociety(lat, lng);
          if (m && m !== selectedSociety) { selectedSociety = m; buildSocietySelector(merged); renderAll(); }
        } // else: keep showing the full list — nothing detected nearby yet.

        if (!address) address = await _reverseGeocode(lat, lng);
      } catch (e) {
        console.warn('Location detection pipeline failed:', e.message);
      } finally {
        if (barText) barText.textContent = address || 'Location detected — tap to set it ›';
      }
    }

    /* ═══════════ FULL-SCREEN LOCATION SPLASH + NO-INTERNET STATE ═══════════ */
    function hideLocationSplash() {
      const el = document.getElementById('locationSplash');
      if (!el || el.classList.contains('hide')) return;
      showOnboardingSplash();
      el.classList.add('hide');
      setTimeout(() => {
        el.style.display = 'none';
      }, 320);
    }

    /* ═══════════ FULL-SCREEN GET STARTED ONBOARDING CAROUSEL SPLASH ═══════════ */
    const ONBOARDING_SVG_1 = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="90" fill="#E8F1F8"/>
  <circle cx="100" cy="100" r="65" fill="#4B9CD3" opacity="0.85"/>
  <path d="M50 85 C65 70, 90 70, 110 80 C130 90, 150 75, 160 85 C155 120, 130 155, 100 165 C60 150, 45 120, 50 85 Z" fill="#71C172" opacity="0.9"/>
  <circle cx="70" cy="60" r="10" fill="#FF8A8A" opacity="0.3"/>
  <circle cx="140" cy="65" r="12" fill="#FDD835" opacity="0.4"/>
  <circle cx="45" cy="120" r="8" fill="#4B9CD3" opacity="0.4"/>
  <line x1="70" y1="60" x2="100" y2="90" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="140" y1="65" x2="115" y2="90" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="3 3"/>
  <g transform="translate(45, 65)">
    <circle cx="20" cy="15" r="9" fill="#1E293B"/>
    <path d="M5 45 C5 30, 12 25, 20 25 C28 25, 35 30, 35 45 Z" fill="#F59E0B"/>
    <path d="M20 25 L35 38 L25 45 Z" fill="#D97706"/>
  </g>
  <g transform="translate(115, 65)">
    <circle cx="20" cy="15" r="9" fill="#1E293B"/>
    <path d="M5 45 C5 30, 12 25, 20 25 C28 25, 35 30, 35 45 Z" fill="#0284C7"/>
    <path d="M12 25 L5 38 L15 45 Z" fill="#0369A1"/>
  </g>
  <circle cx="100" cy="98" r="10" fill="#FDBA74"/>
  <path d="M92 98 L108 98" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/>
  <rect x="142" y="125" width="22" height="22" rx="3" fill="#F59E0B"/>
  <path d="M142 134 H164 M153 125 V147" stroke="#D97706" stroke-width="1.5"/>
  <rect x="156" y="112" width="16" height="16" rx="2" fill="#FBBF24"/>
</svg>`;

    const ONBOARDING_SVG_2 = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="90" fill="#EBF7EE"/>
  <path d="M100 35 L40 80 V160 H160 V80 Z" fill="#FFFFFF" stroke="#059669" stroke-width="4"/>
  <path d="M35 80 L100 30 L165 80" stroke="#059669" stroke-width="6" stroke-linecap="round"/>
  <rect x="75" y="105" width="50" height="55" rx="4" fill="#10B981" opacity="0.15"/>
  <rect x="85" y="115" width="30" height="45" fill="#10B981"/>
  <circle cx="92" cy="138" r="2" fill="#FFFFFF"/>
  <circle cx="100" cy="70" r="16" fill="#F43F5E"/>
  <path d="M93 68 C93 64 97 62 100 66 C103 62 107 64 107 68 C107 73 100 77 100 77 C100 77 93 73 93 68 Z" fill="#FFFFFF"/>
  <circle cx="45" cy="120" r="18" fill="#FDE047" opacity="0.6"/>
  <text x="45" y="126" text-anchor="middle" font-size="18">🍰</text>
  <circle cx="155" cy="120" r="18" fill="#60A5FA" opacity="0.6"/>
  <text x="155" y="126" text-anchor="middle" font-size="18">🎁</text>
</svg>`;

    const ONBOARDING_SVG_3 = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="90" fill="#EFF6FF"/>
  <rect x="60" y="35" width="80" height="135" rx="14" fill="#1E293B"/>
  <rect x="66" y="48" width="68" height="108" rx="6" fill="#FFFFFF"/>
  <circle cx="100" cy="42" r="3" fill="#64748B"/>
  <circle cx="100" cy="95" r="28" fill="#25D366"/>
  <path d="M88 107 L86 118 L96 114 C97 115 99 115 100 115 C111 115 120 106 120 95 C120 84 111 75 100 75 C89 75 80 84 80 95 C80 99 81 103 84 106 Z" fill="#25D366"/>
  <path d="M92 88 C91 87 90 87 89 88 C88 89 87 91 88 93 C89 96 92 101 96 104 C100 107 104 109 107 109 C109 109 111 108 111 107 C112 106 113 104 112 103 C111 102 109 101 107 100 C106 100 105 101 104 102 C103 101 100 98 98 96 C97 94 98 93 99 92 C99 91 99 90 98 89 L95 86 Z" fill="#FFFFFF"/>
  <circle cx="130" cy="65" r="14" fill="#3B82F6"/>
  <path d="M124 65 L128 69 L136 61" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const DEFAULT_ONBOARDING_SLIDES = [
      {
        title: "Connecti ng millions of buyers & suppliers worldwide since 35 years",
        desc: "Discover and support trusted neighbourhood home businesses, creators, and local services in your society.",
        image: "",
        svg: ONBOARDING_SVG_1
      },
      {
        title: "Support Neighbourhood Home Entrepreneurs",
        desc: "Order fresh homemade food, artisanal baked goods, unique handicrafts, and tutoring direct from neighbours.",
        image: "",
        svg: ONBOARDING_SVG_2
      },
      {
        title: "Hassle-Free Direct Ordering via WhatsApp",
        desc: "Chat directly with verified businesses, track order logs, and get fast doorstep deliveries with zero middlemen.",
        image: "",
        svg: ONBOARDING_SVG_3
      }
    ];

    let _currentOnboardingIndex = 0;
    let _onboardingTouchStartX = 0;

    function _getOnboardingSlides() {
      const list = SITE_CONFIG.onboardingSlides;
      return (Array.isArray(list) && list.length) ? list : DEFAULT_ONBOARDING_SLIDES;
    }

    function showOnboardingSplash() {
      const slides = _getOnboardingSlides();
      if (!slides || !slides.length) return;
      const el = document.getElementById('onboardingSplash');
      if (!el) return;

      _currentOnboardingIndex = 0;
      renderOnboardingBars();
      renderOnboardingSlide(0);

      el.style.display = 'flex';
      requestAnimationFrame(() => { el.classList.remove('hide'); });

      const carousel = document.getElementById('onboardingCarousel');
      if (carousel && !carousel._hasSwipe) {
        carousel._hasSwipe = true;
        carousel.addEventListener('touchstart', e => {
          _onboardingTouchStartX = e.touches[0].clientX;
        }, { passive: true });
        carousel.addEventListener('touchend', e => {
          const endX = e.changedTouches[0].clientX;
          const diffX = endX - _onboardingTouchStartX;
          if (diffX < -40) { nextOnboardingSlide(); }
          else if (diffX > 40) { prevOnboardingSlide(); }
        }, { passive: true });
      }
    }

    function renderOnboardingBars() {
      const slides = _getOnboardingSlides();
      const container = document.getElementById('onboardingBars');
      if (!container) return;
      container.innerHTML = slides.map((_, i) =>
        `<div class="onboarding-bar ${i === _currentOnboardingIndex ? 'active' : ''}" title="Slide ${i + 1}" onclick="goToOnboardingSlide(${i})"></div>`
      ).join('');
    }

    function renderOnboardingSlide(index) {
      const slides = _getOnboardingSlides();
      if (index < 0 || index >= slides.length) return;
      _currentOnboardingIndex = index;
      const slide = slides[index];

      renderOnboardingBars();

      const illuEl = document.getElementById('onboardingIllustration');
      const titleEl = document.getElementById('onboardingTitle');
      const descEl = document.getElementById('onboardingDesc');
      const btnEl = document.getElementById('onboardingNextBtn');

      if (illuEl) {
        if (slide.image && slide.image.trim()) {
          const fallbackSvg = slide.svg || [ONBOARDING_SVG_1, ONBOARDING_SVG_2, ONBOARDING_SVG_3][index % 3];
          illuEl.innerHTML = `<img src="${esc(slide.image)}" alt="Illustration" onerror="this.onerror=null;this.parentElement.innerHTML=\`${fallbackSvg.replace(/`/g, '\\`')}\`"/>`;
        } else if (slide.svg) {
          illuEl.innerHTML = slide.svg;
        } else {
          const fallbackSvg = [ONBOARDING_SVG_1, ONBOARDING_SVG_2, ONBOARDING_SVG_3][index % 3];
          illuEl.innerHTML = fallbackSvg;
        }
      }

      if (titleEl) titleEl.textContent = slide.title || '';
      if (descEl) descEl.textContent = slide.desc || '';

      if (btnEl) {
        if (index === slides.length - 1) {
          btnEl.innerHTML = `Get Started <i class="fa fa-chevron-right" style="font-size:.85rem"></i>`;
        } else {
          btnEl.innerHTML = `Next <i class="fa fa-chevron-right" style="font-size:.85rem"></i>`;
        }
      }
    }

    function goToOnboardingSlide(index) {
      renderOnboardingSlide(index);
    }

    function nextOnboardingSlide() {
      const slides = _getOnboardingSlides();
      if (_currentOnboardingIndex < slides.length - 1) {
        renderOnboardingSlide(_currentOnboardingIndex + 1);
      } else {
        closeOnboardingSplash();
      }
    }

    function prevOnboardingSlide() {
      if (_currentOnboardingIndex > 0) {
        renderOnboardingSlide(_currentOnboardingIndex - 1);
      }
    }

    function closeOnboardingSplash() {
      const el = document.getElementById('onboardingSplash');
      if (!el) return;
      el.classList.add('hide');
      setTimeout(() => { el.style.display = 'none'; }, 320);
    }
    function showNoInternetScreen() {
      const el = document.getElementById('noInternetScreen');
      if (el) el.style.display = 'flex';
    }
    function hideNoInternetScreen() {
      const el = document.getElementById('noInternetScreen');
      if (el) el.style.display = 'none';
    }
    function _retryConnection() {
      if (navigator.onLine) { location.reload(); }
      else { showToast('Still no internet connection'); }
    }
    window.addEventListener('online', hideNoInternetScreen);
    window.addEventListener('offline', showNoInternetScreen);

    function detectSociety() {
      buildSocietySelector();
      const barText = document.getElementById('locationBarText');
      const barIcon = document.getElementById('locationBarIcon');
      // Safety net: never let the splash get stuck on-screen if something hangs unexpectedly.
      const splashSafety = setTimeout(hideLocationSplash, 9000);
      if (!navigator.onLine || !navigator.geolocation) {
        hideLocationSplash();
        if (barText) barText.textContent = 'Location unavailable — tap to set it ›';
        return;
      }
      if (barText) barText.textContent = 'Detecting your location…';
      if (barIcon) barIcon.className = 'fa fa-spinner fa-spin loc-icon';
      navigator.geolocation.getCurrentPosition(async pos => {
        await _applyDetectedLocation(pos.coords.latitude, pos.coords.longitude);
        clearTimeout(splashSafety);
        hideLocationSplash();
      }, err => {
        if (barText) barText.textContent = 'Location unavailable — tap to set it ›';
        if (barIcon) barIcon.className = 'fa fa-location-crosshairs loc-icon';
        if (err && err.code === 1) {
          const banner = document.getElementById('locationPermBanner');
          if (banner) banner.style.display = 'flex';
        }
        clearTimeout(splashSafety);
        hideLocationSplash();
      }, { timeout: 8000, maximumAge: 300000 });
    }

    /* ═══════════ MANUAL LOCATION SEARCH (Blinkit/Zepto-style "change location") ═══════════ */
    /* One AutocompleteSessionToken groups all the keystroke-by-keystroke autocomplete calls
       plus the final fetchFields() call into a single billing session — created fresh each
       time the search modal opens, and cleared once a place is picked. */
    let _locSearchSessionToken = null;
    async function _placesAutocomplete(input) {
      try {
        const ready = await _ensureGoogleMapsScript();
        if (!ready) return [];
        const lib = await _getPlacesLibrary();
        if (!lib?.AutocompleteSuggestion) return [];
        const { AutocompleteSuggestion, AutocompleteSessionToken } = lib;
        if (!_locSearchSessionToken) _locSearchSessionToken = new AutocompleteSessionToken();
        return await _withTimeout(
          AutocompleteSuggestion.fetchAutocompleteSuggestions({
            input,
            includedRegionCodes: ['in'],
            language: 'en-US', region: 'in',
            sessionToken: _locSearchSessionToken,
          }).then(({ suggestions }) => (suggestions || [])
            .filter(s => s.placePrediction)
            .map(s => ({ description: s.placePrediction.text.toString(), placeId: s.placePrediction.placeId }))
            .slice(0, 8)
          ).catch(e => { console.warn('Autocomplete failed:', e.message); return []; }),
          6000, []
        );
      } catch (e) { console.warn('Places autocomplete failed:', e.message); return []; }
    }

    async function _placeDetails(placeId) {
      try {
        const ready = await _ensureGoogleMapsScript();
        if (!ready) return null;
        const lib = await _getPlacesLibrary();
        if (!lib?.Place) return null;
        const place = new lib.Place({ id: placeId });
        return await _withTimeout(
          place.fetchFields({ fields: ['location', 'formattedAddress'] })
            .then(({ place }) => {
              if (!place?.location) return null;
              return { lat: place.location.lat(), lng: place.location.lng(), address: place.formattedAddress };
            })
            .catch(e => { console.warn('Place details failed:', e.message); return null; }),
          6000, null
        );
      } catch (e) { console.warn('Place details failed:', e.message); return null; }
    }

    function openLocationSearchModal() {
      const input = document.getElementById('locSearchInput');
      input.value = '';
      document.getElementById('locSearchSuggestions').innerHTML = '';
      document.getElementById('locationSearchModal').classList.add('open');
      _locSearchSessionToken = null;
      setTimeout(() => input.focus(), 150);
    }

    let _locSearchDebounce = null;
    function _onLocSearchInput() {
      clearTimeout(_locSearchDebounce);
      const q = document.getElementById('locSearchInput').value.trim();
      const box = document.getElementById('locSearchSuggestions');
      if (q.length < 3) { box.innerHTML = ''; return; }
      box.innerHTML = '<div style="padding:10px;color:var(--text-muted);font-size:.82rem"><i class="fa fa-spinner fa-spin"></i> Searching…</div>';
      _locSearchDebounce = setTimeout(async () => {
        const preds = await _placesAutocomplete(q);
        box.innerHTML = preds.length
          ? preds.map(p => `<div class="loc-suggest-row" onclick="_selectLocationSuggestion('${p.placeId}')"><i class="fa fa-location-dot"></i><span>${esc(p.description)}</span></div>`).join('')
          : '<div style="padding:10px;color:var(--text-muted);font-size:.82rem">No matches found</div>';
      }, 350);
    }

    async function _selectLocationSuggestion(placeId) {
      closeModal('locationSearchModal');
      _locSearchSessionToken = null;
      const barText = document.getElementById('locationBarText');
      if (barText) barText.textContent = 'Setting your location…';
      const details = await _placeDetails(placeId);
      if (!details) { showToast('Could not fetch that location — try again'); if (barText) barText.textContent = 'Location unavailable — tap to set it ›'; return; }
      await _applyDetectedLocation(details.lat, details.lng, details.address);
    }

    function _useCurrentLocationClick() {
      closeModal('locationSearchModal');
      detectSociety();
    }

    function openAboutModal() {
      const body = document.getElementById('aboutModalBody');
      if (body) body.textContent = SITE_CONFIG.aboutUs || DEFAULT_ABOUT_US;
      document.getElementById('aboutModal').classList.add('open');
    }

    function openContactModal() {
      ['ct_name', 'ct_email', 'ct_mobile', 'ct_subject', 'ct_message'].forEach(id => {
        const el = document.getElementById(id); if (el) el.value = '';
      });
      const s = document.getElementById('ct_status');
      if (s) { s.style.display = 'none'; s.textContent = ''; }
      const btn = document.getElementById('ct_submitBtn');
      if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa fa-paper-plane"></i> Send Message'; }
      document.getElementById('contactModal').classList.add('open');
    }

    async function submitContactForm() {
      const name = (document.getElementById('ct_name').value || '').trim();
      const email = (document.getElementById('ct_email').value || '').trim();
      const mobile = (document.getElementById('ct_mobile').value || '').trim();
      const subject = (document.getElementById('ct_subject').value || '').trim();
      const message = (document.getElementById('ct_message').value || '').trim();
      const status = document.getElementById('ct_status');
      const btn = document.getElementById('ct_submitBtn');

      if (!name || !email || !subject || !message) {
        status.textContent = 'Please fill in Name, Email, Subject and Message.';
        status.style.color = 'var(--danger)'; status.style.display = 'block'; return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = 'Please enter a valid email address.';
        status.style.color = 'var(--danger)'; status.style.display = 'block'; return;
      }

      btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending…';
      status.style.display = 'none';

      const ejsPubKey = SITE_CONFIG.ejsPublicKey || '';
      const ejsService = SITE_CONFIG.ejsServiceId || '';
      const ejsTemplate = SITE_CONFIG.ejsTemplateId || '';

      if (ejsPubKey && ejsService && ejsTemplate) {
        try {
          await emailjs.init({ publicKey: ejsPubKey });
          await emailjs.send(ejsService, ejsTemplate, {
            from_name: name, from_email: email, mobile: mobile || 'Not provided',
            subject: subject, message: message,
            to_email: 'contact@tyntron.co.in'
          });
          status.textContent = 'Message sent successfully! We will get back to you soon.';
          status.style.color = 'var(--green)'; status.style.display = 'block';
          btn.innerHTML = '<i class="fa fa-check"></i> Sent';
          setTimeout(() => closeModal('contactModal'), 3000);
        } catch (e) {
          status.textContent = 'Failed to send: ' + e.text;
          status.style.color = 'var(--danger)'; status.style.display = 'block';
          btn.disabled = false; btn.innerHTML = '<i class="fa fa-paper-plane"></i> Send Message';
        }
      } else {
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMobile: ${mobile || 'Not provided'}\n\n${message}`);
        window.open(`mailto:contact@tyntron.co.in?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
        status.textContent = 'Your mail client has opened. Please send the email from there.';
        status.style.color = '#b8860b'; status.style.display = 'block';
        btn.disabled = false; btn.innerHTML = '<i class="fa fa-paper-plane"></i> Send Message';
      }
    }

    function applyFooterLinks() {
      const fb = document.getElementById('footerFbLink');
      const ig = document.getElementById('footerIgLink');
      const yt = document.getElementById('footerYtLink');
      const wa = document.getElementById('footerWaLink');
      if (fb) { fb.href = SITE_CONFIG.fbUrl || '#'; fb.style.display = SITE_CONFIG.fbUrl ? '' : 'none'; }
      if (ig) { ig.href = SITE_CONFIG.igUrl || '#'; ig.style.display = SITE_CONFIG.igUrl ? '' : 'none'; }
      if (yt) { yt.href = SITE_CONFIG.ytUrl || '#'; yt.style.display = SITE_CONFIG.ytUrl ? '' : 'none'; }
      if (wa) {
        const waNum = SITE_CONFIG.waNum || '';
        wa.href = waNum ? `https://wa.me/${waNum.replace(/\D/g, '')}` : '#';
        wa.style.display = waNum ? '' : 'none';
      }
      const tb = document.querySelector('.tagline-bar');
      if (tb) tb.textContent = SITE_CONFIG.tagline || 'Connect • Collaborate • Create • Grow';
      const heroSub = document.getElementById('heroSubText');
      if (heroSub) heroSub.textContent = SITE_CONFIG.heroSub || 'For the residents, by the residents. Discover and support neighbourhood businesses in Prateek Laurel Society.';
    }
    function footerSocialClick(type, e) {
      let url = '';
      if (type === 'fb') url = SITE_CONFIG.fbUrl || '';
      else if (type === 'ig') url = SITE_CONFIG.igUrl || '';
      else if (type === 'yt') url = SITE_CONFIG.ytUrl || '';
      else if (type === 'wa') {
        const waNum = SITE_CONFIG.waNum || '';
        url = waNum ? `https://wa.me/${waNum.replace(/\D/g, '')}` : '';
      }
      if (!url) { e.preventDefault(); return false; }
      return true;
    }

    function initCustomSelect(selectId) {
      const select = document.getElementById(selectId);
      if (!select) return;
      if (select.dataset.customSelectInit === 'true') {
        syncCustomSelect(selectId);
        return;
      }

      const wrapper = document.createElement('div');
      wrapper.className = 'custom-select-wrapper';
      wrapper.id = selectId + '_custom_wrapper';

      const trigger = document.createElement('div');
      trigger.className = 'custom-select-trigger';
      trigger.tabIndex = 0;
      trigger.innerHTML = `<span class="cs-text"></span><i class="fa fa-chevron-down cs-icon"></i>`;

      const dropdown = document.createElement('div');
      dropdown.className = 'custom-select-dropdown';

      select.parentNode.insertBefore(wrapper, select);
      wrapper.appendChild(select);
      wrapper.appendChild(trigger);
      wrapper.appendChild(dropdown);

      select.style.display = 'none';
      select.dataset.customSelectInit = 'true';

      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = wrapper.classList.contains('open');
        document.querySelectorAll('.custom-select-wrapper.open').forEach(w => {
          if (w !== wrapper) w.classList.remove('open');
        });
        wrapper.classList.toggle('open', !isOpen);
      });

      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        } else if (e.key === 'Escape') {
          wrapper.classList.remove('open');
        }
      });

      syncCustomSelect(selectId);
    }

    function _updateSrSubCatTriggerText(wrapper) {
      const triggerText = wrapper.querySelector('.cs-text');
      if (!triggerText) return;
      const dropdown = wrapper.querySelector('.custom-select-dropdown');
      if (!dropdown) return;

      const selectedOpts = Array.from(dropdown.querySelectorAll('.custom-select-option.selected'));
      if (!selectedOpts.length) {
        triggerText.textContent = '— Select Sub Category —';
        triggerText.style.color = '';
      } else {
        const count = selectedOpts.length;
        triggerText.textContent = `${count} Sub-Categor${count === 1 ? 'y' : 'ies'} Selected`;
        triggerText.style.color = 'var(--green-dark, #1b5e20)';
      }

      const listEl = document.getElementById('sr_selected_subcategories_list');
      if (listEl) {
        if (!selectedOpts.length) {
          listEl.innerHTML = '';
        } else {
          listEl.innerHTML = selectedOpts.map(el => {
            const val = el.getAttribute('data-value');
            const txt = (el.querySelector('.cs-opt-text')?.textContent || '').replace(/^✨\s*/, '').trim();
            const safeVal = (val || '').replace(/'/g, "\\'");
            return `<span class="subcat-chip">
              <i class="fa fa-circle-check" style="color:var(--green)"></i> ${esc(txt)}
              <i class="fa fa-times remove-chip-btn" onclick="deselectSrSubCatOption('${safeVal}')" title="Remove"></i>
            </span>`;
          }).join('');
        }
      }
    }

    function deselectSrSubCatOption(val) {
      const select = document.getElementById('sr_subcategory');
      if (!select) return;
      const wrapper = select.closest('.custom-select-wrapper');
      if (!wrapper) return;
      const dropdown = wrapper.querySelector('.custom-select-dropdown');
      if (!dropdown) return;

      const targetOpt = dropdown.querySelector(`.custom-select-option[data-value="${CSS.escape(val)}"]`);
      if (targetOpt) {
        targetOpt.classList.remove('selected');
        const cb = targetOpt.querySelector('.cs-checkbox');
        if (cb) cb.checked = false;
      }

      _updateSrSubCatTriggerText(wrapper);

      const otherSelected = Array.from(dropdown.querySelectorAll('.custom-select-option.selected'))
        .some(el => el.getAttribute('data-value') === 'Other');
      const customGroup = document.getElementById('sr_subcategory_custom_group');
      if (customGroup) customGroup.style.display = otherSelected ? 'block' : 'none';
    }

    function syncCustomSelect(selectId) {
      const select = document.getElementById(selectId);
      if (!select || select.dataset.customSelectInit !== 'true') return;
      const wrapper = select.closest('.custom-select-wrapper');
      if (!wrapper) return;

      const triggerText = wrapper.querySelector('.cs-text');
      const dropdown = wrapper.querySelector('.custom-select-dropdown');

      if (selectId === 'sr_subcategory') {
        const maxLimit = parseInt(SITE_CONFIG.maxSubCategories) || 3;
        const badgeEl = document.getElementById('sr_maxSubCatBadge');
        if (badgeEl) badgeEl.textContent = maxLimit;

        const prevSelected = Array.from(dropdown.querySelectorAll('.custom-select-option.selected'))
          .map(el => el.getAttribute('data-value'))
          .filter(v => v && v !== '');

        let html = '';
        Array.from(select.options).forEach((opt) => {
          if (!opt.value) return; // Skip default empty option
          const isSelected = prevSelected.includes(opt.value);
          html += `
            <div class="custom-select-option multiselect-option${isSelected ? ' selected' : ''}" data-value="${esc(opt.value)}">
              <input type="checkbox" class="cs-checkbox" ${isSelected ? 'checked' : ''} tabindex="-1">
              <span class="cs-opt-text" style="flex:1">${esc(opt.text)}</span>
            </div>`;
        });

        dropdown.innerHTML = html || '<div style="padding:10px 14px;color:var(--text-muted);font-size:.83rem">Select a Category first</div>';
        _updateSrSubCatTriggerText(wrapper);

        dropdown.querySelectorAll('.custom-select-option').forEach(optEl => {
          optEl.addEventListener('click', function (e) {
            e.stopPropagation();
            const val = optEl.getAttribute('data-value');
            const isSelected = optEl.classList.contains('selected');
            const currentSelectedCount = dropdown.querySelectorAll('.custom-select-option.selected').length;

            if (!isSelected && currentSelectedCount >= maxLimit) {
              showToast(`You can select a maximum of ${maxLimit} sub-categories.`);
              return;
            }

            if (isSelected) {
              optEl.classList.remove('selected');
              const cb = optEl.querySelector('.cs-checkbox');
              if (cb) cb.checked = false;
            } else {
              optEl.classList.add('selected');
              const cb = optEl.querySelector('.cs-checkbox');
              if (cb) cb.checked = true;
            }

            _updateSrSubCatTriggerText(wrapper);

            const otherSelected = Array.from(dropdown.querySelectorAll('.custom-select-option.selected'))
              .some(el => el.getAttribute('data-value') === 'Other');
            const customGroup = document.getElementById('sr_subcategory_custom_group');
            if (customGroup) customGroup.style.display = otherSelected ? 'block' : 'none';
          });
        });
        return;
      }

      const selectedOpt = select.options[select.selectedIndex] || select.options[0];
      if (triggerText) {
        triggerText.textContent = selectedOpt ? selectedOpt.text : '';
      }

      let html = '';
      Array.from(select.options).forEach((opt, idx) => {
        const isSelected = idx === select.selectedIndex;
        html += `<div class="custom-select-option${isSelected ? ' selected' : ''}" data-value="${esc(opt.value)}">${esc(opt.text)}</div>`;
      });
      dropdown.innerHTML = html;

      dropdown.querySelectorAll('.custom-select-option').forEach(optEl => {
        optEl.addEventListener('click', function (e) {
          e.stopPropagation();
          const val = optEl.getAttribute('data-value');
          select.value = val;
          if (triggerText) triggerText.textContent = optEl.textContent.trim();

          dropdown.querySelectorAll('.custom-select-option').forEach(o => o.classList.remove('selected'));
          optEl.classList.add('selected');

          wrapper.classList.remove('open');
          select.dispatchEvent(new Event('change', { bubbles: true }));
        });
      });
    }

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.custom-select-wrapper')) {
        document.querySelectorAll('.custom-select-wrapper.open').forEach(w => w.classList.remove('open'));
      }
    });

    function handleCategoryCustomToggle(catSelectId, customGroupId) {
      const select = document.getElementById(catSelectId);
      const group = document.getElementById(customGroupId);
      if (select && group) {
        group.style.display = (select.value === 'Other') ? 'block' : 'none';
      }
      syncCustomSelect(catSelectId);
    }

    function handleSubCategoryCustomToggle(subSelectId, customGroupId) {
      const select = document.getElementById(subSelectId);
      const group = document.getElementById(customGroupId);
      if (select && group) {
        group.style.display = (select.value === 'Other') ? 'block' : 'none';
      }
      syncCustomSelect(subSelectId);
    }

    function getSrSelectedSubCategories() {
      const select = document.getElementById('sr_subcategory');
      if (!select) return '';
      const wrapper = select.closest('.custom-select-wrapper');
      if (!wrapper) {
        return (select.value === 'Other') ? ((document.getElementById('sr_subcategory_custom')?.value || '').trim() || 'Other') : select.value;
      }
      const dropdown = wrapper.querySelector('.custom-select-dropdown');
      if (!dropdown) return '';
      const selectedEls = Array.from(dropdown.querySelectorAll('.custom-select-option.selected'));
      const vals = [];
      selectedEls.forEach(el => {
        const val = el.getAttribute('data-value');
        if (val === 'Other') {
          const customVal = (document.getElementById('sr_subcategory_custom')?.value || '').trim() || 'Other';
          vals.push(customVal);
        } else if (val) {
          vals.push(val);
        }
      });
      return vals.join(', ');
    }

    function updateSubCategoryDropdown(catSelectId, subCatSelectId, selectedSubCat) {
      const catVal = (document.getElementById(catSelectId)?.value || '').trim();
      const subSelect = document.getElementById(subCatSelectId);
      if (!subSelect) return;

      const catCustomGroupId = catSelectId === 'f_category' ? 'f_category_custom_group' : 'sr_category_custom_group';
      handleCategoryCustomToggle(catSelectId, catCustomGroupId);

      const matchedCat = (catVal === 'Other') ? null : CATS.find(c => (c.name || '').toLowerCase() === catVal.toLowerCase() || (c.name || '').toLowerCase().includes(catVal.toLowerCase()) || catVal.toLowerCase().includes((c.name || '').toLowerCase()));
      const subList = matchedCat ? (matchedCat.subcategories || []) : [];

      let html = '<option value="">— Select Sub Category —</option>';
      subList.forEach(sub => {
        const isSel = (selectedSubCat && selectedSubCat.toLowerCase() === sub.name.toLowerCase()) ? ' selected' : '';
        const iconPrefix = sub.emoji ? `${sub.emoji} ` : '';
        html += `<option value="${esc(sub.name)}"${isSel}>${iconPrefix}${esc(sub.name)}</option>`;
      });

      const isOtherSub = selectedSubCat && selectedSubCat === 'Other';
      html += `<option value="Other"${isOtherSub ? ' selected' : ''}>✨ Other (Write your own)</option>`;

      subSelect.innerHTML = html;

      const subCustomGroupId = subCatSelectId === 'f_subcategory' ? 'f_subcategory_custom_group' : 'sr_subcategory_custom_group';
      const subCustomInputId = subCatSelectId === 'f_subcategory' ? 'f_subcategory_custom' : 'sr_subcategory_custom';
      const customSubInput = document.getElementById(subCustomInputId);

      if (selectedSubCat) {
        const match = subList.find(s => s.name.toLowerCase() === selectedSubCat.toLowerCase());
        if (match) {
          subSelect.value = match.name;
          if (customSubInput) customSubInput.value = '';
        } else if (selectedSubCat) {
          subSelect.value = 'Other';
          if (customSubInput && selectedSubCat !== 'Other') customSubInput.value = selectedSubCat;
        }
      }
      handleSubCategoryCustomToggle(subCatSelectId, subCustomGroupId);
      syncCustomSelect(catSelectId);
      syncCustomSelect(subCatSelectId);
    }

    function resetForm() {
      ['venture', 'speciality', 'desc', 'contact', 'flat', 'phone', 'whatsapp', 'instagram', 'video', 'url', 'category_custom', 'subcategory_custom'].forEach(f => {
        const el = document.getElementById('f_' + f);
        if (el) el.value = '';
      });
      document.getElementById('f_category').value = 'Food, Bakery & Beverages';
      handleCategoryCustomToggle('f_category', 'f_category_custom_group');
      updateSubCategoryDropdown('f_category', 'f_subcategory');
      pendingImg = null;
      setPreview(null);
      document.getElementById('removeImgBtn').style.display = 'none';
    }
    function setPreview(src) {
      const box = document.getElementById('imgPreviewBox');
      const zone = document.getElementById('f_imgZone');
      const titleEl = document.getElementById('f_imgTitle');
      const chooseBtn = document.getElementById('f_chooseImgBtn');
      const removeBtn = document.getElementById('removeImgBtn');
      if (src && src !== '__remove__') {
        if (box) box.innerHTML = `<img src="${src}" style="width:100%;height:100%;object-fit:cover">`;
        if (zone) zone.classList.add('has-image');
        if (titleEl) titleEl.innerHTML = `<strong style="color:var(--green-dark);display:inline-flex;align-items:center;gap:5px"><i class="fa fa-circle-check"></i> Photo Selected</strong><br><span style="font-size:.76rem;color:var(--text-muted)">Click to change or remove photo</span>`;
        if (chooseBtn) chooseBtn.innerHTML = `<i class="fa fa-arrows-rotate"></i> Change Image`;
        if (removeBtn) removeBtn.style.display = 'inline-flex';
      } else {
        if (box) box.innerHTML = `<i class="fa fa-image img-ph"></i>`;
        if (zone) zone.classList.remove('has-image');
        if (titleEl) titleEl.innerHTML = `<strong>Click to upload photo</strong><br><span style="font-size:.76rem;color:var(--text-muted)">JPG, PNG, WEBP · Max 4 MB (Recommended: 600×400 px)</span>`;
        if (chooseBtn) chooseBtn.innerHTML = `<i class="fa fa-upload"></i> Choose Image`;
        if (removeBtn) removeBtn.style.display = 'none';
      }
    }
    /* ── Image Cropper Controller ── */
    let _cropperInstance = null;
    let _cropperCallback = null;
    let _cropperFileInput = null;
    let _cropperInitialRatio = 1;
    let _cropperMinRatio = 0.1;
    let _cropperMaxRatio = 3;

    function _updateCropperZoomLimits() {
      if (!_cropperInstance) return;
      const cd = _cropperInstance.getCanvasData();
      const id = _cropperInstance.getImageData();
      const container = _cropperInstance.getContainerData();
      if (!cd || !id || !container) return;

      const rotated = Math.abs(id.rotate || 0) % 180 === 90;
      const naturalW = rotated ? id.naturalHeight : id.naturalWidth;
      const naturalH = rotated ? id.naturalWidth : id.naturalHeight;

      // Base ratio that fits the container
      const fitRatio = Math.min(container.width / (naturalW || 1), container.height / (naturalH || 1));
      _cropperInitialRatio = fitRatio;
      // Allow zooming out enough so user can fit wide/tall photos nicely, but prevent shrinking into an empty blue square
      _cropperMinRatio = fitRatio * 0.5;
      // Cap maximum zoom: prevent infinite zoom in (max 3x magnification from fit)
      _cropperMaxRatio = fitRatio * 3.0;
    }

    function openImageCropper(file, callback, fileInput) {
      if (!file) return;
      if (file.size > 8 * 1024 * 1024) { showToast('Image must be under 8 MB'); return; }
      _cropperCallback = callback;
      _cropperFileInput = fileInput || null;

      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.getElementById('cropperTargetImage');
        if (!img) return;

        if (_cropperInstance) {
          _cropperInstance.destroy();
          _cropperInstance = null;
        }

        img.src = e.target.result;
        openModal('imageCropModal');

        setTimeout(() => {
          _cropperInstance = new Cropper(img, {
            aspectRatio: 4 / 3,
            viewMode: 0,
            dragMode: 'move',
            autoCropArea: 0.9,
            responsive: true,
            restore: false,
            guides: true,
            center: true,
            highlight: false,
            cropBoxMovable: true,
            cropBoxResizable: true,
            toggleDragModeOnDblclick: false,
            minCropBoxWidth: 100,
            minCropBoxHeight: 75,
            ready: function () {
              _updateCropperZoomLimits();
            },
            zoom: function (event) {
              // Enforce zoom boundaries on touch / mouse wheel
              if (event.detail.ratio > _cropperMaxRatio) {
                event.preventDefault();
              } else if (event.detail.ratio < _cropperMinRatio) {
                event.preventDefault();
              }
            }
          });
        }, 150);
      };
      reader.readAsDataURL(file);
    }

    function cropperZoom(ratio) {
      if (!_cropperInstance) return;
      const canvasData = _cropperInstance.getCanvasData();
      if (!canvasData || !canvasData.naturalWidth) return;
      const currentRatio = canvasData.width / canvasData.naturalWidth;

      let targetRatio;
      if (ratio < 0) {
        targetRatio = currentRatio / (1 - ratio);
      } else {
        targetRatio = currentRatio * (1 + ratio);
      }

      if (targetRatio > _cropperMaxRatio) {
        _cropperInstance.zoomTo(_cropperMaxRatio);
      } else if (targetRatio < _cropperMinRatio) {
        _cropperInstance.zoomTo(_cropperMinRatio);
      } else {
        _cropperInstance.zoom(ratio);
      }
    }

    function cropperRotate(degree) {
      if (_cropperInstance) {
        _cropperInstance.rotate(degree);
        _updateCropperZoomLimits();
      }
    }

    function cropperReset() {
      if (_cropperInstance) {
        _cropperInstance.reset();
        _updateCropperZoomLimits();
      }
    }

    function closeImageCropper() {
      closeModal('imageCropModal');
      if (_cropperInstance) {
        _cropperInstance.destroy();
        _cropperInstance = null;
      }
      if (_cropperFileInput) {
        _cropperFileInput.value = '';
        _cropperFileInput = null;
      }
      _cropperCallback = null;
    }

    function applyCroppedImage() {
      if (!_cropperInstance) return;
      const canvas = _cropperInstance.getCroppedCanvas({
        width: 800,
        height: 600,
        fillColor: '#ffffff',
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high',
      });
      if (!canvas) { showToast('Could not crop image'); return; }
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

      if (typeof _cropperCallback === 'function') {
        _cropperCallback(dataUrl);
      }
      closeImageCropper();
    }

    function handleImageUpload(input) {
      const file = input.files[0]; if (!file) return;
      openImageCropper(file, function(croppedDataUrl) {
        pendingImg = croppedDataUrl;
        setPreview(pendingImg);
      }, input);
    }
    function removeImage() {
      pendingImg = '__remove__'; setPreview(null);
    }

    function openAddModal() {
      editingId = null;
      document.getElementById('modalTitle').textContent = 'Add New Listing';
      initCustomSelect('f_category');
      initCustomSelect('f_subcategory');
      resetForm();
      buildSocietySelector();
      const fSoc = document.getElementById('f_society'); if (fSoc) fSoc.value = selectedSociety || 'Prateek Laurel';
      document.getElementById('tileModal').classList.add('open');
      setTimeout(() => document.getElementById('f_venture').focus(), 120);
    }
    function openEditModal(id) {
      const item = DATA.find(d => d.id === id); if (!item) return;
      editingId = id;
      document.getElementById('modalTitle').textContent = 'Edit Listing';
      initCustomSelect('f_category');
      initCustomSelect('f_subcategory');
      document.getElementById('f_venture').value = item.venture || '';
      document.getElementById('f_speciality').value = item.speciality || '';
      document.getElementById('f_desc').value = item.desc || '';
      const catSel = document.getElementById('f_category');
      const catCustomInput = document.getElementById('f_category_custom');
      const stdOpts = Array.from(catSel.options).map(o => o.value).filter(v => v !== 'Other');
      if (item.cat && stdOpts.includes(item.cat)) {
        catSel.value = item.cat;
        if (catCustomInput) catCustomInput.value = '';
      } else if (item.cat) {
        catSel.value = 'Other';
        if (catCustomInput) catCustomInput.value = item.cat;
      } else {
        catSel.value = 'Food, Bakery & Beverages';
        if (catCustomInput) catCustomInput.value = '';
      }
      handleCategoryCustomToggle('f_category', 'f_category_custom_group');
      updateSubCategoryDropdown('f_category', 'f_subcategory', item.subCat || '');
      document.getElementById('f_contact').value = item.contact || '';
      document.getElementById('f_flat').value = item.flat || '';
      document.getElementById('f_phone').value = item.phone || '';
      document.getElementById('f_whatsapp').value = item.whatsapp || '';
      document.getElementById('f_instagram').value = item.instagram || '';
      document.getElementById('f_video').value = item.video || '';
      document.getElementById('f_url').value = item.url || '';
      pendingImg = null;
      buildSocietySelector();
      const fSoc = document.getElementById('f_society'); if (fSoc) fSoc.value = item.society || 'Prateek Laurel';
      const existing = item.image || IMGS[id] || null;
      setPreview(existing);
      document.getElementById('tileModal').classList.add('open');
    }
    async function saveTile() {
      const venture = document.getElementById('f_venture').value.trim();
      if (!venture) { alert('Please enter venture name.'); return; }
      const speciality = document.getElementById('f_speciality').value.trim();
      if (!speciality) { alert('Please enter speciality / tagline.'); return; }
      const desc = document.getElementById('f_desc').value.trim();
      if (!desc) { alert('Please enter business description.'); return; }
      const prevItem = editingId ? DATA.find(d => d.id === editingId) : null;
      const prevImage = prevItem ? (prevItem.image || IMGS[prevItem.id] || '') : '';

      let finalCat = document.getElementById('f_category').value;
      if (finalCat === 'Other') {
        finalCat = (document.getElementById('f_category_custom')?.value || '').trim() || 'Other';
      }
      let finalSubCat = document.getElementById('f_subcategory')?.value || '';
      if (finalSubCat === 'Other') {
        finalSubCat = (document.getElementById('f_subcategory_custom')?.value || '').trim() || 'Other';
      }

      const obj = {
        id: editingId || 'u' + Date.now(),
        cat: finalCat,
        subCat: finalSubCat,
        venture, speciality: document.getElementById('f_speciality').value.trim(),
        desc: document.getElementById('f_desc').value.trim(),
        contact: document.getElementById('f_contact').value.trim(),
        flat: document.getElementById('f_flat').value.trim(),
        phone: document.getElementById('f_phone').value.trim(),
        whatsapp: document.getElementById('f_whatsapp').value.trim(),
        instagram: document.getElementById('f_instagram').value.trim(),
        video: document.getElementById('f_video').value.trim(),
        url: document.getElementById('f_url').value.trim(),
        image: pendingImg === '__remove__' ? '' : (pendingImg || prevImage),
        society: (document.getElementById('f_society') || {}).value || 'Prateek Laurel',
      };
      if (editingId) { const i = DATA.findIndex(d => d.id === editingId); if (i !== -1) DATA[i] = obj; }
      else DATA.push(obj);
      saveData(DATA);
      closeModal('tileModal'); renderAll();
      if (isAdmin) renderAdminTab(_adminTab);
      showToast(editingId ? 'Listing updated ✓' : 'New listing added ✓');
      // Save to Firestore and reload to confirm server accepted it
      if (db) {
        const uid = window._adminUid || auth?.currentUser?.uid || null;
        if (!uid) { showToast('⚠️ Not saved to cloud — log into admin with Firebase email+password first'); return; }
        try {
          await fsSaveVendor(obj);
          // Reload from server to confirm the write actually persisted
          const fresh = await db.collection('vendors').doc(obj.id).get({ source: 'server' });
          if (fresh.exists) {
            showToast('Saved to Firestore ✓');
            const all = await fsLoadVendors();
            if (all && all.length) { DATA = all; saveData(DATA); renderAll(); if (isAdmin) renderAdminTab(_adminTab); }
          } else {
            showToast('⚠️ Server rejected save — check Firestore rules');
          }
        } catch (e) { showToast('Cloud save failed: ' + e.message); }
      }
    }
    async function deleteTile(id) {
      if (!confirm('Delete this listing? This cannot be undone.')) return;
      DATA = DATA.filter(d => d.id !== id);
      delete IMGS[id];
      saveData(DATA);
      renderAll();
      if (isAdmin) renderAdminTab(_adminTab);
      showToast('Listing deleted');
      // Delete from Firestore in background
      if (db) { db.collection('vendors').doc(id).delete().catch(e => console.warn('Firestore delete failed:', e.message)); }
    }

    /* ═══════════ BUSINESS SELF-REGISTRATION ═══════════ */
    let _srEmailOtp = { email: null, code: null, expiresAt: 0, verified: false };
    let _srMobileVerified = false;
    let _srPendingImg = null;
    let _srDetailsImg = null;
    let _srDocFiles = { pan: null, aadhaar: null, fssai: null, addressProof: null };
    let _srMenuItems = [];

    function srCopyCurrentAddress(isChecked) {
      const curr = document.getElementById('sr_currAddress');
      const perm = document.getElementById('sr_permAddress');
      if (!curr || !perm) return;
      if (isChecked) {
        perm.value = curr.value;
      } else {
        perm.value = '';
      }
    }

    function srSyncSameAddress() {
      const chk = document.getElementById('sr_sameAddress');
      if (chk && chk.checked) {
        srCopyCurrentAddress(true);
      }
    }

    function srToggleAddressProofFile() {
      const typeEl = document.getElementById('sr_addressProofType');
      const fileEl = document.getElementById('sr_addressProofFile');
      if (!typeEl || !fileEl) return;
      const hasType = !!typeEl.value;
      fileEl.disabled = !hasType;
      if (!hasType) {
        fileEl.value = '';
        _srDocFiles.addressProof = null;
        const nameEl = document.getElementById('sr_addressProofFileName');
        if (nameEl) nameEl.textContent = '';
      }
    }

    function openBusinessRegModal() {
      closeModal('loginModal');
      initCustomSelect('sr_category');
      initCustomSelect('sr_subcategory');
      _srEmailOtp = { email: null, code: null, expiresAt: 0, verified: false };
      _srMobileVerified = false;
      _srPendingImg = null;
      _srDetailsImg = null;
      _srDocFiles = { pan: null, aadhaar: null, fssai: null, addressProof: null };
      _srMenuItems = [];
      ['sr_email', 'sr_emailCode', 'sr_mobile', 'sr_mobileCode', 'sr_password', 'sr_password2', 'sr_venture', 'sr_speciality',
        'sr_desc', 'sr_contact', 'sr_flat', 'sr_phone', 'sr_instagram', 'sr_video', 'sr_url', 'sr_permAddress',
        'sr_currAddress', 'sr_addressProofType', 'sr_gstNumber', 'sr_detailsText', 'sr_category_custom', 'sr_subcategory_custom'].forEach(id => {
          const el = document.getElementById(id); if (el) el.value = '';
        });
      srToggleAddressProofFile();
      const elDetailsPreview = document.getElementById('sr_detailsImgPreviewBox');
      if (elDetailsPreview) elDetailsPreview.innerHTML = '<i class="fa fa-image img-ph"></i>';
      const elSelectedChips = document.getElementById('sr_selected_subcategories_list');
      if (elSelectedChips) elSelectedChips.innerHTML = '';
      document.getElementById('sr_category').value = 'Food, Bakery & Beverages';
      handleCategoryCustomToggle('sr_category', 'sr_category_custom_group');
      updateSubCategoryDropdown('sr_category', 'sr_subcategory');
      document.getElementById('sr_canDeliver').value = 'yes';
      const canDeliverGroup = document.getElementById('sr_canDeliverGroup');
      const canDeliverLabel = document.getElementById('sr_canDeliverLabel');
      if (canDeliverLabel) {
        canDeliverLabel.textContent = (SITE_CONFIG.businessCanDeliverLabel && SITE_CONFIG.businessCanDeliverLabel.trim()) ? SITE_CONFIG.businessCanDeliverLabel : 'Will you be able to deliver within the society? *';
      }
      if (canDeliverGroup) {
        canDeliverGroup.style.display = (SITE_CONFIG.showBusinessCanDeliver !== false) ? '' : 'none';
      }
      document.getElementById('sr_emailCodeRow').style.display = 'none';
      document.getElementById('sr_emailVerifiedBadge').style.display = 'none';
      const statusMsgEl = document.getElementById('sr_emailStatusMsg');
      if (statusMsgEl) { statusMsgEl.style.display = 'none'; statusMsgEl.innerHTML = ''; }
      document.getElementById('sr_mobileCodeRow').style.display = 'none';
      document.getElementById('sr_mobileVerifiedBadge').style.display = 'none';
      document.getElementById('sr_email').disabled = false;
      document.getElementById('sr_mobile').disabled = false;
      document.getElementById('sr_emailSendBtn').disabled = false;
      document.getElementById('sr_mobileSendBtn').disabled = false;
      srRemoveImage();
      ['sr_panFileName', 'sr_aadhaarFileName', 'sr_fssaiFileName', 'sr_addressProofFileName'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = ''; });
      const addItemsChk = document.getElementById('sr_addItemsNow');
      if (addItemsChk) addItemsChk.checked = false;
      const sameAddrChk = document.getElementById('sr_sameAddress');
      if (sameAddrChk) sameAddrChk.checked = false;
      const menuSec = document.getElementById('sr_menuSection');
      if (menuSec) menuSec.style.display = 'none';
      const detSec = document.getElementById('sr_detailsSection');
      if (detSec) detSec.style.display = 'none';
      const menuList = document.getElementById('sr_menuList');
      if (menuList) menuList.innerHTML = '';
      const errEl = document.getElementById('sr_err');
      if (errEl) errEl.style.display = 'none';
      srUpdateAddSection();
      buildSocietySelector();
      const srSocietyInput = document.getElementById('sr_society');
      if (srSocietyInput) {
        if (srSocietyInput.tagName === 'SELECT') {
          srSocietyInput.insertAdjacentHTML('afterbegin', '<option value="">— Select your society —</option>');
          srSocietyInput.value = '';
        } else {
          srSocietyInput.value = selectedSociety || '';
        }
      }
      document.getElementById('businessRegModal').classList.add('open');
    }

    async function checkBusinessEmailStatus(email) {
      if (!email || !email.includes('@')) return { exists: false };
      const cleanEmail = email.trim().toLowerCase();

      if (!db) {
        if (typeof _srqAll !== 'undefined' && Array.isArray(_srqAll) && _srqAll.length) {
          const match = _srqAll.find(r => (r.email || '').trim().toLowerCase() === cleanEmail);
          if (match) {
            const st = (match.status || 'pending').toLowerCase();
            if (st === 'approved') {
              return {
                exists: true,
                status: 'approved',
                message: 'Your email address is already registered with an approved business account. You can log into your account directly, or use "Forgot Password" if you need to reset your password.'
              };
            } else if (st === 'pending') {
              return {
                exists: true,
                status: 'pending',
                message: 'Your email address is already registered and your previous request is currently pending admin approval. Please wait while our team reviews your application.'
              };
            }
          }
        }
        return { exists: false };
      }

      try {
        if (auth && !auth.currentUser) {
          try { await auth.signInAnonymously(); } catch (e) { }
        }

        let isPending = false;
        let isApproved = false;

        const snap = await db.collection('business_requests').get();
        snap.docs.forEach(doc => {
          const data = doc.data();
          const docEmail = (data.email || '').trim().toLowerCase();
          if (docEmail === cleanEmail) {
            const st = (data.status || 'pending').toLowerCase();
            if (st === 'pending') {
              isPending = true;
            } else if (st === 'approved') {
              isApproved = true;
            }
          }
        });

        if (isApproved) {
          return {
            exists: true,
            status: 'approved',
            message: 'Your email address is already registered with an approved business account. You can log into your account directly, or use "Forgot Password" if you need to reset your password.'
          };
        }

        try {
          const accSnap = await db.collection('accounts').get();
          const accDoc = accSnap.docs.find(d => (d.data().email || '').trim().toLowerCase() === cleanEmail);
          if (accDoc) {
            return {
              exists: true,
              status: 'approved',
              message: 'Your email address is already registered with an approved business account. You can log into your account directly, or use "Forgot Password" if you need to reset your password.'
            };
          }
        } catch (e) { }

        if (isPending) {
          return {
            exists: true,
            status: 'pending',
            message: 'Your email address is already registered and your previous request is currently pending admin approval. Please wait while our team reviews your application.'
          };
        }

        return { exists: false };
      } catch (e) {
        console.warn('Error checking business email status:', e.message);
        return { exists: false };
      }
    }

    async function srCheckEmailNotice() {
      const email = (document.getElementById('sr_email')?.value || '').trim();
      const statusMsgEl = document.getElementById('sr_emailStatusMsg');
      if (!statusMsgEl) return null;
      if (!email || !email.includes('@')) {
        statusMsgEl.style.display = 'none';
        statusMsgEl.innerHTML = '';
        return null;
      }
      const check = await checkBusinessEmailStatus(email);
      if (check.exists) {
        if (check.status === 'pending') {
          statusMsgEl.innerHTML = `
            <div style="display:flex;align-items:flex-start;gap:10px;padding:12px 14px;background:#fff8e1;border:1px solid #ffe082;border-radius:8px;color:#856404;font-size:.83rem;line-height:1.4">
              <i class="fa fa-clock" style="margin-top:2px;font-size:1.1rem;color:#b78103"></i>
              <div>
                <strong style="color:#6c5102">Application Pending Approval</strong><br>
                Your email address (<strong>${esc(email)}</strong>) is already registered and your previous request is currently pending admin approval. Please wait for an admin to review your application.
              </div>
            </div>`;
        } else if (check.status === 'approved') {
          statusMsgEl.innerHTML = `
            <div style="display:flex;align-items:flex-start;gap:10px;padding:12px 14px;background:#e8f5e9;border:1px solid #a5d6a7;border-radius:8px;color:#1b5e20;font-size:.83rem;line-height:1.4">
              <i class="fa fa-circle-check" style="margin-top:2px;font-size:1.1rem;color:#2e7d32"></i>
              <div>
                <strong style="color:#1b5e20">Account Already Registered &amp; Approved</strong><br>
                Your email address (<strong>${esc(email)}</strong>) is already registered with an approved business account. You can <a href="#" onclick="openLoginModalWithEmail('${esc(email)}');return false;" style="color:#1b5e20;font-weight:bold;text-decoration:underline">Login here</a> or use <a href="#" onclick="openForgotPasswordModalWithEmail('${esc(email)}');return false;" style="color:#1b5e20;font-weight:bold;text-decoration:underline">Forgot Password</a> to reset your password.
              </div>
            </div>`;
        }
        statusMsgEl.style.display = 'block';
      } else {
        statusMsgEl.style.display = 'none';
        statusMsgEl.innerHTML = '';
      }
      return check;
    }

    function openLoginModalWithEmail(email) {
      closeModal('businessRegModal');
      openLoginModal();
      if (email) {
        const el = document.getElementById('businessEmailInput');
        if (el) el.value = email;
        const pwEl = document.getElementById('businessPwInput');
        if (pwEl) setTimeout(() => pwEl.focus(), 150);
      }
    }

    function openForgotPasswordModalWithEmail(email) {
      closeModal('businessRegModal');
      openLoginModal();
      if (email) {
        const el = document.getElementById('businessEmailInput');
        if (el) el.value = email;
      }
      businessForgotPassword();
    }

    async function srSendEmailOtp() {
      const email = document.getElementById('sr_email').value.trim();
      if (!email || !email.includes('@')) { showToast('Enter a valid email'); return; }

      const btn = document.getElementById('sr_emailSendBtn');
      btn.disabled = true;
      const origText = btn.innerHTML;
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Checking…';

      const emailCheck = await checkBusinessEmailStatus(email);
      if (emailCheck.exists) {
        btn.disabled = false;
        btn.innerHTML = origText;
        await srCheckEmailNotice();
        const errEl = document.getElementById('sr_err');
        if (errEl) {
          errEl.textContent = emailCheck.message;
          errEl.style.display = 'block';
        }
        showToast(emailCheck.message);
        return;
      }
      btn.innerHTML = origText;
      btn.disabled = false;

      const code = genOtpCode();
      const expiresAt = Date.now() + 15 * 60 * 1000;
      const ejsPubKey = SITE_CONFIG.ejsPublicKey || '';
      const ejsService = SITE_CONFIG.ejsServiceId || '';
      const ejsTemplate = SITE_CONFIG.ejsOtpTemplateId || SITE_CONFIG.ejsTemplateId || '';
      if (!(ejsPubKey && ejsService && ejsTemplate)) { showToast('Email service not configured — ask admin to set up EmailJS in Site Config.'); return; }
      try {
        await emailjs.init({ publicKey: ejsPubKey });
        await emailjs.send(ejsService, ejsTemplate, {
          from_name: 'TynTron', from_email: 'noreply@tyntron.co.in',
          mobile: '', subject: 'Your TynTron Business Registration Code',
          message: `Your verification code is ${code}. It expires in 15 minutes.`,
          passcode: code, time: new Date(expiresAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), otp_code: code, to_email: email
        });
        _srEmailOtp = { email, code, expiresAt, verified: false };
        document.getElementById('sr_emailCodeRow').style.display = 'block';
        const emailCodeInput = document.getElementById('sr_emailCode');
        if (emailCodeInput) emailCodeInput.value = code;
        showToast(`Code sent to ${email}`);
      } catch (e) { showToast('Could not send code: ' + (e.text || e.message || 'unknown error')); }
    }

    function srVerifyEmailOtp() {
      const input = document.getElementById('sr_emailCode').value.trim();
      if (!_srEmailOtp.code || Date.now() > _srEmailOtp.expiresAt || input !== _srEmailOtp.code) {
        showToast('Incorrect or expired code'); return;
      }
      _srEmailOtp.verified = true;
      document.getElementById('sr_emailVerifiedBadge').style.display = 'block';
      document.getElementById('sr_emailCodeRow').style.display = 'none';
      document.getElementById('sr_email').disabled = true;
      document.getElementById('sr_emailSendBtn').disabled = true;
      showToast('Email verified ✓');
    }

    async function srSendMobileOtpClick() {
      const mobile = document.getElementById('sr_mobile').value.trim();
      if (!/^\d{10}$/.test(mobile)) { showToast('Enter a valid 10-digit mobile number'); return; }
      const btn = document.getElementById('sr_mobileSendBtn');
      btn.disabled = true;
      const ok = await sendMobileOtp(mobile);
      btn.disabled = false;
      if (ok) {
        document.getElementById('sr_mobileCodeRow').style.display = 'block';
        const mobileOtpInput = document.getElementById('sr_mobileCode');
        if (mobileOtpInput && _lastSentMobileOtp) mobileOtpInput.value = _lastSentMobileOtp;
        listenForWebOtp('sr_mobileCode');
      }
    }

    async function srVerifyMobileOtpClick() {
      const code = document.getElementById('sr_mobileCode').value.trim();
      const ok = await verifyMobileOtp(code);
      if (ok) {
        _srMobileVerified = true;
        document.getElementById('sr_mobileVerifiedBadge').style.display = 'block';
        document.getElementById('sr_mobileCodeRow').style.display = 'none';
        document.getElementById('sr_mobile').disabled = true;
        document.getElementById('sr_mobileSendBtn').disabled = true;
        if (!document.getElementById('sr_phone').value) document.getElementById('sr_phone').value = _vnMobile;
        showToast('Mobile verified ✓');
      } else {
        showToast('Incorrect or expired OTP');
      }
    }

    function srHandleImageUpload(input) {
      const file = input.files[0]; if (!file) return;
      openImageCropper(file, function (croppedDataUrl) {
        _srPendingImg = croppedDataUrl;
        document.getElementById('sr_imgPreviewBox').innerHTML = `<img src="${_srPendingImg}" style="width:100%;height:100%;object-fit:cover">`;
        const zone = document.getElementById('sr_imgZone');
        if (zone) zone.classList.add('has-image');
        const titleEl = document.getElementById('sr_imgTitle');
        if (titleEl) titleEl.innerHTML = `<strong style="color:var(--green-dark);display:inline-flex;align-items:center;gap:5px"><i class="fa fa-circle-check"></i> Photo Selected</strong><br><span style="font-size:.76rem;color:var(--text-muted)">Click to change or remove photo</span>`;
        const chooseBtn = document.getElementById('sr_chooseImgBtn');
        if (chooseBtn) chooseBtn.innerHTML = `<i class="fa fa-arrows-rotate"></i> Change Image`;
        const removeBtn = document.getElementById('sr_removeImgBtn');
        if (removeBtn) removeBtn.style.display = 'inline-flex';
      }, input);
    }

    function srRemoveImage() {
      _srPendingImg = null;
      document.getElementById('sr_imgPreviewBox').innerHTML = `<i class="fa fa-image img-ph"></i>`;
      const zone = document.getElementById('sr_imgZone');
      if (zone) zone.classList.remove('has-image');
      const titleEl = document.getElementById('sr_imgTitle');
      if (titleEl) titleEl.innerHTML = `<strong>Click to upload photo</strong><br><span style="font-size:.76rem;color:var(--text-muted)">JPG, PNG, WEBP · Max 4 MB</span>`;
      const chooseBtn = document.getElementById('sr_chooseImgBtn');
      if (chooseBtn) chooseBtn.innerHTML = `<i class="fa fa-upload"></i> Choose Image`;
      const removeBtn = document.getElementById('sr_removeImgBtn');
      if (removeBtn) removeBtn.style.display = 'none';
    }

    function srHandleDocFile(input, type) {
      const file = input.files[0]; if (!file) return;
      if (file.size > 8 * 1024 * 1024) { showToast('File must be under 8 MB'); input.value = ''; return; }
      _srDocFiles[type] = file;
      document.getElementById('sr_' + type + 'FileName').innerHTML = `<i class="fa fa-check" style="color:var(--green)"></i> ${esc(file.name)}`;
    }

    /* Business "add items" section is category-driven: Food gets a priced menu,
       Fashion/Gift gets a priced item list (same mechanic, different label), and
       Education/Camps/Health/Professional/Home-Print-Tech get a free-text details
       block + optional photo instead of forcing an artificial priced item list. */
    function getBusinessAddMode(cat) {
      const c = (cat || '').toLowerCase();
      if (c.includes('food') || c.includes('baker') || c.includes('beverage')) return 'menu';
      if (c.includes('fashion') || c.includes('gift') || c.includes('lifestyle')) return 'item';
      return 'details';
    }
    function srUpdateAddSection() {
      const catEl = document.getElementById('sr_category');
      if (!catEl) return;
      const mode = getBusinessAddMode(catEl.value);
      const addItemsChk = document.getElementById('sr_addItemsNow');
      const checked = addItemsChk ? addItemsChk.checked : false;
      const labelEl = document.getElementById('sr_itemSectionLabel');
      const cbLabelEl = document.getElementById('sr_addItemsLabel');
      if (labelEl && cbLabelEl) {
        if (mode === 'menu') { labelEl.textContent = 'Menu Items'; cbLabelEl.textContent = 'Add menu items now'; }
        else if (mode === 'item') { labelEl.textContent = 'Items'; cbLabelEl.textContent = 'Add items now'; }
        else { labelEl.textContent = 'Business / Service Details'; cbLabelEl.textContent = 'Add details now'; }
      }
      const menuSec = document.getElementById('sr_menuSection');
      if (menuSec) menuSec.style.display = (checked && mode !== 'details') ? 'flex' : 'none';
      const detSec = document.getElementById('sr_detailsSection');
      if (detSec) detSec.style.display = (checked && mode === 'details') ? 'flex' : 'none';
    }
    function srToggleMenuSection(show) {
      srUpdateAddSection();
    }
    function srHandleDetailsImageUpload(input) {
      const file = input.files[0]; if (!file) return;
      if (file.size > 4 * 1024 * 1024) { showToast('Image must be under 4 MB'); return; }
      const reader = new FileReader();
      reader.onload = e => {
        _srDetailsImg = e.target.result;
        document.getElementById('sr_detailsImgPreviewBox').innerHTML = `<img src="${_srDetailsImg}" style="width:100%;height:100%;object-fit:cover">`;
      };
      reader.readAsDataURL(file);
      input.value = '';
    }
    function srRenderMenuItems() {
      const list = document.getElementById('sr_menuList');
      if (!list) return;
      list.innerHTML = _srMenuItems.map((m, i) => `
    <div style="display:flex;align-items:center;gap:8px;background:var(--cream);border-radius:8px;padding:8px 12px">
      <span style="flex:1;font-size:.85rem"><strong>${esc(m.name)}</strong> — ₹${m.price}${m.desc ? ' · ' + esc(m.desc) : ''}</span>
      <button class="btn btn-sm btn-danger" onclick="srRemoveMenuItem(${i})"><i class="fa fa-trash"></i></button>
    </div>`).join('');
    }
    function srAddMenuItem() {
      const nameEl = document.getElementById('sr_mi_name');
      const priceEl = document.getElementById('sr_mi_price');
      if (!nameEl || !priceEl) return;
      const name = nameEl.value.trim();
      const price = parseFloat(priceEl.value);
      if (!name || isNaN(price)) { showToast('Item name and price are required'); return; }
      _srMenuItems.push({ id: 'm' + Date.now(), name, price, desc: document.getElementById('sr_mi_desc')?.value.trim() || '', available: true });
      ['sr_mi_name', 'sr_mi_price', 'sr_mi_desc'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
      srRenderMenuItems();
    }
    function srRemoveMenuItem(i) { _srMenuItems.splice(i, 1); srRenderMenuItems(); }

    async function srSubmit() {
      const errEl = document.getElementById('sr_err');
      errEl.style.display = 'none';
      const venture = (document.getElementById('sr_venture')?.value || '').trim();
      const speciality = (document.getElementById('sr_speciality')?.value || '').trim();
      const desc = (document.getElementById('sr_desc')?.value || '').trim();
      const contact = (document.getElementById('sr_contact')?.value || '').trim();
      const flat = (document.getElementById('sr_flat')?.value || '').trim();
      const phone = (document.getElementById('sr_phone')?.value || '').trim() || _vnMobile || '';
      const permAddress = (document.getElementById('sr_permAddress')?.value || '').trim();
      const currAddress = (document.getElementById('sr_currAddress')?.value || '').trim();
      const password = document.getElementById('sr_password')?.value || '';
      const password2 = document.getElementById('sr_password2')?.value || '';
      const society = document.getElementById('sr_society')?.value || '';

      if (!_srEmailOtp.verified) { errEl.textContent = 'Please verify your email first.'; errEl.style.display = 'block'; return; }
      const emailCheck = await checkBusinessEmailStatus(_srEmailOtp.email || (document.getElementById('sr_email')?.value || '').trim());
      if (emailCheck.exists) {
        errEl.textContent = emailCheck.message;
        errEl.style.display = 'block';
        return;
      }
      if (!_srMobileVerified || !_vnMobile) { errEl.textContent = 'Please verify your mobile number first.'; errEl.style.display = 'block'; return; }
      if (!password || password.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; errEl.style.display = 'block'; return; }
      if (password !== password2) { errEl.textContent = 'Passwords do not match.'; errEl.style.display = 'block'; return; }
      if (!society) { errEl.textContent = 'Please select your society.'; errEl.style.display = 'block'; return; }
      if (!venture) { errEl.textContent = 'Venture / Business Name is required.'; errEl.style.display = 'block'; return; }
      if (!speciality) { errEl.textContent = 'Speciality / Tagline is required.'; errEl.style.display = 'block'; return; }
      if (!desc) { errEl.textContent = 'Business Description is required.'; errEl.style.display = 'block'; return; }
      if (!contact) { errEl.textContent = 'Contact Person is required.'; errEl.style.display = 'block'; return; }
      if (!flat) { errEl.textContent = 'Flat No. / House No. / Office No. is required.'; errEl.style.display = 'block'; return; }
      if (!phone) { errEl.textContent = 'Mobile / WhatsApp Number is required.'; errEl.style.display = 'block'; return; }
      const addressProofType = document.getElementById('sr_addressProofType')?.value || '';
      if (!currAddress) { errEl.textContent = 'Current Address is required.'; errEl.style.display = 'block'; return; }
      if (!permAddress) { errEl.textContent = 'Permanent Address is required.'; errEl.style.display = 'block'; return; }
      if (!addressProofType) { errEl.textContent = 'Please select Address Proof Type.'; errEl.style.display = 'block'; return; }
      if (!_srDocFiles.addressProof) { errEl.textContent = 'Address Proof document upload is required.'; errEl.style.display = 'block'; return; }
      if (!_srDocFiles.pan) { errEl.textContent = 'PAN card upload is required.'; errEl.style.display = 'block'; return; }
      if (!_srDocFiles.aadhaar) { errEl.textContent = 'Aadhaar card upload is required.'; errEl.style.display = 'block'; return; }
      if (!storage) { errEl.textContent = 'Document storage is not available right now.'; errEl.style.display = 'block'; return; }

      const btn = document.getElementById('sr_submitBtn');
      btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Submitting…';
      try {
        // Sign in anonymously so Storage/Firestore security rules (isSignedIn) are satisfied.
        if (!auth.currentUser) { await auth.signInAnonymously(); }
        const requestId = 'req' + Date.now() + Math.random().toString(36).slice(2, 8);

        async function uploadDoc(file, name) {
          if (!file) return '';
          const ref = storage.ref(`business_requests/${requestId}/${name}`);
          await ref.put(file);
          return await ref.getDownloadURL();
        }
        const [addressProofUrl, panUrl, aadhaarUrl, fssaiUrl] = await Promise.all([
          uploadDoc(_srDocFiles.addressProof, 'addressProof_' + _srDocFiles.addressProof.name),
          uploadDoc(_srDocFiles.pan, 'pan_' + _srDocFiles.pan.name),
          uploadDoc(_srDocFiles.aadhaar, 'aadhaar_' + _srDocFiles.aadhaar.name),
          _srDocFiles.fssai ? uploadDoc(_srDocFiles.fssai, 'fssai_' + _srDocFiles.fssai.name) : Promise.resolve(''),
        ]);

        let finalSrCat = document.getElementById('sr_category')?.value || 'Food, Bakery & Beverages';
        if (finalSrCat === 'Other') {
          finalSrCat = (document.getElementById('sr_category_custom')?.value || '').trim() || 'Other';
        }
        let finalSrSubCat = getSrSelectedSubCategories();
        if (!finalSrSubCat) {
          finalSrSubCat = document.getElementById('sr_subcategory')?.value || '';
          if (finalSrSubCat === 'Other') {
            finalSrSubCat = (document.getElementById('sr_subcategory_custom')?.value || '').trim() || 'Other';
          }
        }

        const reqData = {
          requestId,
          email: _srEmailOtp.email,
          mobile: _vnMobile,
          password, // stored only until admin approval creates the real account, then cleared
          permAddress, currAddress,
          addressProofType,
          addressProofDocUrl: addressProofUrl,
          canDeliverInSociety: (document.getElementById('sr_canDeliver')?.value || 'yes') === 'yes',
          cat: finalSrCat,
          subCat: finalSrSubCat,
          society,
          venture, speciality,
          desc: (document.getElementById('sr_desc')?.value || '').trim(),
          contact, flat: (document.getElementById('sr_flat')?.value || '').trim(), phone,
          whatsapp: phone,
          instagram: (document.getElementById('sr_instagram')?.value || '').trim(),
          video: (document.getElementById('sr_video')?.value || '').trim(),
          url: (document.getElementById('sr_url')?.value || '').trim(),
          image: _srPendingImg || '',
          panDocUrl: panUrl, aadhaarDocUrl: aadhaarUrl, fssaiDocUrl: fssaiUrl,
          gstNumber: (document.getElementById('sr_gstNumber')?.value || '').trim(),
          menu: _srMenuItems,
          detailsText: (document.getElementById('sr_detailsText')?.value || '').trim(),
          detailsImage: _srDetailsImg || '',
          status: 'pending',
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        };
        await db.collection('business_requests').doc(requestId).set(reqData);
        closeModal('businessRegModal');
        showToast('Application submitted! You will be emailed once approved. ✓');
      } catch (e) {
        errEl.textContent = 'Submission failed: ' + e.message;
        errEl.style.display = 'block';
      } finally {
        btn.disabled = false; btn.innerHTML = '<i class="fa fa-paper-plane"></i> Submit Application';
      }
    }

    /* ═══════════ PDF ═══════════ */
    function generatePDF() {
      const btn = document.getElementById('pdfBtn');
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Generating…'; btn.disabled = true;
      setTimeout(() => {
        try {
          const { jsPDF } = window.jspdf;
          const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
          const pw = 210, ph = 297;
          const G = [26, 92, 46], GOLD = [184, 150, 46], W = [255, 255, 255];

          function hdr(pg) {
            doc.setFillColor(...G); doc.rect(0, 0, pw, 8, 'F');
            doc.setFontSize(7); doc.setTextColor(...W); doc.setFont('helvetica', 'bold');
            doc.text('TYNTRON | For the Residents, By the Residents', pw / 2, 5.5, { align: 'center' });
            doc.setFillColor(...GOLD); doc.rect(0, ph - 10, pw, 10, 'F');
            doc.setFontSize(7); doc.setTextColor(...G);
            doc.text('Page ' + pg + '  |  Edition: ' + edition + '  |  Connect - Collaborate - Create - Grow', pw / 2, ph - 4, { align: 'center' });
          }

          /* Cover */
          const now = new Date();
          const edition = now.toLocaleString('default', { month: 'long' }) + ' ' + now.getFullYear();

          hdr(1);
          /* Light green background matching website hero */
          doc.setFillColor(236, 245, 236); doc.rect(0, 8, pw, ph - 18, 'F');

          /* Gold accent line under header */
          doc.setFillColor(...GOLD); doc.rect(0, 8, pw, 1.5, 'F');

          /* Society tagline */
          doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(100, 130, 100);
          doc.text('PRATEEK LAUREL SOCIETY  |  Sector 120, Noida', pw / 2, 30, { align: 'center' });

          /* Gold separator */
          doc.setDrawColor(...GOLD); doc.setLineWidth(0.4); doc.line(55, 34, pw - 55, 34);

          /* Main title */
          doc.setFont('helvetica', 'bold'); doc.setFontSize(30); doc.setTextColor(...G);
          doc.text('TynTron', pw / 2, 58, { align: 'center' });

          /* Subtitle */
          doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(60, 90, 60);
          doc.text('Discover and support neighbourhood businesses in Prateek Laurel Society.', pw / 2, 72, { align: 'center' });
          doc.text('Shop local, grow together.', pw / 2, 80, { align: 'center' });

          /* Green separator */
          doc.setDrawColor(...G); doc.setLineWidth(0.5); doc.line(30, 86, pw - 30, 86);

          /* Tagline */
          doc.setFont('helvetica', 'italic'); doc.setFontSize(9); doc.setTextColor(...GOLD);
          doc.text('Connect  |  Collaborate  |  Create  |  Grow', pw / 2, 94, { align: 'center' });

          /* ── Three stat boxes matching website ── */
          const sbx = [15, 75, 135], sbw = 55, sbh = 30, sby = 110;

          /* Box 1 – Local Ventures (green) */
          doc.setFillColor(...G); doc.roundedRect(sbx[0], sby, sbw, sbh, 3, 3, 'F');
          doc.setFont('helvetica', 'bold'); doc.setFontSize(20); doc.setTextColor(...W);
          doc.text(String(DATA.length), sbx[0] + sbw / 2, sby + 14, { align: 'center' });
          doc.setFontSize(7); doc.setFont('helvetica', 'normal');
          doc.text('LOCAL VENTURES', sbx[0] + sbw / 2, sby + 24, { align: 'center' });

          /* Box 2 – Categories (green) */
          doc.setFillColor(...G); doc.roundedRect(sbx[1], sby, sbw, sbh, 3, 3, 'F');
          doc.setFont('helvetica', 'bold'); doc.setFontSize(20); doc.setTextColor(...W);
          doc.text('6', sbx[1] + sbw / 2, sby + 14, { align: 'center' });
          doc.setFontSize(7); doc.setFont('helvetica', 'normal');
          doc.text('CATEGORIES', sbx[1] + sbw / 2, sby + 24, { align: 'center' });

          /* Box 3 – Verified Directory (gold, dark green text) */
          doc.setFillColor(...GOLD); doc.roundedRect(sbx[2], sby, sbw, sbh, 3, 3, 'F');
          /* Draw a manual checkmark since Helvetica doesn't support Unicode checkmark */
          const ckx = sbx[2] + sbw / 2, cky = sby + 12;
          doc.setDrawColor(...G); doc.setLineWidth(1.8);
          doc.lines([[4, 5], [9, -10]], ckx - 7, cky);
          doc.setFontSize(7); doc.setFont('helvetica', 'normal'); doc.setTextColor(...G);
          doc.text('VERIFIED DIRECTORY', sbx[2] + sbw / 2, sby + 24, { align: 'center' });

          /* Description */
          doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(70, 100, 70);
          doc.text('Welcome to our local business directory, celebrating neighbourhood entrepreneurship', pw / 2, 158, { align: 'center' });
          doc.text('and making it easier for residents to discover and support one another.', pw / 2, 165, { align: 'center' });

          /* Edition pill (dynamic) */
          doc.setFillColor(220, 240, 220); doc.setDrawColor(...G); doc.setLineWidth(0.4);
          doc.roundedRect(pw / 2 - 28, 172, 56, 9, 2, 2, 'FD');
          doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...G);
          doc.text('Edition: ' + edition, pw / 2, 178.5, { align: 'center' });

          /* Category pages */
          let pg = 2;
          CATS.forEach(cat => {
            const items = DATA.filter(d => d && d.cat === cat.name);
            if (!items.length) return;
            /* Build a lookup map keyed by serial number for reliable row->item mapping */
            const itemBySerial = {};
            items.forEach((it, i) => { itemBySerial[i + 1] = it; });

            doc.addPage(); hdr(pg++);
            doc.setFillColor(250, 247, 242); doc.rect(0, 8, pw, ph - 18, 'F');
            doc.setFillColor(...G); doc.rect(10, 14, pw - 20, 10, 'F');
            doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(...W);
            doc.text(' ' + cat.name, 14, 21);
            doc.autoTable({
              startY: 28, margin: { left: 10, right: 10 },
              head: [['#', 'Venture', 'Speciality / Description', 'Contact', 'Flat', 'Phone / Links']],
              body: items.map((it, i) => [
                i + 1,
                it.venture || '',
                (it.speciality || '') + (it.desc ? '\n' + (it.desc || '').substring(0, 60) + '...' : ''),
                it.contact || '',
                it.flat || '',
                ''
              ]),
              columnStyles: {
                0: { cellWidth: 10, halign: 'center' },
                1: { cellWidth: 35 }, 2: { cellWidth: 52 }, 3: { cellWidth: 30 }, 4: { cellWidth: 14, halign: 'center' }, 5: { cellWidth: 49 }
              },
              headStyles: { fillColor: G, textColor: W, fontSize: 8, fontStyle: 'bold', halign: 'center', cellPadding: 3 },
              bodyStyles: { fontSize: 7.2, cellPadding: { top: 3, bottom: 3, left: 2, right: 2 }, textColor: [30, 30, 30] },
              alternateRowStyles: { fillColor: [240, 250, 243] },
              didParseCell(data) {
                if (data.column.index !== 5 || data.section !== 'body') return;
                const serial = data.row.raw && data.row.raw[0];
                const it = itemBySerial[serial];
                if (!it) return;
                data.cell.text = [''];
                let h = 6;
                if (it.phone) h += 4.5;
                if (it.whatsapp) h += 4.5;
                if (it.instagram) h += 4.5;
                if (it.url) h += 4.5;
                if (it.video) h += 4.5;
                data.cell.styles.minCellHeight = Math.max(12, h);
              },
              didDrawCell(data) {
                if (data.column.index !== 5 || data.section !== 'body') return;
                const serial = data.row.raw && data.row.raw[0];
                const it = itemBySerial[serial];
                if (!it) return;
                const x = data.cell.x + 1.5, y = data.cell.y + 3.5, lh = 4.5;
                let dy = 0;
                doc.setFontSize(7);
                if (it.phone) {
                  doc.setTextColor(26, 92, 46); doc.setFont('helvetica', 'bold');
                  doc.text('Ph: ' + it.phone, x, y + dy);
                  doc.link(x, y + dy - 3, 42, 4, { url: 'tel:' + it.phone });
                  dy += lh;
                }
                if (it.whatsapp) {
                  doc.setTextColor(37, 150, 60); doc.setFont('helvetica', 'normal');
                  doc.text('WA: ' + it.whatsapp, x, y + dy);
                  doc.link(x, y + dy - 3, 42, 4, { url: 'https://wa.me/91' + it.whatsapp });
                  dy += lh;
                }
                if (it.instagram) {
                  const ig = it.instagram.startsWith('http') ? it.instagram : 'https://instagram.com/' + it.instagram.replace('@', '');
                  doc.setTextColor(180, 40, 100);
                  doc.text('IG: ' + it.instagram, x, y + dy);
                  doc.link(x, y + dy - 3, 42, 4, { url: ig });
                  dy += lh;
                }
                if (it.url) {
                  doc.setTextColor(21, 101, 192);
                  doc.text('Web: ' + it.url.replace(/https?:\/\//, '').substring(0, 22), x, y + dy);
                  doc.link(x, y + dy - 3, 42, 4, { url: it.url });
                  dy += lh;
                }
                if (it.video) {
                  doc.setTextColor(200, 20, 20);
                  doc.text('Video', x, y + dy);
                  doc.link(x, y + dy - 3, 14, 4, { url: it.video });
                }
                doc.setTextColor(30, 30, 30); doc.setFont('helvetica', 'normal');
              }
            });
          });

          /* ── Credits page ── */
          doc.addPage(); hdr(pg++);
          doc.setFillColor(236, 245, 236); doc.rect(0, 8, pw, ph - 18, 'F');
          /* Gold accent line */
          doc.setFillColor(...GOLD); doc.rect(0, 8, pw, 1.5, 'F');
          /* Decorative top line */
          doc.setDrawColor(...GOLD); doc.setLineWidth(0.6); doc.line(30, 50, pw - 30, 50);
          /* Label */
          doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(100, 130, 100);
          doc.text('CURATED WITH CARE BY', pw / 2, 62, { align: 'center' });
          /* Names */
          doc.setFont('helvetica', 'bold'); doc.setFontSize(28); doc.setTextColor(...G);
          doc.text('Pratham & Harshit', pw / 2, 82, { align: 'center' });
          /* Underline accent */
          doc.setDrawColor(...GOLD); doc.setLineWidth(1); doc.line(50, 87, pw - 50, 87);
          /* Tagline */
          doc.setFont('helvetica', 'italic'); doc.setFontSize(10); doc.setTextColor(...GOLD);
          doc.text('TynTron – For the Residents, By the Residents', pw / 2, 100, { align: 'center' });
          /* Description */
          doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(70, 100, 70);
          doc.text('TynTron – a platform for the residents, by the residents of Prateek Laurel Society.', pw / 2, 120, { align: 'center' });
          doc.text('Discover and support neighbourhood businesses right at your doorstep.', pw / 2, 128, { align: 'center' });
          /* Separator */
          doc.setDrawColor(...G); doc.setLineWidth(0.3); doc.line(40, 140, pw - 40, 140);
          /* Contact numbers */
          doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(...G);
          doc.text('For any query, connect with us:', pw / 2, 154, { align: 'center' });
          doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(37, 150, 60);
          doc.text('Pratham: +91 8373919344', 70, 163);
          doc.link(70, 159, 62, 6, { url: 'https://wa.me/918373919344' });
          doc.text('Harshit: +91 8826213763', 122, 163);
          doc.link(122, 159, 62, 6, { url: 'https://wa.me/918826213763' });
          /* Footer note */
          doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(120, 150, 120);
          doc.text('Edition: ' + edition, pw / 2, 178, { align: 'center' });
          /* Bottom decorative line */
          doc.setDrawColor(...GOLD); doc.setLineWidth(0.6); doc.line(30, 185, pw - 30, 185);

          doc.save('PL_Business_Directory_' + edition.replace(' ', '_') + '.pdf');
          showToast('PDF downloaded! ✓');
        } catch (err) { console.error('PDF error:', err); alert('PDF error: ' + err.message); }
        btn.innerHTML = '<i class="fa fa-file-pdf"></i> Download PDF'; btn.disabled = false;
      }, 120);
    }

    /* ═══════════ TOAST ═══════════ */
    function showToast(msg) {
      document.getElementById('toastMsg').textContent = msg;
      const t = document.getElementById('toast');
      t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000);
    }

    /* ═══════════ PUBLISH ═══════════ */
    async function publishToGitHub() {
      if (!githubToken) { showToast('Enter GitHub token when logging in to publish'); return; }
      const btn = document.getElementById('publishBtn');
      btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Publishing…';
      try {
        const dataStr = JSON.stringify(DATA, null, 2);
        const content = btoa(unescape(encodeURIComponent(dataStr)));
        let sha = '';
        try {
          const r = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${DATA_FILE}`, {
            headers: { 'Authorization': `token ${githubToken}`, 'Accept': 'application/vnd.github.v3+json' }
          });
          if (r.ok) { const d = await r.json(); sha = d.sha || ''; }
        } catch (e) { }
        const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${DATA_FILE}`, {
          method: 'PUT',
          headers: { 'Authorization': `token ${githubToken}`, 'Content-Type': 'application/json', 'Accept': 'application/vnd.github.v3+json' },
          body: JSON.stringify({ message: 'Update catalogue data', content, ...(sha ? { sha } : {}) })
        });
        if (res.ok) {
          showToast('Published to GitHub ✓  Changes are now live globally');
        } else {
          const err = await res.json();
          showToast(`GitHub error: ${err.message}`);
        }
      } catch (e) {
        showToast(`Error: ${e.message}`);
      } finally {
        btn.disabled = false; btn.innerHTML = '<i class="fa fa-cloud-arrow-up"></i> Publish to GitHub';
      }
    }

    /* ═══════════ ADVERTISEMENT GRID ═══════════
       Static bento-style grid — every ad box is shown at once (no rotation), sizes
       alternate big/small for visual rhythm. Tapping a box opens the vendor's full
       detail view directly, same as tapping any other business tile. */
    (function () {
      function pickItems() {
        const featured = SITE_CONFIG.featuredVendorIds || [];
        const adTypes = SITE_CONFIG.adTypes || {};
        if (!featured.length) return []; // No featured vendors = no ads shown
        return DATA.filter(d => {
          if (!featured.includes(d.id) || !d.venture || !d.phone) return false;
          const type = adTypes[d.id] || 'local';
          if (type === 'global') return true; // Global Ads bypass distance constraint
          return isVendorWithin5km(d); // Local Ads enforce 5km radius
        });
      }

      function imgHTML(item) {
        const img = item.image || IMGS[item.id] || '';
        if (img) return `<img src="${img}" alt="">`;
        return PL_LOGO_SVG;
      }

      function buildGrid() {
        const items = pickItems();
        const grid = document.getElementById('adGrid');
        if (!grid) return;
        grid.innerHTML = '';
        if (!items.length) { grid.style.display = 'none'; return; }
        grid.style.display = '';
        items.forEach((item, i) => {
          const box = document.createElement('div');
          box.className = 'ad-box ' + (i % 3 === 0 ? 'big' : 'small');
          box.innerHTML = imgHTML(item);
          box.addEventListener('click', () => { openMenuModal(item.id); });
          grid.appendChild(box);
        });
      }

      window.initAd = function () { buildGrid(); };
      buildGrid();
    })();

    /* ═══════════ PANEL SWITCHING ═══════════ */
    function switchPanel(panel) {
      ['customer', 'business', 'admin'].forEach(p => {
        const el = document.getElementById('panel-' + p);
        if (el) el.style.display = p === panel ? 'block' : 'none';
      });
      document.querySelectorAll('.panel-tab-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.panel === panel);
      });
      const bottomNav = document.getElementById('bottomNav');
      if (bottomNav) bottomNav.style.display = panel === 'customer' ? 'flex' : 'none';
      if (panel === 'business') renderBusinessPanel();
      if (panel === 'admin') renderAdminPanel();
    }

    /* ═══════════ HARDWARE BACK BUTTON (Android) ═══════════
       Amazon-style: unwind whatever's on top (modal, vendor detail, business/admin
       panel, non-home tab, drill-down level) one step at a time; once at the Home
       tab's root, a second back press within 2s exits the app, otherwise shows a
       "press back again" toast and re-arms. Only registers on native Android —
       this event never fires on iOS or the plain website. */
    let _backExitArmed = false, _backExitTimer = null;

    function _topOpenModal() {
      const reAuth = document.getElementById('reAuthModal');
      if (reAuth && reAuth.classList.contains('open')) return reAuth;
      return document.querySelector('.modal-overlay.open');
    }

    function _handleHardwareBack() {
      const topModal = _topOpenModal();
      if (topModal) {
        if (topModal.id === 'reAuthModal') _reAuthCancel();
        else closeModal(topModal.id);
        return;
      }
      if (_menuVendor) { closeVendorDetail(); return; }

      const activePanel = document.querySelector('.panel-tab-btn.active')?.dataset.panel || 'customer';
      if (activePanel === 'business' || activePanel === 'admin') { switchCustomerPage('home'); return; }

      if (_customerPage !== 'home') { switchCustomerPage('home'); return; }

      if (_browseLevel === 'category') { backToSociety(); return; }
      if (_browseLevel === 'society' || _browseLevel === 'societyPicker') { backToSocieties(); return; }

      // At the Home-tab root — double-back-to-exit.
      if (_backExitArmed) {
        clearTimeout(_backExitTimer);
        window.Capacitor?.Plugins?.App?.exitApp();
        return;
      }
      _backExitArmed = true;
      showToast('Press back again to exit');
      _backExitTimer = setTimeout(() => { _backExitArmed = false; }, 2000);
    }

    function _setupHardwareBackButton() {
      if (!window.Capacitor?.isNativePlatform?.()) return;
      window.Capacitor.Plugins.App?.addListener('backButton', _handleHardwareBack);
    }

    /* ═══════════ PULL-TO-REFRESH (Home tab only) ═══════════
       Plain touch-event gesture (works in the app AND a mobile browser — no
       native plugin needed). Only arms when on the Home tab, scrolled all the
       way to the top, and nothing (modal/vendor detail) is covering it. */
    let _ptrStartY = null, _ptrPull = 0, _ptrActive = false, _ptrRefreshing = false;
    const PTR_THRESHOLD = 70, PTR_MAX = 100;

    function _ptrEligible() {
      if (_customerPage !== 'home' || _ptrRefreshing) return false;
      if ((window.scrollY || document.documentElement.scrollTop || 0) > 2) return false;
      if (_topOpenModal() || _menuVendor) return false;
      return true;
    }
    function _ptrReset() {
      const el = document.getElementById('ptrIndicator');
      if (el) { el.style.height = '0px'; el.classList.remove('ptr-ready', 'ptr-spinning', 'ptr-dragging'); }
      _ptrPull = 0;
    }
    function _ptrTouchStart(e) {
      _ptrStartY = _ptrEligible() ? e.touches[0].clientY : null;
    }
    function _ptrTouchMove(e) {
      if (_ptrStartY == null) return;
      const dy = e.touches[0].clientY - _ptrStartY;
      if (dy <= 0) return;
      if (!_ptrEligible()) { _ptrStartY = null; _ptrReset(); return; }
      _ptrActive = true;
      const el = document.getElementById('ptrIndicator');
      el.classList.add('ptr-dragging');
      _ptrPull = Math.min(dy * 0.5, PTR_MAX);
      el.style.height = _ptrPull + 'px';
      el.classList.toggle('ptr-ready', _ptrPull >= PTR_THRESHOLD);
      e.preventDefault();
    }
    function _ptrTouchEnd() {
      if (!_ptrActive) { _ptrStartY = null; return; }
      _ptrActive = false;
      document.getElementById('ptrIndicator').classList.remove('ptr-dragging');
      if (_ptrPull >= PTR_THRESHOLD) _ptrDoRefresh();
      else _ptrReset();
      _ptrStartY = null;
    }
    async function _ptrDoRefresh() {
      _ptrRefreshing = true;
      const el = document.getElementById('ptrIndicator');
      el.style.height = '56px';
      el.classList.add('ptr-spinning');
      el.classList.remove('ptr-ready');
      try {
        if (FB_READY && db) {
          const vendors = await fsLoadVendors();
          if (vendors && vendors.length) { DATA = vendors; saveData(DATA); }
        }
        await fsLoadConfig();
        applyFooterLinks(); buildSocietySelector();
        renderAll(); renderGlobalCategoryBoxes(); renderGlobalProductBoxes(); renderCategoryPage();
        if (typeof window.initAd === 'function') window.initAd();
        showToast('Refreshed ✓');
      } catch (e) { }
      finally {
        _ptrRefreshing = false;
        setTimeout(_ptrReset, 300);
      }
    }
    function _setupPullToRefresh() {
      document.addEventListener('touchstart', _ptrTouchStart, { passive: true });
      document.addEventListener('touchmove', _ptrTouchMove, { passive: false });
      document.addEventListener('touchend', _ptrTouchEnd, { passive: true });
      document.addEventListener('touchcancel', _ptrTouchEnd, { passive: true });
    }

    function openLoginModal() {
      document.getElementById('loginErr').style.display = 'none';
      document.getElementById('loginModal').classList.add('open');
      setTimeout(() => { document.getElementById('businessEmailInput').focus(); }, 120);
    }

    /* ── Admin tab switcher ── */
    let _adminTab = 'overview';
    function switchAdminTab(tab) {
      _adminTab = tab;
      document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
      renderAdminTab(tab);
    }
    function renderAdminTab(tab) {
      const c = document.getElementById('adminTabContent');
      if (!c) return;
      switch (tab) {
        case 'overview': renderAdminOverview(c); break;
        case 'vendors': renderAdminVendors(c); break;
        case 'businessreq': renderAdminBusinessRequests(c); break;
        case 'accounts': renderAdminAccounts(c); break;
        case 'customers': renderAdminCustomers(c); break;
        case 'config': renderAdminConfig(c); break;
        case 'ads': renderAdminAds(c); break;
        case 'stats': renderAdminStats(c); break;
        case 'reviews': renderAdminReviews(c); break;
        case 'deletions': renderAdminDeletionHistory(c); break;
      }
    }

    function isCurrentBusinessDeactivated() {
      if (!currentBusiness) return false;
      if (currentBusiness.active === false) return true;
      const vendor = DATA.find(d => d.id === currentBusiness.vendorId);
      if (vendor && vendor.active === false) return true;
      if (typeof _srqAll !== 'undefined' && Array.isArray(_srqAll) && _srqAll.length) {
        const req = _srqAll.find(r => r.email === currentBusiness.email || (r.assignedUid && r.assignedUid === currentBusiness.uid) || (r.assignedVendorId && r.assignedVendorId === currentBusiness.vendorId));
        if (req && req.active === false) return true;
      }
      return false;
    }

    /* ── Business panel (Phase 4) ── */
    function renderBusinessPanel() {
      if (!currentBusiness) { document.getElementById('businessContent').innerHTML = '<div class="empty-state"><i class="fa fa-lock"></i><p>Not logged in.</p></div>'; return; }
      const vendor = DATA.find(d => d.id === currentBusiness.vendorId);
      document.getElementById('businessPanelTitle').textContent = vendor ? vendor.venture : 'My Business';
      if (!vendor) {
        document.getElementById('businessContent').innerHTML = `<div class="empty-state"><i class="fa fa-store"></i><p>No vendor assigned. Contact admin.</p></div>`;
        return;
      }

      const isDeact = isCurrentBusinessDeactivated();
      const deactivatedBanner = isDeact ? `
        <div style="background:#fff3e0;border:1.5px solid #ffe0b2;border-radius:10px;padding:16px 20px;margin-bottom:20px;color:#e65100;display:flex;align-items:center;gap:14px;box-shadow:0 2px 8px rgba(0,0,0,0.05)">
          <i class="fa fa-triangle-exclamation" style="font-size:1.8rem;color:#f57c00;flex-shrink:0"></i>
          <div>
            <strong style="font-size:.95rem;color:#b71c1c">Your account is deactivated. Please contact admin.</strong><br>
            <span style="font-size:.83rem;color:#e65100">You can log in and view your profile, but you cannot list or edit services right now. Please contact admin to reactivate your listing.</span>
          </div>
        </div>` : '';

      document.getElementById('businessContent').innerHTML = deactivatedBanner + _businessSubscriptionHTML(vendor, currentBusiness) + _businessBusinessHTML(vendor) + _businessNotifyRequestsPlaceholderHTML() + _businessOrdersPlaceholderHTML() + _businessMenuHTML(vendor) + _businessChangePasswordHTML();
      renderWeeklyDayPills();
      renderBusinessNotifyRequests(vendor.id);
      renderBusinessOrders(vendor.id);
    }

    /* ── BUSINESS SUBSCRIPTION & RAZORPAY INTEGRATION ── */
    function _businessSubscriptionHTML(v, business) {
      const status = v.subscriptionStatus || (business && business.subscriptionStatus) || 'none';
      const plan = v.subscriptionPlan || (business && business.subscriptionPlan) || 'monthly';
      const expiry = v.subscriptionExpiry || (business && business.subscriptionExpiry) || null;
      const lastPaymentId = v.lastPaymentId || (business && business.lastPaymentId) || '';
      const lastPaymentDate = v.lastPaymentDate || (business && business.lastPaymentDate) || '';

      const monthlyPrice = SITE_CONFIG.subMonthlyPrice || 499;
      const annualPrice = SITE_CONFIG.subAnnualPrice || 3999;
      const savingsPerYear = (monthlyPrice * 12) - annualPrice;

      let badgeHTML = '';
      let statusBanner = '';

      const isExpired = status === 'active' && expiry && new Date(expiry) < new Date();
      const effectiveStatus = isExpired ? 'expired' : status;

      if (effectiveStatus === 'active') {
        const daysLeft = expiry ? Math.max(0, Math.ceil((new Date(expiry) - new Date()) / (1000 * 60 * 60 * 24))) : 'Unlimited';
        badgeHTML = `<span style="background:#e6f4ea;color:#137333;font-size:.75rem;padding:4px 10px;border-radius:12px;font-weight:700"><i class="fa fa-circle-check"></i> ACTIVE</span>`;
        statusBanner = `
          <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between">
            <div>
              <div style="font-weight:700;color:#166534;font-size:.92rem"><i class="fa fa-crown" style="color:var(--gold)"></i> Subscription Active (${plan.toUpperCase()} Plan)</div>
              <div style="font-size:.8rem;color:#15803d;margin-top:2px">Valid until <strong>${expiry ? new Date(expiry).toLocaleDateString() : 'Lifetime'}</strong> (${daysLeft} days remaining)</div>
            </div>
            <div style="display:flex;gap:8px">
              <button class="btn btn-sm btn-primary" onclick="toggleSubPlanSelector()"><i class="fa fa-rotate-right"></i> Renew / Change</button>
              <button class="btn btn-sm btn-danger" onclick="businessCancelSubscription()"><i class="fa fa-ban"></i> Cancel</button>
            </div>
          </div>`;
      } else if (effectiveStatus === 'expired' || effectiveStatus === 'FETCH_FAILED') {
        badgeHTML = `<span style="background:#fee2e2;color:#dc2626;font-size:.75rem;padding:4px 10px;border-radius:12px;font-weight:700"><i class="fa fa-circle-xmark"></i> ${effectiveStatus.toUpperCase()}</span>`;
        statusBanner = `
          <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:10px;padding:14px 18px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between">
            <div>
              <div style="font-weight:700;color:#991b1b;font-size:.92rem"><i class="fa fa-triangle-exclamation"></i> Subscription ${effectiveStatus === 'FETCH_FAILED' ? 'Payment Failed' : 'Expired'} (Listing Hidden)</div>
              <div style="font-size:.8rem;color:#b91c1c;margin-top:2px">Your business is currently hidden from public customers. Click Pay Now to restore your active subscription.</div>
            </div>
            <button class="btn btn-sm btn-primary" onclick="toggleSubPlanSelector()"><i class="fa fa-bolt"></i> Pay Now</button>
          </div>`;
      } else if (effectiveStatus === 'CANCELLED_BY_VENDOR' || effectiveStatus === 'CANCELLED_BY_ADMIN') {
        badgeHTML = `<span style="background:#fee2e2;color:#dc2626;font-size:.75rem;padding:4px 10px;border-radius:12px;font-weight:700"><i class="fa fa-ban"></i> CANCELLED</span>`;
        statusBanner = `
          <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:10px;padding:14px 18px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between">
            <div>
              <div style="font-weight:700;color:#991b1b;font-size:.92rem"><i class="fa fa-ban"></i> Subscription Cancelled (${effectiveStatus})</div>
              <div style="font-size:.8rem;color:#b91c1c;margin-top:2px">Your subscription was cancelled. Select a plan below and pay to re-activate your business listing.</div>
            </div>
            <button class="btn btn-sm btn-primary" onclick="toggleSubPlanSelector()"><i class="fa fa-bolt"></i> Re-activate</button>
          </div>`;
      } else {
        badgeHTML = `<span style="background:#fff3e0;color:#e65100;font-size:.75rem;padding:4px 10px;border-radius:12px;font-weight:700"><i class="fa fa-bolt"></i> PENDING / INACTIVE</span>`;
        statusBanner = `
          <div style="background:#fff8f1;border:1.5px solid #ffedd5;border-radius:10px;padding:14px 18px;margin-bottom:16px">
            <div style="font-weight:700;color:#9a3412;font-size:.92rem"><i class="fa fa-crown" style="color:var(--gold)"></i> Upgrade to TynTron Business Pro</div>
            <div style="font-size:.8rem;color:#c2410c;margin-top:2px">Subscribe to unlock premium listing features, order management, and customer reach across the society.</div>
          </div>`;
      }

      const showPlansDefault = effectiveStatus !== 'active';

      return `
        <div class="s-card" style="margin-bottom:20px" id="businessSubscriptionCard">
          <div class="s-card-title" style="display:flex;justify-content:space-between;align-items:center">
            <span><i class="fa fa-crown" style="color:var(--gold)"></i> Business Subscription &amp; Billing</span>
            ${badgeHTML}
          </div>

          ${statusBanner}

          <div id="subPlanSelectorContainer" style="display:${showPlansDefault ? 'block' : 'none'}">
            <div style="font-weight:600;font-size:.86rem;margin-bottom:12px;color:var(--text)">Select Subscription Plan:</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
              
              <!-- Monthly Plan -->
              <div class="sub-plan-box" id="planBox_monthly" onclick="selectSubPlan('monthly')" style="border:2px solid var(--green);border-radius:12px;padding:16px;background:var(--white);cursor:pointer;position:relative;transition:var(--tr)">
                <input type="radio" name="subPlanChoice" id="radio_monthly" value="monthly" checked style="position:absolute;top:14px;right:14px;accent-color:var(--green)">
                <div style="font-weight:700;font-size:1rem;color:var(--text)">Monthly Plan</div>
                <div style="font-size:1.4rem;font-weight:800;color:var(--green);margin:6px 0">₹${monthlyPrice} <span style="font-size:.8rem;font-weight:400;color:var(--text-muted)">/ month</span></div>
                <div style="font-size:.78rem;color:var(--text-muted)">Billed monthly. Standard listing &amp; order receiving privileges.</div>
              </div>

              <!-- Annual Plan -->
              <div class="sub-plan-box" id="planBox_annual" onclick="selectSubPlan('annual')" style="border:2px solid var(--border);border-radius:12px;padding:16px;background:var(--white);cursor:pointer;position:relative;transition:var(--tr)">
                <span style="position:absolute;top:-10px;left:14px;background:var(--gold);color:#fff;font-size:.65rem;font-weight:700;padding:2px 8px;border-radius:10px">BEST VALUE ${savingsPerYear > 0 ? `(SAVE ₹${savingsPerYear})` : ''}</span>
                <input type="radio" name="subPlanChoice" id="radio_annual" value="annual" style="position:absolute;top:14px;right:14px;accent-color:var(--green)">
                <div style="font-weight:700;font-size:1rem;color:var(--text)">Annual Plan</div>
                <div style="font-size:1.4rem;font-weight:800;color:var(--green);margin:6px 0">₹${annualPrice} <span style="font-size:.8rem;font-weight:400;color:var(--text-muted)">/ year</span></div>
                <div style="font-size:.78rem;color:var(--text-muted)">1 full year of uninterrupted service. Equivalent to ₹${Math.round(annualPrice/12)}/mo.</div>
              </div>

            </div>

            <button class="btn btn-primary btn-block" style="padding:12px;font-size:.95rem;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px" onclick="startRazorpayBusinessSubscription()">
              <i class="fa fa-shield-halved"></i> Pay &amp; Activate Subscription via Razorpay
            </button>

            <div style="text-align:center;font-size:.72rem;color:var(--text-muted);margin-top:10px">
              <i class="fa fa-lock" style="color:var(--green)"></i> Secured 256-bit encrypted checkout via Razorpay • Supports UPI, Cards, NetBanking &amp; Wallets
            </div>
          </div>

          ${lastPaymentId ? `
            <div style="margin-top:16px;border-top:1px solid var(--border);padding-top:12px">
              <div style="font-size:.78rem;font-weight:700;color:var(--text-muted);margin-bottom:6px">LAST PAYMENT RECORD</div>
              <div style="font-size:.75rem;color:var(--text);display:flex;justify-content:space-between">
                <span>Payment ID: <code>${esc(lastPaymentId)}</code></span>
                <span>Date: ${lastPaymentDate ? new Date(lastPaymentDate).toLocaleString() : '—'}</span>
              </div>
            </div>
          ` : ''}
        </div>`;
    }

    function selectSubPlan(planKey) {
      const radioM = document.getElementById('radio_monthly');
      const radioA = document.getElementById('radio_annual');
      const boxM = document.getElementById('planBox_monthly');
      const boxA = document.getElementById('planBox_annual');

      if (planKey === 'annual') {
        if (radioA) radioA.checked = true;
        if (boxA) boxA.style.borderColor = 'var(--green)';
        if (boxM) boxM.style.borderColor = 'var(--border)';
      } else {
        if (radioM) radioM.checked = true;
        if (boxM) boxM.style.borderColor = 'var(--green)';
        if (boxA) boxA.style.borderColor = 'var(--border)';
      }
    }

    function toggleSubPlanSelector() {
      const container = document.getElementById('subPlanSelectorContainer');
      if (container) {
        container.style.display = container.style.display === 'none' ? 'block' : 'none';
      }
    }

    async function startRazorpayBusinessSubscription() {
      if (!currentBusiness) {
        showToast('Please log in as a business first.');
        return;
      }
      const vendor = DATA.find(d => d.id === currentBusiness.vendorId);
      if (!vendor) {
        alert('No vendor profile found for your account. Please contact admin.');
        return;
      }

      const radioA = document.getElementById('radio_annual');
      const isAnnual = radioA && radioA.checked;
      const planKey = isAnnual ? 'annual' : 'monthly';

      const monthlyPrice = SITE_CONFIG.subMonthlyPrice || 499;
      const annualPrice = SITE_CONFIG.subAnnualPrice || 3999;
      const planAmount = isAnnual ? annualPrice : monthlyPrice;

      const rzpKeyId = (SITE_CONFIG.rzpKeyId || '').trim();
      if (!rzpKeyId) {
        alert('Razorpay Key ID is not configured yet!\n\nPlease ask Admin to configure Razorpay Key ID in Admin Panel -> Site Config -> Razorpay Payment Gateway.');
        showToast('Razorpay Key ID missing in Site Config.');
        return;
      }

      if (typeof Razorpay === 'undefined') {
        alert('Razorpay SDK failed to load. Please check your internet connection or reload the page.');
        return;
      }

      const options = {
        key: rzpKeyId,
        amount: planAmount * 100,
        currency: "INR",
        name: "TynTron Business Subscription",
        description: `${planKey.toUpperCase()} Subscription for ${vendor.venture}`,
        image: "newlogo.png.jpeg",
        prefill: {
          name: currentBusiness.name || vendor.contact || '',
          email: currentBusiness.email || '',
          contact: vendor.phone || ''
        },
        notes: {
          vendorId: vendor.id,
          vendorName: vendor.venture,
          plan: planKey,
          businessEmail: currentBusiness.email
        },
        theme: {
          color: "#FF9933"
        },
        handler: async function (response) {
          console.log('Razorpay payment successful:', response);
          await processBusinessPaymentSuccess(response, vendor, currentBusiness, planKey, planAmount);
        },
        modal: {
          ondismiss: function () {
            showToast('Payment checkout closed');
          }
        }
      };

      try {
        const rzp = new Razorpay(options);
        rzp.on('payment.failed', function (resp) {
          console.error('Razorpay payment failed:', resp.error);
          alert('Payment failed: ' + (resp.error.description || 'Transaction declined'));
        });
        rzp.open();
      } catch (err) {
        console.error('Failed to open Razorpay checkout:', err);
        alert('Failed to initialize Razorpay checkout: ' + err.message);
      }
    }

    async function processBusinessPaymentSuccess(response, vendor, business, planKey, planAmount) {
      try {
        showToast('Payment received! Updating subscription…');

        const now = new Date();
        const durationDays = planKey === 'annual' ? 365 : 30;
        const expiryDate = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000);
        const paymentId = response.razorpay_payment_id || ('PAY_' + Date.now());

        vendor.subscriptionStatus = 'active';
        vendor.subscriptionPlan = planKey;
        vendor.subscriptionExpiry = expiryDate.toISOString();
        vendor.lastPaymentId = paymentId;
        vendor.lastPaymentDate = now.toISOString();
        vendor.lastPaymentAmount = planAmount;

        saveData(DATA);

        if (FB_READY && db) {
          await fsSaveVendor(vendor);

          if (business && business.uid) {
            try {
              await db.collection('accounts').doc(business.uid).set({
                subscriptionStatus: 'active',
                subscriptionPlan: planKey,
                subscriptionExpiry: expiryDate.toISOString(),
                lastPaymentId: paymentId,
                lastPaymentDate: now.toISOString(),
                lastPaymentAmount: planAmount
              }, { merge: true });
            } catch (e) {
              console.warn('Failed to update business account doc:', e);
            }
          }

          try {
            await db.collection('order_logs').add({
              type: 'business_subscription',
              vendorId: vendor.id,
              vendorName: vendor.venture,
              businessEmail: business ? business.email : '',
              paymentId: paymentId,
              plan: planKey,
              amount: planAmount,
              expiry: expiryDate.toISOString(),
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          } catch (e) { }
        }

        try {
          const ejsPubKey = SITE_CONFIG.ejsPubKey;
          const ejsService = SITE_CONFIG.ejsServiceId;
          const ejsTemplate = SITE_CONFIG.ejsBusinessTemplateId || SITE_CONFIG.ejsTemplateId;
          if (ejsPubKey && ejsService && ejsTemplate && business.email) {
            emailjs.send(ejsService, ejsTemplate, {
              to_email: business.email,
              to_name: business.name || vendor.contact || 'Business',
              subject: 'TynTron Business Subscription Confirmed!',
              message: `Thank you for subscribing to TynTron Business Pro (${planKey.toUpperCase()} Plan). Payment ID: ${paymentId}. Your subscription is active until ${expiryDate.toLocaleDateString()}.`
            }, ejsPubKey);
          }
        } catch (e) {
          console.warn('Receipt email error:', e);
        }

        alert(`🎉 Subscription Activated!\n\nThank you! Your ${planKey.toUpperCase()} subscription is active until ${expiryDate.toLocaleDateString()}.\nPayment ID: ${paymentId}`);
        showToast('Subscription active ✓');
        renderBusinessPanel();

      } catch (err) {
        console.error('Error processing payment success:', err);
        alert('Payment recorded, but profile update failed: ' + err.message);
      }
    }

    async function adminGrantSubscription(uid, vendorId, days) {
      const vendor = DATA.find(d => d.id === vendorId);
      const now = new Date();
      const expiryDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
      const planKey = days >= 365 ? 'annual' : 'monthly';

      if (vendor) {
        vendor.subscriptionStatus = 'active';
        vendor.subscriptionPlan = planKey;
        vendor.subscriptionExpiry = expiryDate.toISOString();
        vendor.lastPaymentId = 'ADMIN_GRANTED';
        vendor.lastPaymentDate = now.toISOString();
        saveData(DATA);
        if (FB_READY && db) await fsSaveVendor(vendor);
      }

      if (FB_READY && db && uid) {
        await db.collection('accounts').doc(uid).set({
          subscriptionStatus: 'active',
          subscriptionPlan: planKey,
          subscriptionExpiry: expiryDate.toISOString(),
          lastPaymentId: 'ADMIN_GRANTED',
          lastPaymentDate: now.toISOString()
        }, { merge: true });
      }

      showToast(`Subscription granted for ${days} days ✓`);
      renderAdminAccounts(document.getElementById('adminTabContent'));
    }

    async function businessCancelSubscription() {
      if (!currentBusiness) return;
      const vendor = DATA.find(d => d.id === currentBusiness.vendorId);
      if (!vendor) return;

      const confirmed = await confirmAction({
        title: 'Cancel Subscription?',
        message: `Are you sure you want to cancel your subscription for "${vendor.venture}"?`,
        warning: 'Your business listing will be immediately hidden from public customers on TynTron.',
        confirmText: 'Yes, Cancel Subscription',
        cancelText: 'Keep Subscription',
        danger: true
      });
      if (!confirmed) return;

      vendor.subscriptionStatus = 'CANCELLED_BY_VENDOR';
      vendor.active = false;
      saveData(DATA);

      if (FB_READY && db) {
        await fsSaveVendor(vendor);
        if (currentBusiness.uid) {
          try {
            await db.collection('accounts').doc(currentBusiness.uid).set({
              subscriptionStatus: 'CANCELLED_BY_VENDOR',
              active: false
            }, { merge: true });
          } catch(e){}
        }
      }

      showToast('Subscription cancelled');
      renderBusinessPanel();
    }

    async function adminCancelSubscription(uid, vendorId) {
      const vendor = DATA.find(d => d.id === vendorId);
      const confirmed = await confirmAction({
        title: `Cancel Subscription for ${vendor ? vendor.venture : 'Business'}?`,
        message: 'This will set the subscription status to CANCELLED_BY_ADMIN and hide their vendor listing from public visitors.',
        confirmText: 'Cancel Subscription',
        cancelText: 'Close',
        danger: true
      });
      if (!confirmed) return;

      if (vendor) {
        vendor.subscriptionStatus = 'CANCELLED_BY_ADMIN';
        vendor.active = false;
        saveData(DATA);
        if (FB_READY && db) await fsSaveVendor(vendor);
      }

      if (FB_READY && db && uid) {
        await db.collection('accounts').doc(uid).set({
          subscriptionStatus: 'CANCELLED_BY_ADMIN',
          active: false
        }, { merge: true });
      }

      showToast('Subscription cancelled by Admin ✓');
      renderAdminAccounts(document.getElementById('adminTabContent'));
    }

    function srSelectPlan(planKey) {
      const rM = document.getElementById('srRadio_monthly');
      const rA = document.getElementById('srRadio_annual');
      const bM = document.getElementById('regPlanBox_monthly');
      const bA = document.getElementById('regPlanBox_annual');

      if (planKey === 'annual') {
        if (rA) rA.checked = true;
        if (bA) bA.style.borderColor = 'var(--green)';
        if (bM) bM.style.borderColor = 'var(--border)';
      } else {
        if (rM) rM.checked = true;
        if (bM) bM.style.borderColor = 'var(--green)';
        if (bA) bA.style.borderColor = 'var(--border)';
      }
    }

    async function srPayAndSubmit() {
      const errEl = document.getElementById('sr_err');
      errEl.style.display = 'none';

      const venture = (document.getElementById('sr_venture')?.value || '').trim();
      const speciality = (document.getElementById('sr_speciality')?.value || '').trim();
      const desc = (document.getElementById('sr_desc')?.value || '').trim();
      const contact = (document.getElementById('sr_contact')?.value || '').trim();
      const flat = (document.getElementById('sr_flat')?.value || '').trim();
      const phone = (document.getElementById('sr_phone')?.value || '').trim() || _vnMobile || '';
      const permAddress = (document.getElementById('sr_permAddress')?.value || '').trim();
      const currAddress = (document.getElementById('sr_currAddress')?.value || '').trim();
      const password = document.getElementById('sr_password')?.value || '';
      const password2 = document.getElementById('sr_password2')?.value || '';
      const society = document.getElementById('sr_society')?.value || '';

      if (!_srEmailOtp.verified) { errEl.textContent = 'Please verify your email first.'; errEl.style.display = 'block'; return; }
      const emailCheck = await checkBusinessEmailStatus(_srEmailOtp.email || (document.getElementById('sr_email')?.value || '').trim());
      if (emailCheck.exists) { errEl.textContent = emailCheck.message; errEl.style.display = 'block'; return; }
      if (!_srMobileVerified || !_vnMobile) { errEl.textContent = 'Please verify your mobile number first.'; errEl.style.display = 'block'; return; }
      if (!password || password.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; errEl.style.display = 'block'; return; }
      if (password !== password2) { errEl.textContent = 'Passwords do not match.'; errEl.style.display = 'block'; return; }
      if (!society) { errEl.textContent = 'Please select your society.'; errEl.style.display = 'block'; return; }
      if (!venture) { errEl.textContent = 'Venture / Business Name is required.'; errEl.style.display = 'block'; return; }
      if (!speciality) { errEl.textContent = 'Speciality / Tagline is required.'; errEl.style.display = 'block'; return; }
      if (!desc) { errEl.textContent = 'Business Description is required.'; errEl.style.display = 'block'; return; }
      if (!contact) { errEl.textContent = 'Contact Person is required.'; errEl.style.display = 'block'; return; }
      if (!flat) { errEl.textContent = 'Flat No. / House No. / Office No. is required.'; errEl.style.display = 'block'; return; }
      if (!phone) { errEl.textContent = 'Mobile / WhatsApp Number is required.'; errEl.style.display = 'block'; return; }
      if (!currAddress) { errEl.textContent = 'Current Address is required.'; errEl.style.display = 'block'; return; }
      if (!permAddress) { errEl.textContent = 'Permanent Address is required.'; errEl.style.display = 'block'; return; }
      if (!_srDocFiles.addressProof) { errEl.textContent = 'Address Proof document upload is required.'; errEl.style.display = 'block'; return; }
      if (!_srDocFiles.pan) { errEl.textContent = 'PAN card upload is required.'; errEl.style.display = 'block'; return; }
      if (!_srDocFiles.aadhaar) { errEl.textContent = 'Aadhaar card upload is required.'; errEl.style.display = 'block'; return; }
      if (!storage) { errEl.textContent = 'Document storage is not available right now.'; errEl.style.display = 'block'; return; }

      const rzpKeyId = (SITE_CONFIG.rzpKeyId || '').trim();
      if (!rzpKeyId) {
        alert('Razorpay Key ID is not configured in Admin Site Config!\n\nPlease contact Admin to set up Razorpay Key ID before business registration.');
        errEl.textContent = 'Razorpay Key ID is missing in Admin Config.';
        errEl.style.display = 'block';
        return;
      }

      if (typeof Razorpay === 'undefined') {
        alert('Razorpay SDK is not loaded. Please check your internet connection.');
        return;
      }

      const rA = document.getElementById('srRadio_annual');
      const isAnnual = rA && rA.checked;
      const planKey = isAnnual ? 'annual' : 'monthly';
      const monthlyPrice = SITE_CONFIG.subMonthlyPrice || 499;
      const annualPrice = SITE_CONFIG.subAnnualPrice || 3999;
      const planAmount = isAnnual ? annualPrice : monthlyPrice;

      const options = {
        key: rzpKeyId,
        amount: planAmount * 100,
        currency: "INR",
        name: "TynTron Business Registration",
        description: `${planKey.toUpperCase()} Mandate Authorization for ${venture}`,
        image: "newlogo.png.jpeg",
        prefill: {
          name: contact,
          email: _srEmailOtp.email,
          contact: _vnMobile
        },
        theme: {
          color: "#FF9933"
        },
        handler: async function (response) {
          console.log('Registration Razorpay Payment Successful:', response);
          await srSubmitWithPayment(response, planKey, planAmount);
        },
        modal: {
          ondismiss: function () {
            showToast('Payment checkout cancelled. Please complete payment to submit registration.');
          }
        }
      };

      try {
        const rzp = new Razorpay(options);
        rzp.on('payment.failed', function (resp) {
          alert('Registration payment failed: ' + (resp.error.description || 'Payment declined'));
        });
        rzp.open();
      } catch (e) {
        alert('Failed to launch Razorpay checkout: ' + e.message);
      }
    }

    async function srSubmitWithPayment(rzpResp, planKey, planAmount) {
      const btn = document.getElementById('sr_submitBtn');
      btn.disabled = true;
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Submitting Application &amp; Payment…';

      try {
        if (!auth.currentUser) { await auth.signInAnonymously(); }
        const requestId = 'req' + Date.now() + Math.random().toString(36).slice(2, 8);

        async function uploadDoc(file, name) {
          if (!file) return '';
          const ref = storage.ref(`business_requests/${requestId}/${name}`);
          await ref.put(file);
          return await ref.getDownloadURL();
        }
        const [addressProofUrl, panUrl, aadhaarUrl, fssaiUrl] = await Promise.all([
          uploadDoc(_srDocFiles.addressProof, 'addressProof_' + _srDocFiles.addressProof.name),
          uploadDoc(_srDocFiles.pan, 'pan_' + _srDocFiles.pan.name),
          uploadDoc(_srDocFiles.aadhaar, 'aadhaar_' + _srDocFiles.aadhaar.name),
          _srDocFiles.fssai ? uploadDoc(_srDocFiles.fssai, 'fssai_' + _srDocFiles.fssai.name) : Promise.resolve(''),
        ]);

        let finalSrCat = document.getElementById('sr_category')?.value || 'Food, Bakery & Beverages';
        if (finalSrCat === 'Other') {
          finalSrCat = (document.getElementById('sr_category_custom')?.value || '').trim() || 'Other';
        }
        let finalSrSubCat = getSrSelectedSubCategories();
        if (!finalSrSubCat) {
          finalSrSubCat = document.getElementById('sr_subcategory')?.value || '';
          if (finalSrSubCat === 'Other') {
            finalSrSubCat = (document.getElementById('sr_subcategory_custom')?.value || '').trim() || 'Other';
          }
        }

        const reqData = {
          requestId,
          email: _srEmailOtp.email,
          mobile: _vnMobile,
          password: document.getElementById('sr_password')?.value || '',
          venture: (document.getElementById('sr_venture')?.value || '').trim(),
          speciality: (document.getElementById('sr_speciality')?.value || '').trim(),
          desc: (document.getElementById('sr_desc')?.value || '').trim(),
          contact: (document.getElementById('sr_contact')?.value || '').trim(),
          flat: (document.getElementById('sr_flat')?.value || '').trim(),
          phone: (document.getElementById('sr_phone')?.value || '').trim() || _vnMobile || '',
          permAddress: (document.getElementById('sr_permAddress')?.value || '').trim(),
          currAddress: (document.getElementById('sr_currAddress')?.value || '').trim(),
          society: document.getElementById('sr_society')?.value || 'Prateek Laurel',
          cat: finalSrCat,
          subCat: finalSrSubCat,
          addressProofType: document.getElementById('sr_addressProofType')?.value || '',
          addressProofDocUrl: addressProofUrl,
          panDocUrl: panUrl,
          aadhaarDocUrl: aadhaarUrl,
          fssaiDocUrl: fssaiUrl,
          gstNumber: (document.getElementById('sr_gstNumber')?.value || '').trim(),
          status: 'pending',
          subscriptionStatus: 'PENDING_APPROVAL',
          mandateAuthorized: true,
          paidPlan: planKey,
          paidAmount: planAmount,
          paymentId: rzpResp ? rzpResp.razorpay_payment_id : ('PAY_' + Date.now()),
          paymentDate: new Date().toISOString(),
          active: false,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        await db.collection('business_requests').doc(requestId).set(reqData);

        try {
          const ejsPubKey = SITE_CONFIG.ejsPublicKey;
          const ejsService = SITE_CONFIG.ejsServiceId;
          const ejsTemplate = SITE_CONFIG.ejsTemplateId;
          if (ejsPubKey && ejsService && ejsTemplate) {
            emailjs.send(ejsService, ejsTemplate, {
              to_email: SITE_CONFIG.vnEmail || 'admin@tyntron.com',
              to_name: 'Admin',
              subject: 'New Business Registration & Payment Received!',
              message: `New business application from ${reqData.venture} (${reqData.email}) with ${planKey.toUpperCase()} plan payment (${reqData.paymentId}). Pending admin approval.`
            }, ejsPubKey);
          }
        } catch (e) { }

        closeModal('businessRegModal');
        alert(`🎉 Registration & Payment Received!\n\nThank you! Your business application and ${planKey.toUpperCase()} subscription authorization (Payment ID: ${reqData.paymentId}) have been submitted.\n\nYour account is now pending admin approval. You will receive an email once approved.`);
        showToast('Registration application submitted ✓');

      } catch (e) {
        console.error('Error submitting registration with payment:', e);
        const errEl = document.getElementById('sr_err');
        errEl.textContent = 'Submission failed: ' + e.message;
        errEl.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = '<i class="fa fa-shield-halved"></i> Pay Subscription &amp; Submit Application';
      }
    }

    function _businessNotifyRequestsPlaceholderHTML() {
      return `
        <div class="s-card" style="margin-bottom:20px" id="businessNotifyRequestsCard">
          <div class="s-card-title"><i class="fa fa-bell" style="color:var(--green)"></i> Customer Reopen Requests ("Notify Me" List)</div>
          <div id="businessNotifyRequestsBody"><p style="color:var(--text-muted)"><i class="fa fa-spinner fa-spin"></i> Loading reopen requests…</p></div>
        </div>`;
    }

    function _businessOrdersPlaceholderHTML() {
      return `<div class="s-card">
    <div class="s-card-title"><i class="fa fa-receipt" style="color:var(--green)"></i> Orders Received</div>
    <div id="businessOrdersBody"><p style="color:var(--text-muted)"><i class="fa fa-spinner fa-spin"></i> Loading orders…</p></div>
  </div>`;
    }

    async function renderBusinessOrders(vendorId) {
      const body = document.getElementById('businessOrdersBody');
      if (!body) return;
      const orders = await fsLoadVendorOrders(vendorId);
      if (!orders.length) {
        body.innerHTML = `<p style="color:var(--text-muted);font-size:.85rem">No orders yet.</p>`;
        return;
      }
      body.innerHTML = `<div style="overflow-x:auto"><table class="menu-table">
    <thead><tr><th>Customer</th><th>Items</th><th>Total</th><th>Delivery</th><th>Placed</th></tr></thead>
    <tbody>${orders.map(o => `<tr>
      <td>${esc(o.customerName) || '—'}${o.customerEmail ? `<br><span style="font-size:.72rem;color:var(--text-muted)">${esc(o.customerEmail)}</span>` : ''}</td>
      <td style="font-size:.8rem">${(o.items || []).map(it => `${esc(it.name)} x${it.qty}`).join(', ')}</td>
      <td style="font-weight:700;color:var(--green)">₹${o.total || 0}</td>
      <td style="font-size:.78rem">${esc(o.flat) || '—'}</td>
      <td style="font-size:.72rem;color:var(--text-muted);white-space:nowrap">${o.ts && o.ts.seconds ? new Date(o.ts.seconds * 1000).toLocaleString() : ''}</td>
    </tr>`).join('')}</tbody>
  </table></div>`;
    }

    async function toggleBusinessShopStatus(vendorId, isOpen) {
      if (isCurrentBusinessDeactivated()) {
        alert('Your account is deactivated. Please contact admin.');
        showToast('Your account is deactivated. Please contact admin.');
        renderBusinessPanel();
        return;
      }
      const vendor = DATA.find(d => d.id === vendorId);
      if (!vendor) return;
      vendor.isClosed = !isOpen;
      saveData(DATA);

      if (FB_READY && db) {
        try {
          await fsSaveVendor(vendor);
        } catch (e) {
          console.warn('Failed to sync shop status to Firestore:', e);
        }
      }

      showToast(isOpen ? 'Your shop is now OPEN ✓' : 'Your shop is now CLOSED');
      if (isOpen) {
        sendReopenEmailsToSubscribers(vendorId);
      }
      checkVendorReopenTransitions();
      renderBusinessPanel();
      renderAll();
    }

    async function fsLoadVendorNotifyRequests(vendorId) {
      let requests = [];
      if (FB_READY && db) {
        try {
          const snap = await db.collection('notify_requests').where('vendorId', '==', vendorId).get();
          requests = snap.docs.map(doc => doc.data());
        } catch (e) {
          console.warn('Error loading notify requests from Firestore:', e);
        }
      }
      // Merge local storage subscriptions if present
      const subs = JSON.parse(localStorage.getItem('hb_reopen_subscriptions') || '{}');
      if (subs[vendorId]) {
        const localSub = subs[vendorId];
        if (localSub.customerEmail && !requests.find(r => r.customerEmail === localSub.customerEmail)) {
          requests.push({
            vendorId: vendorId,
            customerName: localSub.customerName || 'Customer',
            customerEmail: localSub.customerEmail,
            customerMobile: localSub.customerMobile || '-',
            createdAt: new Date(localSub.timestamp || Date.now()).toLocaleDateString(),
            notified: !!localSub.notified
          });
        }
      }
      return requests;
    }

    async function renderBusinessNotifyRequests(vendorId) {
      const body = document.getElementById('businessNotifyRequestsBody');
      if (!body) return;
      const requests = await fsLoadVendorNotifyRequests(vendorId);
      const vendor = DATA.find(d => d.id === vendorId);
      const statusInfo = getVendorStatusInfo(vendor);
      const isShopOpen = vendor && !statusInfo.isClosed;

      if (!requests.length) {
        body.innerHTML = `
          <div style="text-align:center;padding:16px 0;color:var(--text-muted)">
            <i class="fa fa-bell-slash" style="font-size:1.5rem;opacity:0.4;margin-bottom:8px;display:block"></i>
            <p style="font-size:0.86rem;margin:0">No customer notify requests yet. When customers click "Notify Me" while your shop is closed, they will appear here.</p>
          </div>`;
        return;
      }

      const pendingReqs = requests.filter(r => !r.notified);
      const notifiedReqs = requests.filter(r => r.notified);

      const sendBtnHTML = isShopOpen ? `
        <button type="button" class="btn btn-sm" onclick="sendReopenEmailsToSubscribers('${vendorId}')" style="background:var(--green,#28a745);color:#fff;border:none;border-radius:10px;padding:8px 14px;font-weight:700;box-shadow:0 2px 8px rgba(40,167,69,0.25);display:inline-flex;align-items:center;gap:6px">
          <i class="fa fa-paper-plane"></i> Send Reopening Email to All (${requests.length})
        </button>` : `
        <span style="font-size:0.78rem;color:#e65100;background:#fff3e0;border:1px solid #ffe0b2;padding:6px 12px;border-radius:10px;font-weight:600;display:inline-flex;align-items:center;gap:6px">
          <i class="fa fa-lock"></i> Turn shop OPEN to send reopening emails
        </span>`;

      body.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="background:#e8f5e9;color:#2e7d32;font-size:0.78rem;font-weight:700;padding:4px 10px;border-radius:12px">Total Requests: ${requests.length}</span>
            <span style="background:#fff3e0;color:#e65100;font-size:0.78rem;font-weight:700;padding:4px 10px;border-radius:12px">Pending: ${pendingReqs.length}</span>
            <span style="background:#e3f2fd;color:#1565c0;font-size:0.78rem;font-weight:700;padding:4px 10px;border-radius:12px">Notified: ${notifiedReqs.length}</span>
          </div>
          ${sendBtnHTML}
        </div>

        <div style="overflow-x:auto">
          <table class="menu-table" style="width:100%">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Email Address</th>
                <th>Mobile Number</th>
                <th>Requested Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${requests.map(r => `
                <tr>
                  <td style="font-weight:700;color:var(--text)"><i class="fa fa-user" style="color:var(--green);margin-right:6px"></i>${esc(r.customerName || 'Customer')}</td>
                  <td style="color:var(--text)"><a href="mailto:${esc(r.customerEmail)}" style="color:var(--green-dark);font-weight:600">${esc(r.customerEmail)}</a></td>
                  <td style="color:var(--text-muted);font-size:0.82rem">${esc(r.customerMobile || '-')}</td>
                  <td style="color:var(--text-muted);font-size:0.8rem">${esc(r.createdAt || 'Recently')}</td>
                  <td>
                    ${r.notified 
                      ? `<span class="badge" style="background:#e8f5e9;color:#2e7d32;padding:4px 8px;border-radius:8px;font-size:0.75rem;font-weight:700"><i class="fa fa-check"></i> Notified</span>` 
                      : `<span class="badge" style="background:#fff3e0;color:#e65100;padding:4px 8px;border-radius:8px;font-size:0.75rem;font-weight:700"><i class="fa fa-clock"></i> Pending</span>`}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>`;
    }

    async function sendReopenEmailsToSubscribers(vendorId) {
      const vendor = DATA.find(d => d.id === vendorId);
      if (!vendor) return;

      const statusInfo = getVendorStatusInfo(vendor);
      if (statusInfo.isClosed) {
        showToast('Your shop is currently CLOSED. Please turn your shop OPEN before sending reopening emails.');
        return;
      }

      const requests = await fsLoadVendorNotifyRequests(vendorId);
      if (!requests.length) {
        showToast('No customer notify requests found for your shop.');
        return;
      }

      const ejsPubKey = SITE_CONFIG.ejsPublicKey || '';
      const ejsService = SITE_CONFIG.ejsServiceId || '';
      const ejsTemplate = SITE_CONFIG.ejsBusinessTemplateId || SITE_CONFIG.ejsTemplateId || '';

      if (!ejsPubKey || !ejsService || !ejsTemplate) {
        showToast('EmailJS configuration missing. Please ask admin to configure EmailJS in Site Config.');
      }

      let sentCount = 0;
      showToast(`Sending reopening emails to ${requests.length} customer(s)...`);

      for (const req of requests) {
        if (!req.customerEmail) continue;

        const subject = `🎉 Good News! ${vendor.venture} is Now OPEN & Accepting Orders!`;
        const message = `Dear ${req.customerName || 'Valued Customer'},\n\n`
          + `Great news! 🥳 ${vendor.venture} has officially REOPENED and is now ready to accept your orders on TynTron!\n\n`
          + `✨ Business Details:\n`
          + `• Venture: ${vendor.venture}\n`
          + `• Speciality: ${vendor.speciality || 'Quality Community Services'}\n`
          + `• Location: ${vendor.society || 'Community'}${vendor.flat ? ' (Flat ' + vendor.flat + ')' : ''}\n\n`
          + `👉 Order Now on TynTron:\n`
          + `https://tyntron.co.in\n\n`
          + `Thank you for supporting home businesses! We look forward to serving you.\n\n`
          + `Best regards,\n`
          + `${vendor.venture} & Team TynTron\n`
          + `For the Residents, By the Residents`;

        if (ejsPubKey && ejsService && ejsTemplate) {
          try {
            await emailjs.init({ publicKey: ejsPubKey });
            await emailjs.send(ejsService, ejsTemplate, {
              from_name: vendor.venture || 'TynTron',
              from_email: 'noreply@tyntron.co.in',
              mobile: req.customerMobile || '',
              subject: subject,
              message: message,
              to_email: req.customerEmail
            });
            sentCount++;
          } catch (e) {
            console.warn('Failed to send email to ' + req.customerEmail, e);
          }
        }

        // Mark as notified in Firestore & Local Storage
        req.notified = true;
        if (FB_READY && db && req.customerEmail) {
          try {
            const reqId = `${vendorId}_${req.customerEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;
            await db.collection('notify_requests').doc(reqId).set({ notified: true, notifiedAt: new Date().toISOString() }, { merge: true });
          } catch (e) { }
        }
      }

      showToast(`Reopening notification email sent to ${sentCount || requests.length} customer(s)! 📧`);
      renderBusinessNotifyRequests(vendorId);
    }

    let _vendorPrevClosedState = {};

    function checkVendorReopenTransitions() {
      if (!Array.isArray(DATA)) return;
      DATA.forEach(vendor => {
        const isCurrentlyClosed = isVendorClosed(vendor);
        const wasClosed = _vendorPrevClosedState[vendor.id];

        if (wasClosed === undefined) {
          _vendorPrevClosedState[vendor.id] = isCurrentlyClosed;
          return;
        }

        if (wasClosed === true && isCurrentlyClosed === false) {
          dispatchReopenNotification(vendor);
        }

        _vendorPrevClosedState[vendor.id] = isCurrentlyClosed;
      });
    }

    function dispatchReopenNotification(vendor) {
      const subs = JSON.parse(localStorage.getItem('hb_reopen_subscriptions') || '{}');
      if (subs[vendor.id]) {
        delete subs[vendor.id];
        localStorage.setItem('hb_reopen_subscriptions', JSON.stringify(subs));

        const ventureName = vendor.venture || 'Shop';
        const msgText = `🔔 ${ventureName} is now available for delivery.`;

        showReopenBannerPopup(vendor, msgText);

        if ("Notification" in window && Notification.permission === "granted") {
          try {
            new Notification(`${ventureName} is now OPEN! 🔔`, {
              body: `${ventureName} is now available for delivery.`,
              icon: vendor.image || ''
            });
          } catch (e) { }
        }
      }
    }

    function showReopenBannerPopup(vendor, msgText) {
      let banner = document.getElementById('hbReopenPopupBanner');
      if (banner) banner.remove();

      banner = document.createElement('div');
      banner.id = 'hbReopenPopupBanner';
      banner.style.cssText = 'position:fixed;top:24px;right:24px;z-index:99999;background:#1b5e20;color:#ffffff;padding:16px 22px;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,0.3);font-size:0.95rem;display:flex;align-items:center;gap:14px;max-width:400px;font-family:inherit';
      banner.innerHTML = `
        <div style="font-size:1.6rem;line-height:1">🔔</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:0.98rem;margin-bottom:2px">${esc(vendor.venture || 'Shop')} is now OPEN!</div>
          <div style="font-size:0.86rem;opacity:0.95">${esc(vendor.venture || 'Shop')} is now available for delivery.</div>
        </div>
        <button type="button" style="background:none;border:none;color:#fff;font-size:1.4rem;cursor:pointer;opacity:0.8;line-height:1" onclick="this.parentElement.remove()">×</button>
      `;
      document.body.appendChild(banner);
      showToast(msgText, 8000);
      setTimeout(() => {
        if (banner && banner.parentElement) banner.remove();
      }, 8000);
    }

    async function toggleNotifyMeWhenOpen(vendorId, btnElement) {
      if (!currentCustomer) {
        showToast('Please log in to receive reopening notifications');
        openCustomerAuthModal();
        return;
      }

      const subs = JSON.parse(localStorage.getItem('hb_reopen_subscriptions') || '{}');
      const vendor = DATA.find(v => v.id === vendorId);
      const ventureName = vendor ? vendor.venture : 'this shop';
      const custName = currentCustomer.name || 'Customer';
      const custEmail = currentCustomer.email || '';
      const custMobile = currentCustomer.mobile || currentCustomer.phone || '';

      if (subs[vendorId]) {
        delete subs[vendorId];
        localStorage.setItem('hb_reopen_subscriptions', JSON.stringify(subs));
        if (btnElement) {
          btnElement.className = 'btn btn-sm btn-outline';
          btnElement.style.cssText = 'border-color:#e65100;color:#e65100;white-space:nowrap;font-weight:700;padding:6px 14px;border-radius:20px;display:inline-flex;align-items:center;gap:6px';
          btnElement.innerHTML = `<i class="fa fa-bell"></i> Notify Me`;
        }
        showToast(`Notification request removed for ${ventureName}`);

        if (FB_READY && db && custEmail) {
          try {
            const reqId = `${vendorId}_${custEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;
            await db.collection('notify_requests').doc(reqId).delete();
          } catch (e) { }
        }
      } else {
        const subData = {
          vendorId: vendorId,
          vendorName: ventureName,
          customerName: custName,
          customerEmail: custEmail,
          customerMobile: custMobile,
          timestamp: Date.now(),
          createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
          notified: false
        };
        subs[vendorId] = subData;
        localStorage.setItem('hb_reopen_subscriptions', JSON.stringify(subs));

        if (btnElement) {
          btnElement.className = 'btn btn-sm btn-success';
          btnElement.style.cssText = 'background:#e8f5e9;color:#2e7d32;border:1px solid #a5d6a7;white-space:nowrap;font-weight:700;padding:6px 14px;border-radius:20px;display:inline-flex;align-items:center;gap:6px';
          btnElement.innerHTML = `<i class="fa fa-check"></i> ✓ We'll notify you`;
        }
        showToast(`We'll notify you as soon as ${ventureName} reopens! 🔔`);

        if (FB_READY && db && custEmail) {
          try {
            const reqId = `${vendorId}_${custEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;
            await db.collection('notify_requests').doc(reqId).set(subData, { merge: true });
          } catch (e) {
            console.warn('Failed to save notify_request to Firestore:', e);
          }
        }

        if ("Notification" in window && Notification.permission === "default") {
          Notification.requestPermission();
        }
      }
    }

    function notifyMeWhenOpen(vendorId) {
      toggleNotifyMeWhenOpen(vendorId, null);
    }

    setInterval(() => {
      checkVendorReopenTransitions();
    }, 10000);

    /* ═══════════ SHOP SCHEDULE & STATUS HELPERS ═══════════ */
    const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    function getDefaultSchedule() {
      return {
        openTime: '10:00',
        closeTime: '21:00',
        openDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        closedDates: []
      };
    }

    function formatTime12h(time24) {
      if (!time24) return '';
      const [hStr, mStr] = time24.split(':');
      let h = parseInt(hStr, 10);
      const m = mStr || '00';
      if (isNaN(h)) return time24;
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
      return `${h}:${m} ${ampm}`;
    }

    function formatDateReadable(dateStr) {
      if (!dateStr) return '';
      const parts = dateStr.split('-');
      if (parts.length !== 3) return dateStr;
      const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    function getWeekDayDates() {
      const now = new Date();
      const currentDayIndex = (now.getDay() + 6) % 7;
      const weekDates = {};
      DAYS_OF_WEEK.forEach((dayName, idx) => {
        const diff = idx - currentDayIndex;
        const d = new Date(now);
        d.setDate(now.getDate() + diff);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        weekDates[dayName] = `${yyyy}-${mm}-${dd}`;
      });
      return weekDates;
    }

    function isVendorClosed(vendor) {
      if (!vendor) return false;
      if (vendor.isClosed === true) return true;

      if (vendor.useSchedule !== false) {
        const schedule = vendor.schedule || getDefaultSchedule();
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        const todayYMD = `${y}-${m}-${d}`;

        // 1. Check specific holiday/closed dates
        if (Array.isArray(schedule.closedDates) && schedule.closedDates.includes(todayYMD)) {
          return true;
        }

        // 2. Check weekly open days
        const dayIndex = (now.getDay() + 6) % 7;
        const dayName = DAYS_OF_WEEK[dayIndex];

        let openDays = schedule.openDays;
        if (!openDays && typeof schedule === 'object') {
          openDays = DAYS_OF_WEEK.filter(day => schedule[day] && !schedule[day].closed);
        }
        if (!openDays || !openDays.length) {
          openDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        }

        if (!openDays.includes(dayName)) {
          return true;
        }

        // 3. Check open/close time
        const openTime = schedule.openTime || (schedule[dayName] ? schedule[dayName].open : '10:00');
        const closeTime = schedule.closeTime || (schedule[dayName] ? schedule[dayName].close : '21:00');

        if (openTime && closeTime) {
          const curMins = now.getHours() * 60 + now.getMinutes();
          const [oH, oM] = openTime.split(':').map(n => parseInt(n, 10) || 0);
          const [cH, cM] = closeTime.split(':').map(n => parseInt(n, 10) || 0);
          const openMins = oH * 60 + oM;
          const closeMins = cH * 60 + cM;

          if (closeMins > openMins) {
            if (curMins < openMins || curMins >= closeMins) return true;
          } else if (closeMins < openMins) {
            if (curMins < openMins && curMins >= closeMins) return true;
          }
        }
      }

      return false;
    }

    function getVendorStatusInfo(vendor) {
      if (!vendor) return { isClosed: false, badgeText: 'OPEN', subtext: 'Your shop is active.', customerText: 'This business is active and open for orders.' };
      if (vendor.isClosed === true) {
        return {
          isClosed: true,
          reason: 'manual',
          badgeText: 'CLOSED (MANUAL)',
          subtext: 'Your shop is manually turned OFF. Customers see a "CLOSED" badge and cannot place orders.',
          customerText: 'This business is currently closed and not accepting new orders at the moment. Please check back later or click "Notify Me".'
        };
      }
      if (vendor.useSchedule !== false) {
        const schedule = vendor.schedule || getDefaultSchedule();
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        const todayYMD = `${y}-${m}-${d}`;

        if (vendor.useCalendarClosures !== false && Array.isArray(schedule.closedDates) && schedule.closedDates.includes(todayYMD)) {
          return {
            isClosed: true,
            reason: 'holiday',
            badgeText: 'CLOSED (HOLIDAY)',
            subtext: `Your shop is closed today (${todayYMD}) for a scheduled holiday/closure.`,
            customerText: `This business is closed today for a scheduled holiday or special event. Please check back tomorrow or click "Notify Me".`
          };
        }

        const dayIndex = (now.getDay() + 6) % 7;
        const dayName = DAYS_OF_WEEK[dayIndex];
        const dayConfig = (schedule.daySchedules && schedule.daySchedules[dayName]) || null;

        let openDays = schedule.openDays;
        if (!openDays && typeof schedule === 'object') {
          openDays = DAYS_OF_WEEK.filter(day => schedule[day] && !schedule[day].closed);
        }

        const isClosedDay = dayConfig ? !!dayConfig.isClosed : (openDays && !openDays.includes(dayName));

        if (isClosedDay) {
          return {
            isClosed: true,
            reason: 'schedule_day',
            badgeText: 'CLOSED (SCHEDULE)',
            subtext: `Your shop is closed today (${dayName}).`,
            customerText: `This business is closed today (${dayName}). Please check operating days or click "Notify Me" to get notified when open.`
          };
        }

        const openTime = (dayConfig && dayConfig.openTime) ? dayConfig.openTime : (schedule.openTime || '10:00');
        const closeTime = (dayConfig && dayConfig.closeTime) ? dayConfig.closeTime : (schedule.closeTime || '21:00');

        if (openTime && closeTime) {
          const curMins = now.getHours() * 60 + now.getMinutes();
          const [oH, oM] = openTime.split(':').map(n => parseInt(n, 10) || 0);
          const [cH, cM] = closeTime.split(':').map(n => parseInt(n, 10) || 0);
          const openMins = oH * 60 + oM;
          const closeMins = cH * 60 + cM;

          let isClosedTime = false;
          if (closeMins > openMins) {
            if (curMins < openMins || curMins >= closeMins) isClosedTime = true;
          } else if (closeMins < openMins) {
            if (curMins < openMins && curMins >= closeMins) isClosedTime = true;
          }

          if (isClosedTime) {
            return {
              isClosed: true,
              reason: 'schedule_time',
              badgeText: 'CLOSED (SCHEDULE)',
              subtext: `Your shop is currently closed. Today's operating hours: ${formatTime12h(openTime)} – ${formatTime12h(closeTime)}.`,
              customerText: `This business is currently closed for the day. Operating hours today: ${formatTime12h(openTime)} – ${formatTime12h(closeTime)}.`
            };
          }
        }
      }

      return {
        isClosed: false,
        reason: 'open',
        badgeText: 'OPEN',
        subtext: 'Your shop is active and accepting customer orders.',
        customerText: 'This business is active and open for customer orders.'
      };
    }

    function toggleDayPill(btn) {
      if (btn.disabled) return;
      btn.classList.toggle('active');
      const isActive = btn.classList.contains('active');
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = isActive ? 'fa fa-check-circle' : 'fa fa-circle-xmark';
      }
    }

    function addHolidayDate() {
      const input = document.getElementById('sf_sched_holiday_date');
      if (!input || !input.value) {
        showToast('Please select a date first');
        return;
      }
      const val = input.value;
      const container = document.getElementById('sf_sched_holiday_list');
      if (!container) return;
      const existing = Array.from(container.querySelectorAll('.holiday-date-badge')).map(b => b.dataset.date);
      if (existing.includes(val)) {
        showToast('Date already added to holiday list');
        return;
      }
      const badge = document.createElement('span');
      badge.className = 'holiday-date-badge';
      badge.dataset.date = val;
      badge.innerHTML = `<i class="fa fa-calendar-day"></i> ${val} <i class="fa fa-times remove-holiday-icon" onclick="removeHolidayDate('${val}')"></i>`;
      container.appendChild(badge);
      input.value = '';
      showToast(`Added ${val} to closed dates`);
    }

    function removeHolidayDate(dateStr) {
      const container = document.getElementById('sf_sched_holiday_list');
      if (!container) return;
      const badges = container.querySelectorAll('.holiday-date-badge');
      badges.forEach(b => {
        if (b.dataset.date === dateStr) {
          b.remove();
        }
      });
      showToast(`Removed ${dateStr}`);
    }

    let _businessDaySchedules = {};
    let _currentModalDay = 'Monday';

    function renderWeeklyDayPills() {
      const container = document.getElementById('sf_sched_weekly_days_container');
      if (!container) return;
      const isDeact = isCurrentBusinessDeactivated();

      container.innerHTML = DAYS_OF_WEEK.map(day => {
        const dayConfig = _businessDaySchedules[day];
        if (dayConfig && dayConfig.isClosed) {
          return `<button type="button" class="btn btn-sm" ${isDeact ? 'disabled' : ''} onclick="openDayScheduleModal('${day}')" style="background:#fee2e2;color:#dc2626;border:1.5px solid #fca5a5;border-radius:12px;padding:8px 14px;font-weight:700;display:inline-flex;align-items:center;gap:6px" title="Click to configure ${day} schedule"><i class="fa fa-circle-xmark" style="color:#dc2626"></i> ${day.slice(0, 3)} (Closed)</button>`;
        } else if (dayConfig && dayConfig.openTime && dayConfig.closeTime) {
          return `<button type="button" class="btn btn-sm" ${isDeact ? 'disabled' : ''} onclick="openDayScheduleModal('${day}')" style="background:#fff3e0;color:#e65100;border:1.5px solid #ffe0b2;border-radius:12px;padding:8px 14px;font-weight:700;display:inline-flex;align-items:center;gap:6px" title="Click to configure ${day} schedule"><i class="fa fa-clock" style="color:#e65100"></i> ${day.slice(0, 3)} (${formatTime12h(dayConfig.openTime)}-${formatTime12h(dayConfig.closeTime)})</button>`;
        } else {
          return `<button type="button" class="btn btn-sm" ${isDeact ? 'disabled' : ''} onclick="openDayScheduleModal('${day}')" style="background:#e6f4ea;color:#137333;border:1.5px solid #a8dab5;border-radius:12px;padding:8px 14px;font-weight:700;display:inline-flex;align-items:center;gap:6px" title="Click to configure ${day} schedule"><i class="fa fa-circle-check" style="color:#137333"></i> ${day.slice(0, 3)} (Standard)</button>`;
        }
      }).join('');
    }

    function toggleBusinessScheduleUse(useSched) {
      const container = document.getElementById('sf_sched_main_hours_container');
      if (container) container.style.display = useSched ? 'block' : 'none';
    }

    function toggleBusinessCalendarUse(useCal) {
      const container = document.getElementById('sf_sched_calendar_container');
      if (container) container.style.display = useCal ? 'block' : 'none';
    }

    function openDayScheduleModal(day) {
      if (isCurrentBusinessDeactivated()) return;
      _currentModalDay = day;
      const titleDay = document.getElementById('dayModalDayName');
      if (titleDay) titleDay.textContent = day;
      document.querySelectorAll('.dayModalDayText').forEach(el => el.textContent = day);

      const openTimeInput = document.getElementById('sf_sched_open_time')?.value || '10:00';
      const closeTimeInput = document.getElementById('sf_sched_close_time')?.value || '21:00';
      const defaultLbl = document.getElementById('dayModalDefaultHoursLabel');
      if (defaultLbl) defaultLbl.textContent = `${formatTime12h(openTimeInput)} – ${formatTime12h(closeTimeInput)}`;

      const dayConfig = _businessDaySchedules[day];
      if (dayConfig && dayConfig.isClosed) {
        const rClosed = document.getElementById('dayModeClosed');
        if (rClosed) rClosed.checked = true;
      } else if (dayConfig && dayConfig.openTime) {
        const rCustom = document.getElementById('dayModeCustomHours');
        if (rCustom) rCustom.checked = true;
        const oEl = document.getElementById('dayModalOpenTime'); if (oEl) oEl.value = dayConfig.openTime;
        const cEl = document.getElementById('dayModalCloseTime'); if (cEl) cEl.value = dayConfig.closeTime;
      } else {
        const rDef = document.getElementById('dayModeDefault');
        if (rDef) rDef.checked = true;
        const oEl = document.getElementById('dayModalOpenTime'); if (oEl) oEl.value = openTimeInput;
        const cEl = document.getElementById('dayModalCloseTime'); if (cEl) cEl.value = closeTimeInput;
      }
      onDayModalModeChange();
      openModal('dayScheduleModal');
    }

    function onDayModalModeChange() {
      const isCustom = document.getElementById('dayModeCustomHours')?.checked;
      const inputs = document.getElementById('dayModalCustomHoursInputs');
      if (inputs) {
        inputs.style.opacity = isCustom ? '1' : '0.4';
        inputs.style.pointerEvents = isCustom ? 'auto' : 'none';
      }
    }

    function saveDayModalSchedule() {
      if (!_currentModalDay) return;
      const mode = document.querySelector('input[name="dayScheduleMode"]:checked')?.value || 'default';
      if (mode === 'closed') {
        _businessDaySchedules[_currentModalDay] = { isClosed: true };
      } else if (mode === 'custom') {
        const oT = document.getElementById('dayModalOpenTime')?.value || '10:00';
        const cT = document.getElementById('dayModalCloseTime')?.value || '21:00';
        _businessDaySchedules[_currentModalDay] = { isClosed: false, openTime: oT, closeTime: cT };
      } else {
        delete _businessDaySchedules[_currentModalDay];
      }
      closeModal('dayScheduleModal');
      renderWeeklyDayPills();
    }

    async function toggleBusinessScheduleUseAsync(useSched) {
      if (!currentBusiness) return;
      const vendor = DATA.find(d => d.id === currentBusiness.vendorId);
      if (!vendor) return;
      vendor.useSchedule = useSched;
      saveData(DATA);
      if (FB_READY && db) {
        try { await fsSaveVendor(vendor); } catch (e) { }
      }
      showToast(useSched ? 'Schedule auto-close enabled ✓' : 'Schedule auto-close disabled');
      renderBusinessPanel();
      renderAll();
    }

    function _businessBusinessHTML(v) {
      const isDeact = isCurrentBusinessDeactivated();
      const statusInfo = getVendorStatusInfo(v);
      const isClosed = statusInfo.isClosed;
      const isManualClosed = v.isClosed === true;
      const statusCard = `
        <div class="shop-status-card">
          <div class="shop-status-left">
            <div class="shop-status-title-row">
              <span class="shop-status-label">Shop Status</span>
              <span class="shop-status-badge ${isClosed ? 'closed' : 'open'}">
                <i class="fa ${isClosed ? 'fa-moon' : 'fa-circle-check'}"></i>
                ${esc(statusInfo.badgeText)}
              </span>
            </div>
            <div class="shop-status-subtext">
              ${esc(statusInfo.subtext)}
            </div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
            <span style="font-size:.72rem;font-weight:700;color:var(--text-muted)">Manual Override</span>
            <label class="shop-toggle-switch">
              <input type="checkbox" id="sf_shopStatusToggle" ${!isManualClosed ? 'checked' : ''} ${isDeact ? 'disabled' : ''} onchange="toggleBusinessShopStatus('${v.id}', this.checked)">
              <span class="shop-toggle-slider"></span>
            </label>
          </div>
        </div>`;

      const schedObj = v.schedule || getDefaultSchedule();
      const openTimeVal = schedObj.openTime || '10:00';
      const closeTimeVal = schedObj.closeTime || '21:00';

      _businessDaySchedules = { ...(schedObj.daySchedules || {}) };

      // Backwards compatibility for legacy openDays array
      if (schedObj.openDays && Array.isArray(schedObj.openDays)) {
        DAYS_OF_WEEK.forEach(day => {
          if (!schedObj.openDays.includes(day) && !_businessDaySchedules[day]) {
            _businessDaySchedules[day] = { isClosed: true };
          }
        });
      }

      const closedDatesArr = schedObj.closedDates || [];

      const saveSchedBtn = isDeact
        ? `<button class="btn btn-primary" disabled style="opacity:0.5;cursor:not-allowed"><i class="fa fa-ban"></i> Account Deactivated</button>`
        : `<button type="button" class="btn btn-primary" onclick="saveBusinessSchedule()"><i class="fa fa-floppy-disk"></i> Save Schedule</button>`;

      const scheduleCard = `
        <div class="s-card" style="margin-bottom:20px">
          <div class="s-card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
            <span><i class="fa fa-clock" style="color:var(--green)"></i> Shop Operating Schedule &amp; Calendar</span>
          </div>

          <!-- Master Checkbox 1: Custom Operating Schedule Toggle -->
          <div style="background:var(--cream,#f8f9fa);border:1.5px solid var(--border,#e5e7eb);border-radius:14px;padding:16px;margin-bottom:16px">
            <label style="display:flex;align-items:center;gap:12px;cursor:pointer;font-weight:700;font-size:0.92rem;color:var(--text)">
              <input type="checkbox" id="sf_useScheduleToggle" ${v.useSchedule !== false ? 'checked' : ''} ${isDeact ? 'disabled' : ''} onchange="toggleBusinessScheduleUse(this.checked)" style="accent-color:var(--green);width:18px;height:18px">
              <span>Do you want a custom shop schedule date and time?</span>
            </label>
            <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;padding-left:30px">
              Enable daily opening and closing hours and weekly schedule for your shop.
            </div>
          </div>

          <!-- Schedule Content Container (hidden if Master Checkbox 1 is unchecked) -->
          <div id="sf_sched_main_hours_container" style="display:${v.useSchedule !== false ? 'block' : 'none'};margin-bottom:16px">
            
            <!-- Daily Opening & Closing Hours (Whole Week Default) -->
            <div style="background:var(--cream,#f8f9fa);border:1px solid var(--border,#e5e7eb);border-radius:14px;padding:16px;margin-bottom:14px">
              <div style="font-weight:700;font-size:0.88rem;margin-bottom:12px;color:var(--text);display:flex;align-items:center;gap:6px">
                <i class="fa fa-business-time" style="color:var(--green)"></i> Default Daily Opening &amp; Closing Hours (Whole Week)
              </div>
              <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:end;gap:10px">
                <div style="display:flex;flex-direction:column;gap:4px">
                  <label style="font-size:0.78rem;font-weight:700;color:var(--text-muted)">Opening Time</label>
                  <input type="time" id="sf_sched_open_time" class="time-picker-input" value="${openTimeVal}" ${isDeact ? 'disabled' : ''} onchange="renderWeeklyDayPills()">
                </div>
                <div style="padding-bottom:10px;color:var(--green);font-size:1rem;font-weight:700;display:flex;align-items:center;justify-content:center">
                  <i class="fa fa-arrow-right"></i>
                </div>
                <div style="display:flex;flex-direction:column;gap:4px">
                  <label style="font-size:0.78rem;font-weight:700;color:var(--text-muted)">Closing Time</label>
                  <input type="time" id="sf_sched_close_time" class="time-picker-input" value="${closeTimeVal}" ${isDeact ? 'disabled' : ''} onchange="renderWeeklyDayPills()">
                </div>
              </div>
            </div>

            <!-- Operating Days of the Week (Week Option) -->
            <div style="background:var(--cream,#f8f9fa);border:1px solid var(--border,#e5e7eb);border-radius:14px;padding:16px">
              <div style="font-weight:700;font-size:0.88rem;margin-bottom:6px;color:var(--text);display:flex;align-items:center;gap:6px">
                <i class="fa fa-calendar-days" style="color:var(--green)"></i> Operating Days of the Week
              </div>
              <p style="font-size:0.78rem;color:var(--text-muted);margin:0 0 12px">
                Click on any day (e.g. Tuesday) to set specific hours or mark that day as closed. Closed days show in red.
              </p>
              <div id="sf_sched_weekly_days_container" style="display:flex;gap:8px;flex-wrap:wrap">
                <!-- Rendered dynamically by renderWeeklyDayPills() -->
              </div>
            </div>

          </div>

          <!-- Master Checkbox 2: Calendar Closures Toggle -->
          <div style="background:var(--cream,#f8f9fa);border:1.5px solid var(--border,#e5e7eb);border-radius:14px;padding:16px;margin-bottom:16px">
            <label style="display:flex;align-items:center;gap:12px;cursor:pointer;font-weight:700;font-size:0.92rem;color:var(--text)">
              <input type="checkbox" id="sf_useCalendarToggle" ${v.useCalendarClosures !== false ? 'checked' : ''} ${isDeact ? 'disabled' : ''} onchange="toggleBusinessCalendarUse(this.checked)" style="accent-color:var(--green);width:18px;height:18px">
              <span>Do you want to schedule shop closures for specific dates or calendar holidays?</span>
            </label>
            <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;padding-left:30px">
              Set specific upcoming dates (like festive holidays or personal days off) when your shop will automatically remain closed.
            </div>
          </div>

          <!-- Calendar Holiday Dates Container (hidden if Master Checkbox 2 is unchecked) -->
          <div id="sf_sched_calendar_container" style="display:${v.useCalendarClosures !== false ? 'block' : 'none'};background:var(--cream,#f8f9fa);border:1px solid var(--border,#e5e7eb);border-radius:14px;padding:16px;margin-bottom:16px">
            <div style="font-weight:700;font-size:0.88rem;margin-bottom:10px;color:var(--text);display:flex;align-items:center;gap:6px">
              <i class="fa fa-calendar-xmark" style="color:#e65100"></i> Calendar Closed Dates / Holidays
            </div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap">
              <div style="flex:1;min-width:180px">
                <input type="date" id="sf_sched_holiday_date" class="time-picker-input" ${isDeact ? 'disabled' : ''} onchange="addHolidayDate()">
              </div>
              <button type="button" class="btn" ${isDeact ? 'disabled' : ''} onclick="addHolidayDate()" style="background:var(--green,#ff9933);color:#ffffff;border:none;border-radius:12px;padding:10px 18px;font-weight:700;box-shadow:0 2px 8px rgba(255,153,51,0.25);display:inline-flex;align-items:center;gap:6px;min-height:44px;white-space:nowrap">
                <i class="fa fa-plus"></i> Add Closed Date
              </button>
            </div>
            <div id="sf_sched_holiday_list" style="display:flex;gap:8px;flex-wrap:wrap">
              ${closedDatesArr.map(dateStr => `
                <span class="holiday-date-badge" data-date="${dateStr}">
                  <i class="fa fa-calendar-day"></i> ${dateStr}
                  ${isDeact ? '' : `<i class="fa fa-times remove-holiday-icon" onclick="removeHolidayDate('${dateStr}')"></i>`}
                </span>
              `).join('')}
            </div>
          </div>

          <div class="modal-actions" style="margin-top:18px">
            ${saveSchedBtn}
          </div>
        </div>`;

      const saveBtn = isDeact
        ? `<button class="btn btn-primary" disabled style="opacity:0.5;cursor:not-allowed" onclick="alert('Your account is deactivated. Please contact admin.');showToast('Your account is deactivated. Please contact admin.');"><i class="fa fa-ban"></i> Account Deactivated</button>`
        : `<button class="btn btn-primary" onclick="saveBusinessBusiness()"><i class="fa fa-save"></i> Save Details & Schedule</button>`;
      return statusCard + scheduleCard + `<div class="s-card">
    <div class="s-card-title"><i class="fa fa-store" style="color:var(--green)"></i> Business Details</div>
    <div class="form-grid">
      <div class="form-group"><label>Business Name *</label><input id="sf_venture" value="${v.venture || ''}" ${isDeact ? 'disabled' : ''}></div>
      <div class="form-group"><label>Speciality *</label><input id="sf_speciality" value="${v.speciality || ''}" ${isDeact ? 'disabled' : ''}></div>
      <div class="form-group full"><label>Description *</label><textarea id="sf_desc" ${isDeact ? 'disabled' : ''}>${v.desc || ''}</textarea></div>
      <div class="form-group"><label>Contact Person</label><input id="sf_contact" value="${v.contact || ''}" ${isDeact ? 'disabled' : ''}></div>
      <div class="form-group"><label>Flat No.</label><input id="sf_flat" value="${v.flat || ''}" ${isDeact ? 'disabled' : ''}></div>
      <div class="form-group"><label><i class="fab fa-whatsapp" style="color:#25d366"></i> Mobile / WhatsApp Number</label><input id="sf_phone" value="${v.phone || v.whatsapp || ''}" ${isDeact ? 'disabled' : ''}></div>
      <div class="form-group"><label>Instagram</label><input id="sf_instagram" value="${v.instagram || ''}" ${isDeact ? 'disabled' : ''}></div>
      <div class="form-group"><label>Video URL</label><input id="sf_video" value="${v.video || ''}" ${isDeact ? 'disabled' : ''}></div>
      <div class="form-group"><label>Website URL</label><input id="sf_url" value="${v.url || ''}" ${isDeact ? 'disabled' : ''}></div>
      <div class="form-group full img-upload-zone" ${isDeact ? '' : `onclick="document.getElementById('sf_imgFile').click()"`} style="cursor:${isDeact ? 'default' : 'pointer'}">
        <div class="img-preview" id="sf_imgPreview">
          ${v.image ? `<img src="${v.image}" style="width:100%;height:100%;object-fit:cover">` : `<i class="fa fa-image img-ph"></i>`}
        </div>
        <div class="img-upload-info">
          <p><strong>Business Photo</strong> — Click to change<br>Max 4 MB · JPG / PNG</p>
          <div class="img-upload-btns">
            <button class="btn btn-sm btn-ghost" type="button" ${isDeact ? 'disabled' : `onclick="event.stopPropagation();document.getElementById('sf_imgFile').click()"`}><i class="fa fa-upload"></i> Upload</button>
            <button class="btn btn-sm btn-danger" type="button" id="sf_removeBtn" onclick="event.stopPropagation();sfRemoveImg()" ${v.image && !isDeact ? '' : 'style="display:none"'}><i class="fa fa-trash"></i></button>
          </div>
        </div>
        <input type="file" id="sf_imgFile" accept="image/*" style="display:none" onchange="sfHandleImg(this)">
      </div>
    </div>
    <div class="modal-actions">
      ${saveBtn}
    </div>
  </div>`;
    }

    function _businessMenuHTML(v) {
      const isDeact = isCurrentBusinessDeactivated();
      const mode = getBusinessAddMode(v.cat);
      if (mode === 'details') return _businessDetailsHTML(v);
      const label = mode === 'item' ? 'Items' : 'Menu Items';
      const icon = mode === 'item' ? 'fa-bag-shopping' : 'fa-utensils';
      const menu = v.menu || [];
      const rows = menu.map(it => `<tr>
    <td>${it.name}</td>
    <td>₹${it.price}</td>
    <td style="color:var(--text-muted);font-size:.78rem">${it.desc || '—'}</td>
    <td><span style="color:${it.available !== false ? '#28a745' : '#c0392b'};font-weight:700">${it.available !== false ? 'Yes' : 'No'}</span></td>
    <td style="white-space:nowrap">
      <button class="btn btn-sm btn-ghost" ${isDeact ? 'disabled style="opacity:0.5"' : `onclick="openMenuItemModal('${v.id}','${it.id}')"`}><i class="fa fa-pen"></i></button>
      <button class="btn btn-sm btn-danger" ${isDeact ? 'disabled style="opacity:0.5"' : `onclick="deleteMenuItem('${v.id}','${it.id}')"`}><i class="fa fa-trash"></i></button>
    </td>
  </tr>`).join('');
      const addBtn = isDeact
        ? `<button class="btn btn-sm btn-primary" style="margin-left:auto;opacity:0.5;cursor:not-allowed" disabled onclick="alert('Your account is deactivated. Please contact admin.');showToast('Your account is deactivated. Please contact admin.');"><i class="fa fa-ban"></i> Account Deactivated</button>`
        : `<button class="btn btn-sm btn-primary" style="margin-left:auto" onclick="openMenuItemModal('${v.id}',null)"><i class="fa fa-plus"></i> Add Item</button>`;
      return `<div class="s-card">
    <div class="s-card-title"><i class="fa ${icon}" style="color:var(--green)"></i> ${label}
      ${addBtn}
    </div>
    ${menu.length ? `<table class="menu-table">
      <thead><tr><th>Name</th><th>Price</th><th>Description</th><th>Available</th><th>Actions</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`: `<div class="empty-state" style="padding:24px"><i class="fa ${icon}"></i><p>No ${label.toLowerCase()} yet. Add your first one above.</p></div>`}
  </div>`;
    }

    function _businessDetailsHTML(v) {
      return `<div class="s-card">
    <div class="s-card-title"><i class="fa fa-align-left" style="color:var(--green)"></i> Business / Service Details</div>
    <div class="form-grid">
      <div class="form-group full"><label>Details</label><textarea id="sf_detailsText" placeholder="Describe your courses, activities or services — schedules, fees, batch timings, etc.">${esc(v.detailsText || '')}</textarea></div>
      <div class="form-group full img-upload-zone" onclick="document.getElementById('sf_detailsImgFile').click()" style="cursor:pointer">
        <div class="img-preview" id="sf_detailsImgPreview">
          ${v.detailsImage ? `<img src="${v.detailsImage}" style="width:100%;height:100%;object-fit:cover">` : `<i class="fa fa-image img-ph"></i>`}
        </div>
        <div class="img-upload-info">
          <p><strong>Details Photo</strong> — Click to change<br>Brochure, price list, certificate, etc. (optional)</p>
          <div class="img-upload-btns">
            <button class="btn btn-sm btn-ghost" type="button" onclick="event.stopPropagation();document.getElementById('sf_detailsImgFile').click()"><i class="fa fa-upload"></i> Upload</button>
          </div>
        </div>
      </div>
      <input type="file" id="sf_detailsImgFile" accept="image/*" style="display:none" onchange="sfHandleDetailsImg(this)">
    </div>
    <div class="modal-actions" style="justify-content:flex-end;margin-top:14px">
      <button class="btn btn-primary" onclick="sfSaveDetails('${v.id}')"><i class="fa fa-floppy-disk"></i> Save Details</button>
    </div>
  </div>`;
    }
    let _sfDetailsImg = null;
    function sfHandleDetailsImg(input) {
      const file = input.files[0]; if (!file) return;
      if (file.size > 4 * 1024 * 1024) { showToast('Image must be under 4 MB'); return; }
      const reader = new FileReader();
      reader.onload = e => {
        _sfDetailsImg = e.target.result;
        document.getElementById('sf_detailsImgPreview').innerHTML = `<img src="${_sfDetailsImg}" style="width:100%;height:100%;object-fit:cover">`;
      };
      reader.readAsDataURL(file);
      input.value = '';
    }
    async function sfSaveDetails(vendorId) {
      const vendor = DATA.find(d => d.id === vendorId);
      if (!vendor) return;
      vendor.detailsText = document.getElementById('sf_detailsText').value.trim();
      if (_sfDetailsImg) vendor.detailsImage = _sfDetailsImg;
      await fsSaveVendor(vendor);
      saveData(DATA);
      _sfDetailsImg = null;
      showToast('Details saved ✓');
    }

    let _sfPendingImg = null;
    function sfHandleImg(input) {
      const file = input.files[0]; if (!file) return;
      openImageCropper(file, function (croppedDataUrl) {
        _sfPendingImg = croppedDataUrl;
        const box = document.getElementById('sf_imgPreview');
        if (box) box.innerHTML = `<img src="${_sfPendingImg}" style="width:100%;height:100%;object-fit:cover">`;
        const rb = document.getElementById('sf_removeBtn');
        if (rb) rb.style.display = '';
      }, input);
    }
    function sfRemoveImg() {
      _sfPendingImg = '__remove__';
      const box = document.getElementById('sf_imgPreview');
      if (box) box.innerHTML = `<i class="fa fa-image img-ph"></i>`;
      const rb = document.getElementById('sf_removeBtn');
      if (rb) rb.style.display = 'none';
    }
    function _businessChangePasswordHTML() {
      return `<div class="s-card" style="margin-top:18px">
    <div class="s-card-title"><i class="fa fa-lock" style="color:var(--green)"></i> Change Password</div>
    <p style="font-size:.83rem;color:var(--text-muted);margin-bottom:16px">Enter your current password to verify, then set a new one.</p>
    <div class="form-grid">
      <div class="form-group full">
        <label>Current Password</label>
        <div class="token-wrap">
          <input type="password" id="cp_current" placeholder="Your current password" autocomplete="current-password">
          <button class="token-toggle" type="button" onclick="togglePwVis('cp_current',this)">Show</button>
        </div>
      </div>
      <div class="form-group">
        <label>New Password</label>
        <div class="token-wrap">
          <input type="password" id="cp_new" placeholder="At least 6 characters" autocomplete="new-password">
          <button class="token-toggle" type="button" onclick="togglePwVis('cp_new',this)">Show</button>
        </div>
      </div>
      <div class="form-group">
        <label>Confirm New Password</label>
        <div class="token-wrap">
          <input type="password" id="cp_confirm" placeholder="Repeat new password" autocomplete="new-password">
          <button class="token-toggle" type="button" onclick="togglePwVis('cp_confirm',this)">Show</button>
        </div>
      </div>
    </div>
    <div id="cp_status" style="display:none;margin-bottom:10px;font-size:.84rem;padding:10px 14px;border-radius:8px"></div>
    <div class="modal-actions">
      <button class="btn btn-primary" onclick="changeBusinessPassword()"><i class="fa fa-key"></i> Update Password</button>
    </div>
  </div>`;
    }

    function togglePwVis(inputId, btn) {
      const el = document.getElementById(inputId);
      if (!el) return;
      if (el.type === 'password') { el.type = 'text'; btn.textContent = 'Hide'; }
      else { el.type = 'password'; btn.textContent = 'Show'; }
    }

    async function changeBusinessPassword() {
      const curEl = document.getElementById('cp_current');
      const newEl = document.getElementById('cp_new');
      const confEl = document.getElementById('cp_confirm');
      const statusEl = document.getElementById('cp_status');
      const setStatus = (msg, ok) => {
        statusEl.textContent = msg;
        statusEl.style.display = 'block';
        statusEl.style.background = ok ? 'var(--green-pale)' : '#fdecea';
        statusEl.style.color = ok ? 'var(--green-dark)' : '#c0392b';
      };
      const curPw = (curEl.value || '').trim();
      const newPw = (newEl.value || '').trim();
      const confPw = (confEl.value || '').trim();
      if (!curPw) { setStatus('Please enter your current password.', false); curEl.focus(); return; }
      if (newPw.length < 6) { setStatus('New password must be at least 6 characters.', false); newEl.focus(); return; }
      if (newPw !== confPw) { setStatus('New passwords do not match.', false); confEl.focus(); return; }
      if (!auth || !auth.currentUser) { setStatus('Not logged in. Please refresh and try again.', false); return; }
      try {
        // Re-authenticate to satisfy Firebase's recent-login requirement
        const credential = firebase.auth.EmailAuthProvider.credential(currentBusiness.email, curPw);
        await auth.currentUser.reauthenticateWithCredential(credential);
        // Now update the password
        await auth.currentUser.updatePassword(newPw);
        setStatus('Password updated successfully!', true);
        curEl.value = ''; newEl.value = ''; confEl.value = '';
      } catch (e) {
        if (e.code === 'auth/wrong-password' || e.code === 'auth/invalid-credential') {
          setStatus('Current password is incorrect.', false);
        } else if (e.code === 'auth/weak-password') {
          setStatus('New password is too weak. Use at least 6 characters.', false);
        } else {
          setStatus('Error: ' + e.message, false);
        }
      }
    }

    async function saveBusinessSchedule() {
      if (!currentBusiness) return;
      if (isCurrentBusinessDeactivated()) {
        alert('Your account is deactivated. Please contact admin.');
        showToast('Your account is deactivated. Please contact admin.');
        return;
      }
      const vendor = DATA.find(d => d.id === currentBusiness.vendorId);
      if (!vendor) return;

      const openTime = document.getElementById('sf_sched_open_time')?.value || '10:00';
      const closeTime = document.getElementById('sf_sched_close_time')?.value || '21:00';

      const openDays = DAYS_OF_WEEK.filter(day => !(_businessDaySchedules[day] && _businessDaySchedules[day].isClosed));

      const holidayBadges = document.querySelectorAll('.holiday-date-badge');
      const closedDates = Array.from(holidayBadges).map(b => b.dataset.date);

      const useSchedule = document.getElementById('sf_useScheduleToggle')?.checked !== false;
      const useCalendarClosures = document.getElementById('sf_useCalendarToggle')?.checked !== false;

      const schedule = {
        openTime: openTime,
        closeTime: closeTime,
        openDays: openDays,
        daySchedules: _businessDaySchedules,
        useCalendarClosures: useCalendarClosures,
        closedDates: closedDates
      };

      const updated = {
        ...vendor,
        schedule: schedule,
        useSchedule: useSchedule,
        useCalendarClosures: useCalendarClosures
      };

      const i = DATA.findIndex(d => d.id === updated.id);
      if (i !== -1) DATA[i] = updated; else DATA.push(updated);
      saveData(DATA);

      if (FB_READY && db) {
        try {
          await fsSaveVendor(updated);
        } catch (e) {
          console.warn('Failed to sync schedule to Firestore:', e);
        }
      }

      showToast('Shop Schedule saved successfully ✓');
      renderBusinessPanel();
      renderAll();
    }

    async function saveBusinessBusiness() {
      if (!currentBusiness) return;
      if (isCurrentBusinessDeactivated()) {
        alert('Your account is deactivated. Please contact admin.');
        showToast('Your account is deactivated. Please contact admin.');
        return;
      }
      const vendor = DATA.find(d => d.id === currentBusiness.vendorId);
      if (!vendor) return;

      const ventureVal = (document.getElementById('sf_venture')?.value || '').trim();
      const specialityVal = (document.getElementById('sf_speciality')?.value || '').trim();
      const descVal = (document.getElementById('sf_desc')?.value || '').trim();
      if (!ventureVal) { showToast('Venture / Business Name is required.'); return; }
      if (!specialityVal) { showToast('Speciality / Tagline is required.'); return; }
      if (!descVal) { showToast('Business Description is required.'); return; }

      const openTime = document.getElementById('sf_sched_open_time')?.value || '10:00';
      const closeTime = document.getElementById('sf_sched_close_time')?.value || '21:00';

      const openDays = DAYS_OF_WEEK.filter(day => !(_businessDaySchedules[day] && _businessDaySchedules[day].isClosed));

      const holidayBadges = document.querySelectorAll('.holiday-date-badge');
      const closedDates = Array.from(holidayBadges).map(b => b.dataset.date);

      const useSchedule = document.getElementById('sf_useScheduleToggle')?.checked !== false;
      const useCalendarClosures = document.getElementById('sf_useCalendarToggle')?.checked !== false;

      const schedule = {
        openTime: openTime,
        closeTime: closeTime,
        openDays: openDays,
        daySchedules: _businessDaySchedules,
        useCalendarClosures: useCalendarClosures,
        closedDates: closedDates
      };

      const updated = {
        ...vendor,
        venture: document.getElementById('sf_venture')?.value.trim() || vendor.venture || '',
        speciality: document.getElementById('sf_speciality')?.value.trim() || vendor.speciality || '',
        desc: document.getElementById('sf_desc')?.value.trim() || vendor.desc || '',
        contact: document.getElementById('sf_contact')?.value.trim() || vendor.contact || '',
        flat: document.getElementById('sf_flat')?.value.trim() || vendor.flat || '',
        phone: document.getElementById('sf_phone')?.value.trim() || vendor.phone || '',
        whatsapp: document.getElementById('sf_phone')?.value.trim() || vendor.whatsapp || '',
        instagram: document.getElementById('sf_instagram')?.value.trim() || vendor.instagram || '',
        video: document.getElementById('sf_video')?.value.trim() || vendor.video || '',
        url: document.getElementById('sf_url')?.value.trim() || vendor.url || '',
        image: _sfPendingImg === '__remove__' ? '' : (_sfPendingImg || vendor.image || ''),
        schedule: schedule,
        useSchedule: useSchedule,
        useCalendarClosures: useCalendarClosures
      };

      const i = DATA.findIndex(d => d.id === updated.id);
      if (i !== -1) DATA[i] = updated; else DATA.push(updated);
      saveData(DATA);

      if (FB_READY && db) {
        try {
          await fsSaveVendor(updated);
        } catch (e) {
          console.warn('Failed to sync business details to Firestore:', e);
        }
      }

      _sfPendingImg = null;
      showToast('Business details & schedule saved ✓');
      renderBusinessPanel();
      renderAll();
    }

    /* ── Menu item modal (business + admin) ── */
    let _editMenuVendorId = null, _editMenuItemId = null;
    function openMenuItemModal(vendorId, itemId) {
      _editMenuVendorId = vendorId; _editMenuItemId = itemId;
      const vendor = DATA.find(d => d.id === vendorId);
      const item = itemId ? (vendor?.menu || []).find(m => m.id === itemId) : null;
      document.getElementById('miModalTitle').textContent = item ? 'Edit Menu Item' : 'Add Menu Item';
      document.getElementById('mi_name').value = item?.name || '';
      document.getElementById('mi_price').value = item?.price || '';
      document.getElementById('mi_desc').value = item?.desc || '';
      document.getElementById('mi_avail').checked = item?.available !== false;
      document.getElementById('menuItemModal').classList.add('open');
      setTimeout(() => document.getElementById('mi_name').focus(), 100);
    }
    async function saveMenuItem() {
      const name = document.getElementById('mi_name').value.trim();
      const price = parseFloat(document.getElementById('mi_price').value);
      if (!name || isNaN(price)) { showToast('Name and price are required'); return; }
      const vendor = DATA.find(d => d.id === _editMenuVendorId);
      if (!vendor) return;
      vendor.menu = vendor.menu || [];
      const item = {
        id: _editMenuItemId || 'm' + Date.now(),
        name, price,
        desc: document.getElementById('mi_desc').value.trim(),
        available: document.getElementById('mi_avail').checked
      };
      if (_editMenuItemId) {
        const idx = vendor.menu.findIndex(m => m.id === _editMenuItemId);
        if (idx !== -1) vendor.menu[idx] = item;
      } else {
        vendor.menu.push(item);
      }
      await fsSaveVendor(vendor);
      saveData(DATA);
      closeModal('menuItemModal');
      showToast(_editMenuItemId ? 'Item updated ✓' : 'Item added ✓');
      if (currentBusiness && currentBusiness.vendorId === _editMenuVendorId) renderBusinessPanel();
      if (isAdmin) renderAdminTab(_adminTab);
    }
    async function deleteMenuItem(vendorId, itemId) {
      if (!confirm('Delete this menu item?')) return;
      const vendor = DATA.find(d => d.id === vendorId);
      if (!vendor || !vendor.menu) return;
      vendor.menu = vendor.menu.filter(m => m.id !== itemId);
      await fsSaveVendor(vendor);
      saveData(DATA);
      showToast('Item deleted');
      if (currentBusiness) renderBusinessPanel();
      if (isAdmin) renderAdminTab(_adminTab);
    }

    /* ── Admin panel renders (Phase 5) ── */
    function renderAdminPanel() { renderAdminTab(_adminTab); }

    async function renderAdminOverview(c) {
      const getLocalOrders = () => DATA.reduce((s, v) => s + (v._orderClicks || 0), 0);
      let totalOrders = getLocalOrders();

      c.innerHTML = `<div class="stat-cards-row">
    <div class="stat-card"><div class="sc-num">${DATA.length}</div><div class="sc-lbl">Total Vendors</div></div>
    <div class="stat-card"><div class="sc-num">${DATA.filter(v => v.menu && v.menu.length).length}</div><div class="sc-lbl">With Menus</div></div>
    <div class="stat-card"><div class="sc-num" id="adminOverviewOrderClicks">${totalOrders}</div><div class="sc-lbl">Order Clicks</div></div>
  </div>
  <div class="s-card">
    <div class="s-card-title"><i class="fa fa-bolt" style="color:var(--gold)"></i> Quick Actions</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="switchAdminTab('vendors');openAddModal()"><i class="fa fa-plus"></i> Add Vendor</button>
      <button class="btn btn-gold" onclick="generatePDF()"><i class="fa fa-file-pdf"></i> Download PDF</button>
      ${FB_READY ? `<button class="btn btn-ghost" onclick="migrateFromSeed()"><i class="fa fa-database"></i> Migrate SEED → Firestore</button>` : ''}
    </div>
  </div>`;

      if (FB_READY && db) {
        try {
          const [statsSnap, orderLogsSnap] = await Promise.all([
            db.collection('stats').get().catch(() => null),
            db.collection('order_logs').get().catch(() => null)
          ]);
          let fsOrderClicks = 0;
          if (statsSnap && !statsSnap.empty) {
            statsSnap.docs.forEach(doc => {
              const d = doc.data();
              fsOrderClicks += (d.orderClicks || 0);
            });
          }
          let fsLogCount = 0;
          if (orderLogsSnap && !orderLogsSnap.empty) {
            fsLogCount = orderLogsSnap.size;
          }
          const finalTotal = Math.max(getLocalOrders(), fsOrderClicks, fsLogCount);
          const el = document.getElementById('adminOverviewOrderClicks');
          if (el) el.textContent = finalTotal;
        } catch (e) {
          console.warn('Failed to load Firestore overview stats:', e);
        }
      }
    }

    function renderAdminVendors(c, searchVal) {
      const q = (searchVal || document.getElementById('adminVendorSearch')?.value || '').toLowerCase().trim();
      const list = q ? DATA.filter(v => (v.venture || '').toLowerCase().includes(q) || (v.speciality || '').toLowerCase().includes(q) || (v.cat || '').toLowerCase().includes(q) || (v.contact || '').toLowerCase().includes(q)) : DATA;
      c.innerHTML = `<div class="s-card">
    <div class="s-card-title"><i class="fa fa-store" style="color:var(--green)"></i> All Vendors (${DATA.length})
      <button class="btn btn-sm btn-primary" style="margin-left:auto" onclick="openAddModal()"><i class="fa fa-plus"></i> Add</button>
    </div>
    <div style="margin-bottom:10px">
      <input id="adminVendorSearch" type="text" placeholder="Search vendors…" value="${q}" oninput="filterAdminVendors(this.value)" style="width:100%;padding:8px 12px;border:1px solid var(--border);border-radius:8px;font-size:.85rem;background:var(--bg-card);color:var(--text)">
    </div>
    <div style="max-height:60vh;overflow-y:auto">
    <table class="menu-table" style="font-size:.82rem">
      <thead><tr><th>#</th><th>Business</th><th>Category</th><th>Contact</th><th>Menu</th><th>Actions</th></tr></thead>
      <tbody>${list.length ? list.map((v, i) => `<tr>
        <td style="color:var(--text-muted)">${i + 1}</td>
        <td><strong>${v.venture}</strong><br><span style="font-size:.72rem;color:var(--gold)">${v.speciality || ''}</span></td>
        <td style="font-size:.76rem">${(v.cat || '').split(',')[0]}</td>
        <td style="font-size:.76rem">${v.contact || ''}<br>${v.flat || ''}</td>
        <td style="text-align:center">${(v.menu || []).length}</td>
        <td style="white-space:nowrap">
          <button class="btn btn-sm btn-ghost" onclick="openEditModal('${v.id}')"><i class="fa fa-pen"></i></button>
          <button class="btn btn-sm btn-ghost" onclick="openMenuItemModal('${v.id}',null)"><i class="fa fa-utensils"></i></button>
          <button class="btn btn-sm btn-danger" onclick="deleteTile('${v.id}')"><i class="fa fa-trash"></i></button>
        </td>
      </tr>`).join('') : `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:20px">No vendors match "${q}"</td></tr>`}</tbody>
    </table>
    </div>
  </div>`;
    }

    function filterAdminVendors(q) {
      q = (q || '').toLowerCase().trim();
      const list = q ? DATA.filter(v => (v.venture || '').toLowerCase().includes(q) || (v.speciality || '').toLowerCase().includes(q) || (v.cat || '').toLowerCase().includes(q) || (v.contact || '').toLowerCase().includes(q)) : DATA;
      const tbody = document.querySelector('#adminTabContent .menu-table tbody');
      if (!tbody) return;
      tbody.innerHTML = list.length ? list.map((v, i) => `<tr>
    <td style="color:var(--text-muted)">${i + 1}</td>
    <td><strong>${v.venture}</strong><br><span style="font-size:.72rem;color:var(--gold)">${v.speciality || ''}</span></td>
    <td style="font-size:.76rem">${(v.cat || '').split(',')[0]}</td>
    <td style="font-size:.76rem">${v.contact || ''}<br>${v.flat || ''}</td>
    <td style="text-align:center">${(v.menu || []).length}</td>
    <td style="white-space:nowrap">
      <button class="btn btn-sm btn-ghost" onclick="openEditModal('${v.id}')"><i class="fa fa-pen"></i></button>
      <button class="btn btn-sm btn-ghost" onclick="openMenuItemModal('${v.id}',null)"><i class="fa fa-utensils"></i></button>
      <button class="btn btn-sm btn-danger" onclick="deleteTile('${v.id}')"><i class="fa fa-trash"></i></button>
    </td>
  </tr>`).join('') : `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:20px">No vendors match "${q}"</td></tr>`;
    }

    async function renderAdminAccounts(c) {
      if (!FB_READY) {
        c.innerHTML = `<div class="s-card"><p style="color:var(--text-muted)">Firebase not configured. Business accounts require Firebase Auth.</p></div>`;
        return;
      }
      // Reload vendors from Firestore so newly-created vendors show correctly
      try {
        const fresh = await fsLoadVendors();
        if (fresh && fresh.length) { DATA = fresh; saveData(DATA); }
      } catch (e) { }
      // Load accounts from Firestore — requires Firebase login
      let accounts = [], accountsErr = '';
      if (!auth || !auth.currentUser) {
        accountsErr = 'Not signed into Firebase — enter your Firebase Email + Password in the Admin login form and log in again.';
      } else {
        try {
          const snap = await db.collection('accounts').get();
          accounts = snap.docs.map(d => ({ uid: d.id, ...d.data() }));
        } catch (e) {
          accountsErr = e.code === 'permission-denied'
            ? 'Firebase permission denied — go to Firebase Console → Firestore → Rules and publish the updated rules from FIREBASE_SETUP.md'
            : e.message;
        }
      }
      c.innerHTML = `<div class="s-card">
    <div class="s-card-title"><i class="fa fa-user-plus" style="color:var(--green)"></i> Create Business Account</div>
    <div class="form-grid">
      <div class="form-group"><label>Full Name</label><input id="na_name" placeholder="Business's name"></div>
      <div class="form-group"><label>Email</label><input type="email" id="na_email" placeholder="business@email.com"></div>
      <div class="form-group"><label>Password</label><input type="password" id="na_pw" placeholder="Temporary password"></div>
      <div class="form-group"><label>Assign Vendor</label>
        <select id="na_vendor">
          <option value="">— none —</option>
          ${DATA.map(v => `<option value="${v.id}">${v.venture}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="modal-actions" style="margin-top:14px">
      <button class="btn btn-primary" onclick="createBusinessAccount()"><i class="fa fa-user-plus"></i> Create Account</button>
    </div>
  </div>
  <div class="s-card">
    <div class="s-card-title"><i class="fa fa-users" style="color:var(--green)"></i> Business Accounts (${accounts.length})</div>
    ${accountsErr ? `<div style="color:var(--danger);font-size:.82rem;padding:8px 0"><i class="fa fa-exclamation-triangle"></i> ${accountsErr}</div>` : ''}
    ${accounts.length ? `<table class="menu-table">
      <thead><tr><th>Name</th><th>Email</th><th>Vendor</th><th>Subscription</th><th>Actions</th></tr></thead>
      <tbody>${accounts.map(a => {
        const v = DATA.find(d => d.id === a.vendorId);
        const subStatus = a.subscriptionStatus || (v && v.subscriptionStatus) || 'none';
        const subExpiry = a.subscriptionExpiry || (v && v.subscriptionExpiry) || null;
        const isSubExpired = subStatus === 'active' && subExpiry && new Date(subExpiry) < new Date();
        const displayStatus = isSubExpired ? 'expired' : subStatus;
        let subBadge = '<span style="color:var(--text-muted);font-size:.75rem">None</span>';
        if (displayStatus === 'active') subBadge = `<span style="background:#e6f4ea;color:#137333;font-size:.72rem;padding:2px 6px;border-radius:8px;font-weight:700">ACTIVE (${a.subscriptionPlan || (v && v.subscriptionPlan) || 'sub'})</span>`;
        else if (displayStatus === 'expired') subBadge = '<span style="background:#fee2e2;color:#dc2626;font-size:.72rem;padding:2px 6px;border-radius:8px;font-weight:700">EXPIRED</span>';

        return `<tr>
          <td><strong>${a.displayName || '—'}</strong></td>
          <td style="font-size:.78rem">${a.email}</td>
          <td style="font-size:.78rem">${v ? v.venture : '(unassigned)'}</td>
          <td>${subBadge}${subExpiry ? `<br><span style="font-size:.68rem;color:var(--text-muted)">Exp: ${new Date(subExpiry).toLocaleDateString()}</span>` : ''}</td>
          <td>
            <div style="display:flex;gap:4px">
              <button class="btn btn-sm btn-outline" onclick="adminGrantSubscription('${a.uid}', '${a.vendorId}', 30)" title="Grant 30-day subscription"><i class="fa fa-crown" style="color:var(--gold)"></i> +30d</button>
              <button class="btn btn-sm btn-outline" onclick="adminGrantSubscription('${a.uid}', '${a.vendorId}', 365)" title="Grant 1-year subscription"><i class="fa fa-crown" style="color:var(--gold)"></i> +1y</button>
              <button class="btn btn-sm btn-outline" onclick="adminCancelSubscription('${a.uid}', '${a.vendorId}')" title="Cancel Subscription" style="color:var(--danger)"><i class="fa fa-ban"></i> Cancel</button>
              <button class="btn btn-sm btn-danger" onclick="deleteBusinessAccount('${a.uid}','${a.email}')"><i class="fa fa-trash"></i></button>
            </div>
          </td>
        </tr>`;
      }).join('')}</tbody>
    </table>`: `<div class="empty-state" style="padding:20px"><i class="fa fa-users"></i><p>No business accounts yet.</p></div>`}
  </div>`;
    }

    async function createBusinessAccount() {
      const name = document.getElementById('na_name').value.trim();
      const email = document.getElementById('na_email').value.trim();
      const pw = document.getElementById('na_pw').value;
      const vendorId = document.getElementById('na_vendor').value;
      if (!name || !email || !pw) { showToast('Fill in name, email and password'); return; }
      if (!secondaryAuth || !secondaryDb) { showToast('Firebase not configured'); return; }
      try {
        showToast('Creating account…');
        // Create Firebase Auth user via secondary app (doesn't affect admin session)
        const cred = await secondaryAuth.createUserWithEmailAndPassword(email, pw);
        // Write account doc using secondaryDb — request.auth.uid matches cred.user.uid,
        // satisfying the isOwner(uid) rule in Firestore security rules.
        await secondaryDb.collection('accounts').doc(cred.user.uid).set({
          email, displayName: name, vendorId: vendorId || null, role: 'business',
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        await secondaryAuth.signOut();
        // Clear form
        ['na_name', 'na_email', 'na_pw'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
        document.getElementById('na_vendor').value = '';
        showToast(`Account created for ${name} ✓`);
        // Inject new row into existing table instead of re-querying Firestore
        // (re-querying right after secondaryAuth.signOut can briefly lose primary auth)
        const tbody = document.querySelector('#adminTabContent .menu-table tbody');
        if (tbody) {
          const v = DATA.find(d => d.id === vendorId);
          const tr = document.createElement('tr');
          tr.innerHTML = `<td><strong>${name}</strong></td><td style="font-size:.78rem">${email}</td><td style="font-size:.78rem">${v ? v.venture : '(unassigned)'}</td><td><button class="btn btn-sm btn-danger" onclick="deleteBusinessAccount('${cred.user.uid}','${email}')"><i class="fa fa-trash"></i> Remove</button></td>`;
          tbody.appendChild(tr);
        } else {
          // No table yet (was empty) — re-render after a safe delay
          setTimeout(() => renderAdminAccounts(document.getElementById('adminTabContent')), 3000);
        }
      } catch (e) {
        if (e.code === 'auth/email-already-in-use') {
          showToast('Email already exists in Firebase Auth — go to Firebase Console → Authentication → Users, delete that user, then try again');
        } else {
          showToast(`Error: ${e.message}`);
        }
      }
    }

    let _confirmModalResolve = null;

    function confirmAction(options = {}) {
      const modal = document.getElementById('confirmActionModal');
      const titleEl = document.getElementById('confirmModalTitle');
      const msgEl = document.getElementById('confirmModalMessage');
      const warnEl = document.getElementById('confirmModalWarning');
      const cancelBtn = document.getElementById('confirmModalCancelBtn');
      const confirmBtn = document.getElementById('confirmModalConfirmBtn');
      const iconEl = document.getElementById('confirmModalIcon');
      const glowEl = document.getElementById('confirmModalGlow');
      const inputGrp = document.getElementById('confirmModalInputGroup');
      const inputEl = document.getElementById('confirmModalInput');
      const inputLbl = document.getElementById('confirmModalInputLabel');

      if (!modal) return Promise.resolve(false);

      titleEl.textContent = options.title || 'Are you sure?';
      msgEl.textContent = options.message || '';

      if (options.warning) {
        warnEl.style.display = 'flex';
        warnEl.innerHTML = `<i class="fa fa-triangle-exclamation" style="font-size:1.05rem;color:${options.danger === true ? '#c0392b' : '#ff9933'}"></i> <span>${esc(options.warning)}</span>`;
      } else {
        warnEl.style.display = 'none';
      }

      const inputErrEl = document.getElementById('confirmModalInputError');
      if (inputErrEl) inputErrEl.style.display = 'none';

      if (inputGrp && inputEl) {
        inputEl.style.borderColor = '#e1e8f0';
        if (options.showInput) {
          inputGrp.style.display = 'block';
          inputEl.value = options.inputValue || '';
          inputEl.placeholder = options.inputPlaceholder || 'Reason (optional)…';
          if (inputLbl) inputLbl.textContent = options.inputLabel || 'Reason for rejection (optional):';
        } else {
          inputGrp.style.display = 'none';
          inputEl.value = '';
        }
      }

      cancelBtn.textContent = options.cancelText || 'Cancel';
      confirmBtn.textContent = options.confirmText || 'Confirm';

      if (options.danger === true) {
        confirmBtn.style.background = 'linear-gradient(135deg, #c0392b 0%, #962d22 100%)';
        confirmBtn.style.boxShadow = '0 4px 16px rgba(192, 57, 43, 0.35)';
        iconEl.style.background = '#ffebee';
        iconEl.style.color = '#c0392b';
        iconEl.style.boxShadow = '0 0 0 8px rgba(255, 235, 238, 0.7)';
        iconEl.style.borderColor = '#ffcdd2';
        iconEl.innerHTML = '<i class="fa fa-triangle-exclamation"></i>';
        if (glowEl) glowEl.style.background = 'radial-gradient(circle, rgba(192, 57, 43, 0.22) 0%, rgba(192, 57, 43, 0) 70%)';
      } else {
        confirmBtn.style.background = 'linear-gradient(135deg, #ff9933 0%, #b85c1a 100%)';
        confirmBtn.style.boxShadow = '0 4px 16px rgba(255, 153, 51, 0.35)';
        iconEl.style.background = '#fff3e0';
        iconEl.style.color = '#e65100';
        iconEl.style.boxShadow = '0 0 0 8px rgba(255, 243, 224, 0.7)';
        iconEl.style.borderColor = '#ffe0b2';
        iconEl.innerHTML = '<i class="fa fa-circle-question"></i>';
        if (glowEl) glowEl.style.background = 'radial-gradient(circle, rgba(255, 153, 51, 0.22) 0%, rgba(255, 153, 51, 0) 70%)';
      }

      modal.classList.add('open');

      return new Promise(resolve => {
        _confirmModalResolve = resolve;

        cancelBtn.onclick = () => {
          modal.classList.remove('open');
          if (_confirmModalResolve) {
            _confirmModalResolve(false);
            _confirmModalResolve = null;
          }
        };

        confirmBtn.onclick = () => {
          if (options.showInput && options.inputRequired) {
            const val = inputEl ? inputEl.value.trim() : '';
            if (!val) {
              if (inputEl) {
                inputEl.style.borderColor = '#c62828';
                inputEl.focus();
              }
              if (inputErrEl) inputErrEl.style.display = 'flex';
              showToast('Deletion reason is compulsory. Please enter a reason.');
              return;
            }
          }
          modal.classList.remove('open');
          if (_confirmModalResolve) {
            const val = (options.showInput && inputEl) ? { confirmed: true, value: inputEl.value.trim() } : true;
            _confirmModalResolve(val);
            _confirmModalResolve = null;
          }
        };
      });
    }

    async function deleteBusinessAccount(uid, email) {
      const businessAcc = typeof _adminAccountsCache !== 'undefined' ? _adminAccountsCache.find(a => a.uid === uid) : null;
      const businessVendor = DATA.find(d => d.ownerUid === uid || d.id === businessAcc?.vendorId || d.contactEmail === email);
      const businessName = businessAcc?.displayName || businessVendor?.venture || businessVendor?.contact || email;

      const res = await confirmAction({
        title: 'Delete Business Account & Remove Listing?',
        message: `Are you sure you want to permanently delete the business record for "${businessName}" (${email})?`,
        warning: 'This action will permanently remove all database records for this business from the application.',
        confirmText: 'Yes, Delete Business',
        cancelText: 'Cancel',
        danger: true,
        showInput: true,
        inputRequired: true,
        inputLabel: 'Reason for Deletion * (Compulsory):',
        inputPlaceholder: 'Enter compulsory reason why this business account is being removed…'
      });

      if (!res || typeof res !== 'object' || !res.confirmed) return;
      const deletionReason = (res.value || '').trim();

      if (!deletionReason) {
        showToast('Deletion reason is compulsory.');
        return;
      }

      try {
        showToast('Deleting business account & database records…');

        const adminEmail = auth.currentUser ? auth.currentUser.email : 'Admin';
        const adminUid = auth.currentUser ? auth.currentUser.uid : 'admin';
        const adminMobile = localStorage.getItem('hb_admin_verified_mobile')
          || (auth.currentUser ? auth.currentUser.phoneNumber : '')
          || (_adminNumbers && _adminNumbers()[0])
          || 'Not provided';

        const logEntry = {
          type: 'business_account_deletion',
          targetName: businessName,
          targetEmail: email,
          targetUid: uid,
          vendorId: businessVendor ? businessVendor.id : null,
          ventureName: businessVendor ? businessVendor.venture : null,
          reason: deletionReason,
          deletedByAdminEmail: adminEmail,
          deletedByAdminUid: adminUid,
          deletedByAdminMobile: adminMobile,
          performedBy: adminEmail,
          adminMobile: adminMobile,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          createdAt: new Date().toISOString()
        };

        if (db) {
          try {
            await db.collection('deletion_history').add(logEntry);
            await db.collection('admin_deletion_logs').add(logEntry);
          } catch (e) {
            console.warn('Failed to record deletion history in Firestore:', e);
          }
        }

        const localLogs = JSON.parse(localStorage.getItem('hb_admin_deletion_logs') || '[]');
        localLogs.unshift(logEntry);
        localStorage.setItem('hb_admin_deletion_logs', JSON.stringify(localLogs));

        let vendorId = businessAcc ? businessAcc.vendorId : null;
        try {
          const accDoc = await db.collection('accounts').doc(uid).get();
          if (accDoc.exists) vendorId = accDoc.data().vendorId;
        } catch(e){}

        try {
          await db.collection('accounts').doc(uid).delete();
        } catch(e){}

        const vendorsToDelete = DATA.filter(d => d.ownerUid === uid || (vendorId && d.id === vendorId) || (d.contactEmail === email));
        for (const v of vendorsToDelete) {
          try {
            await db.collection('vendors').doc(v.id).delete();
          } catch(e){}
          const idx = DATA.findIndex(d => d.id === v.id);
          if (idx !== -1) DATA.splice(idx, 1);
        }
        saveData(DATA);

        try {
          const reqSnap = await db.collection('business_requests').where('email', '==', email).get();
          reqSnap.forEach(doc => doc.ref.delete());
        } catch(e){}
        try {
          const kycSnap = await db.collection('kyc_requests').where('email', '==', email).get();
          kycSnap.forEach(doc => doc.ref.delete());
        } catch(e){}

        if (typeof _srqAll !== 'undefined' && Array.isArray(_srqAll)) {
          _srqAll = _srqAll.filter(r => (r.email || '').toLowerCase() !== (email || '').toLowerCase());
        }

        if (secondaryAuth) {
          try {
            if (secondaryAuth.currentUser && secondaryAuth.currentUser.email === email) {
              await secondaryAuth.currentUser.delete();
            }
          } catch(e){}
        }

        showToast(`Business account for ${email} deleted & logged in history ✓`);
        const c = document.getElementById('adminTabContent');
        if (c) renderAdminAccounts(c);
        renderAll();
      } catch (e) { showToast(`Error removing account: ${e.message}`); }
    }

    async function renderAdminDeletionHistory(c) {
      c.innerHTML = `<div class="s-card"><div class="s-card-title"><i class="fa fa-history" style="color:var(--green)"></i> Admin Deletion History & Audit Logs</div><div style="text-align:center;padding:30px;color:var(--text-muted)"><i class="fa fa-spinner fa-spin" style="font-size:1.5rem"></i><p>Loading audit logs…</p></div></div>`;
      let logs = [];
      if (FB_READY && db) {
        try {
          const snap = await db.collection('admin_deletion_logs').get();
          logs = snap.docs.map(d => d.data());
          logs.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
        } catch (e) {
          console.warn('Could not load deletion logs from Firestore:', e);
        }
      }
      const localLogs = JSON.parse(localStorage.getItem('hb_admin_deletion_logs') || '[]');
      localLogs.forEach(l => {
        if (!logs.find(existing => existing.createdAt === l.createdAt && existing.targetEmail === l.targetEmail)) {
          logs.push(l);
        }
      });

      c.innerHTML = `
        <div class="s-card">
          <div class="s-card-title"><i class="fa fa-history" style="color:var(--green)"></i> Admin Deletion History & Audit Logs (${logs.length})</div>
          <p style="font-size:0.83rem;color:var(--text-muted);margin-bottom:14px">
            Audit log records of all business removals, including admin email, admin mobile number, reason for deletion, and timestamp.
          </p>
          ${logs.length ? `
            <div style="overflow-x:auto">
              <table class="menu-table" style="width:100%">
                <thead>
                  <tr>
                    <th>Removed Target</th>
                    <th>Deletion Reason</th>
                    <th>Removed By (Admin Email)</th>
                    <th>Admin Mobile Number</th>
                    <th>Date &amp; Time</th>
                  </tr>
                </thead>
                <tbody>
                  ${logs.map(l => `
                    <tr>
                      <td>
                        <strong>${esc(l.targetName || l.targetEmail)}</strong><br>
                        <span style="font-size:0.75rem;color:var(--text-muted)">${esc(l.targetEmail)}</span>
                      </td>
                      <td style="font-weight:600;color:#c62828">${esc(l.reason || 'No reason specified')}</td>
                      <td style="font-size:0.82rem;font-weight:600">${esc(l.deletedByAdminEmail || l.performedBy || 'Admin')}</td>
                      <td style="font-size:0.82rem;color:var(--green-dark);font-weight:700">${esc(l.deletedByAdminMobile || l.adminMobile || '—')}</td>
                      <td style="font-size:0.78rem;color:var(--text-muted)">${esc(l.createdAt ? new Date(l.createdAt).toLocaleString() : 'Recently')}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>` : `<div class="empty-state" style="padding:20px"><i class="fa fa-clipboard-list"></i><p>No deletion history logged yet.</p></div>`}
        </div>`;
    }

    function renderAdminConfig(c) {
      const esc = s => (s || '').replace(/"/g, '&quot;');
      c.innerHTML = `<div class="s-card">
    <div class="s-card-title"><i class="fa fa-sliders" style="color:var(--green)"></i> Site Configuration</div>
    <div class="form-grid">
      <div class="form-group full"><label>Tagline Bar Text</label>
        <input id="cfg_tagline" value="${esc(SITE_CONFIG.tagline) || 'Connect • Collaborate • Create • Grow'}"></div>
      <div class="form-group full"><label>Hero Subtitle</label>
        <input id="cfg_heroSub" value="${esc(SITE_CONFIG.heroSub) || 'For the residents, by the residents. Discover and support neighbourhood businesses in Prateek Laurel Society.'}"></div>
      <div class="form-group full">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="cfg_showProductListing" ${SITE_CONFIG.showProductListing ? 'checked' : ''} style="accent-color:var(--green);width:auto">
          Show Product Listing on Home Page
        </label>
        <p style="font-size:.76rem;color:var(--text-muted);text-transform:none;letter-spacing:0;font-weight:400;margin-top:4px">Off by default. When on, the "Products &amp; Services" row (samosa, tea, cookies, etc.) appears on the customer Home tab below Categories.</p>
      </div>
      <div class="form-group full" style="background:var(--cream);border-radius:10px;padding:14px;border:1.5px solid var(--border);grid-column:1/-1">
        <div style="font-weight:600;margin-bottom:10px;color:var(--text)"><i class="fa fa-layer-group" style="color:var(--green)"></i> Business Registration Form — Sub-Category Selection Limit</div>
        <div class="form-group" style="margin:0">
          <label>Max Sub-Categories Allowed</label>
          <input type="number" id="cfg_maxSubCategories" min="1" max="10" value="${SITE_CONFIG.maxSubCategories || 3}" placeholder="3">
          <p style="font-size:.76rem;color:var(--text-muted);text-transform:none;letter-spacing:0;font-weight:400;margin-top:4px">Maximum number of sub-categories a business can select during registration (default: 3).</p>
        </div>
      </div>
      <div class="form-group full" style="background:var(--cream);border-radius:10px;padding:14px;border:1.5px solid var(--border);grid-column:1/-1">
        <div style="font-weight:600;margin-bottom:10px;color:var(--text)"><i class="fa fa-user-plus" style="color:var(--green)"></i> Business Registration Form — Society Delivery Field</div>
        <div class="form-group" style="margin-bottom:10px">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
            <input type="checkbox" id="cfg_showBusinessCanDeliver" ${SITE_CONFIG.showBusinessCanDeliver !== false ? 'checked' : ''} style="accent-color:var(--green);width:auto">
            Show Society Delivery Field in Business Registration Modal
          </label>
          <p style="font-size:.76rem;color:var(--text-muted);text-transform:none;letter-spacing:0;font-weight:400;margin-top:4px">If checked, the delivery dropdown field will be shown to businesses during registration. If unchecked, it will be hidden.</p>
        </div>
        <div class="form-group" style="margin:0">
          <label>Society Delivery Field Label Text</label>
          <input id="cfg_businessCanDeliverLabel" value="${esc(SITE_CONFIG.businessCanDeliverLabel || 'Will you be able to deliver within the society? *')}" placeholder="Will you be able to deliver within the society? *">
        </div>
      </div>
      <div class="form-group"><label><i class="fab fa-facebook" style="color:#1877f2"></i> Facebook URL</label>
        <input id="cfg_fbUrl" placeholder="https://facebook.com/yourpage" value="${esc(SITE_CONFIG.fbUrl)}"></div>
      <div class="form-group"><label><i class="fab fa-instagram" style="color:#e1306c"></i> Instagram URL</label>
        <input id="cfg_igUrl" placeholder="https://instagram.com/yourhandle" value="${esc(SITE_CONFIG.igUrl)}"></div>
      <div class="form-group"><label><i class="fab fa-youtube" style="color:#ff0000"></i> YouTube URL</label>
        <input id="cfg_ytUrl" placeholder="https://youtube.com/@yourchannel" value="${esc(SITE_CONFIG.ytUrl)}"></div>
      <div class="form-group"><label><i class="fab fa-whatsapp" style="color:#25d366"></i> WhatsApp Number</label>
        <input id="cfg_waNum" placeholder="919999999999 (with country code, no +)" value="${esc(SITE_CONFIG.waNum)}"></div>
      <div class="form-group full"><label>Mission</label>
        <textarea id="cfg_mission" rows="4" placeholder="Enter your Mission statement here…" style="font-size:.83rem">${(SITE_CONFIG.mission || '').replace(/</g, '&lt;')}</textarea></div>
      <div class="form-group full"><label>Vision</label>
        <textarea id="cfg_vision" rows="4" placeholder="Enter your Vision statement here…" style="font-size:.83rem">${(SITE_CONFIG.vision || '').replace(/</g, '&lt;')}</textarea></div>
      <div class="form-group full"><label>Who Can Join TynTron</label>
        <textarea id="cfg_whoCanJoin" rows="5" placeholder="Describe who is eligible to join TynTron…" style="font-size:.83rem">${(SITE_CONFIG.whoCanJoin || '').replace(/</g, '&lt;')}</textarea></div>
      <div class="form-group full"><label>Terms of Use</label>
        <textarea id="cfg_terms" rows="5" placeholder="Enter your Terms of Use text here…" style="font-size:.83rem">${(SITE_CONFIG.terms || '').replace(/</g, '&lt;')}</textarea></div>
      <div class="form-group full"><label>Return Policy</label>
        <textarea id="cfg_returnPolicy" rows="5" placeholder="Enter your Return Policy text here…" style="font-size:.83rem">${(SITE_CONFIG.returnPolicy || '').replace(/</g, '&lt;')}</textarea></div>
      <div class="form-group full"><label>Delivery Policy</label>
        <textarea id="cfg_deliveryPolicy" rows="5" placeholder="Enter your Delivery Policy text here…" style="font-size:.83rem">${(SITE_CONFIG.deliveryPolicy || '').replace(/</g, '&lt;')}</textarea></div>
      <div class="form-group full"><label>Privacy Policy</label>
        <textarea id="cfg_privacy" rows="5" placeholder="Enter your Privacy Policy text here…" style="font-size:.83rem">${(SITE_CONFIG.privacy || '').replace(/</g, '&lt;')}</textarea></div>
      <div class="form-group full"><label>About Us</label>
        <textarea id="cfg_aboutUs" rows="6" placeholder="Enter your About Us content here…" style="font-size:.83rem">${(SITE_CONFIG.aboutUs || '').replace(/</g, '&lt;')}</textarea></div>
      <div class="form-group full" style="background:var(--cream);border-radius:10px;padding:14px;border:1.5px solid var(--border);grid-column:1/-1">
        <div style="font-weight:600;margin-bottom:10px;color:var(--text)"><i class="fa fa-envelope" style="color:var(--green)"></i> Contact Form — EmailJS Setup</div>
        <p style="font-size:.78rem;color:var(--text-muted);margin-bottom:12px">Create a free account at <strong>emailjs.com</strong>, add an Email Service and a Template (include template variables: from_name, from_email, mobile, subject, message). Paste the keys below. Without these, Contact Us falls back to opening the user's mail app.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
          <div class="form-group" style="margin:0"><label style="font-size:.75rem">Public Key</label>
            <input id="cfg_ejsPublicKey" placeholder="user_xxxxxxxxxxxx" value="${esc(SITE_CONFIG.ejsPublicKey)}"></div>
          <div class="form-group" style="margin:0"><label style="font-size:.75rem">Service ID</label>
            <input id="cfg_ejsServiceId" placeholder="service_xxxxxxx" value="${esc(SITE_CONFIG.ejsServiceId)}"></div>
          <div class="form-group" style="margin:0"><label style="font-size:.75rem">Template ID</label>
            <input id="cfg_ejsTemplateId" placeholder="template_xxxxxxx" value="${esc(SITE_CONFIG.ejsTemplateId)}"></div>
        </div>
        <p style="font-size:.78rem;color:var(--text-muted);margin:14px 0 8px">Optional: a separate template for customer OTP emails (include variable: <code>message</code> or <code>otp_code</code>). Leave blank to reuse the Template ID above.</p>
        <div class="form-group" style="margin:0 0 14px;max-width:260px"><label style="font-size:.75rem">OTP Template ID</label>
          <input id="cfg_ejsOtpTemplateId" placeholder="template_xxxxxxx" value="${esc(SITE_CONFIG.ejsOtpTemplateId)}"></div>
        <p style="font-size:.78rem;color:var(--text-muted);margin-bottom:8px">Business approval/rejection emails reuse the Template ID above by default. <strong>Important:</strong> that template's "To Email" setting on EmailJS.com must be the dynamic <code>{{to_email}}</code> placeholder, not a fixed address — if it's hardcoded to your contact address (common default), business emails will silently misdeliver to you instead of the business. Only fill in the field below if you have a spare template on a paid EmailJS plan and want business emails to use a separate one instead.</p>
        <div class="form-group" style="margin:0;max-width:260px"><label style="font-size:.75rem">Business Status Template ID (optional override)</label>
          <input id="cfg_ejsBusinessTemplateId" placeholder="Leave blank to reuse Template ID above" value="${esc(SITE_CONFIG.ejsBusinessTemplateId)}"></div>
      </div>
      <div class="form-group full" style="background:var(--cream);border-radius:10px;padding:14px;border:1.5px solid var(--border);grid-column:1/-1">
        <div style="font-weight:600;margin-bottom:10px;color:var(--text)"><i class="fa fa-mobile-screen" style="color:var(--green)"></i> Mobile OTP — VerifyNow (Message Central) Setup</div>
        <p style="font-size:.78rem;color:var(--text-muted);margin-bottom:12px">Create a free account at <strong>messagecentral.com</strong> (VerifyNow product). Paste your Customer ID, account email and password below. Used to verify businesses' mobile numbers during registration.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
          <div class="form-group" style="margin:0"><label style="font-size:.75rem">Customer ID</label>
            <input id="cfg_vnCustomerId" placeholder="C-xxxxxxxxxxxx" value="${esc(SITE_CONFIG.vnCustomerId)}"></div>
          <div class="form-group" style="margin:0"><label style="font-size:.75rem">Account Email</label>
            <input id="cfg_vnEmail" placeholder="you@email.com" value="${esc(SITE_CONFIG.vnEmail)}"></div>
          <div class="form-group" style="margin:0"><label style="font-size:.75rem">Account Password</label>
            <input type="password" id="cfg_vnPassword" placeholder="••••••••" value="${esc(SITE_CONFIG.vnPassword)}"></div>
        </div>
      </div>
      <div class="form-group full" style="background:var(--cream);border-radius:10px;padding:14px;border:1.5px solid var(--border);grid-column:1/-1">
        <div style="font-weight:600;margin-bottom:10px;color:var(--text)"><i class="fa fa-credit-card" style="color:var(--green)"></i> Razorpay Payment Gateway &amp; Business Subscription Config</div>
        <p style="font-size:.78rem;color:var(--text-muted);margin-bottom:12px">Enter your Razorpay Key ID and Secret to enable business subscription payments via Razorpay Checkout (UPI, Cards, NetBanking, Wallets).</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
          <div class="form-group" style="margin:0"><label style="font-size:.75rem">Razorpay Key ID *</label>
            <input id="cfg_rzpKeyId" placeholder="rzp_test_..." value="${esc(SITE_CONFIG.rzpKeyId || '')}"></div>
          <div class="form-group" style="margin:0"><label style="font-size:.75rem">Razorpay Key / Webhook Secret</label>
            <input type="password" id="cfg_rzpKeySecret" placeholder="Secret Key" value="${esc(SITE_CONFIG.rzpKeySecret || '')}"></div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div class="form-group" style="margin:0"><label style="font-size:.75rem">Monthly Subscription Price (₹)</label>
            <input type="number" id="cfg_subMonthlyPrice" placeholder="499" value="${SITE_CONFIG.subMonthlyPrice || 499}"></div>
          <div class="form-group" style="margin:0"><label style="font-size:.75rem">Annual Subscription Price (₹)</label>
            <input type="number" id="cfg_subAnnualPrice" placeholder="3999" value="${SITE_CONFIG.subAnnualPrice || 3999}"></div>
        </div>
      </div>
      <div class="form-group full" style="background:var(--cream);border-radius:10px;padding:14px;border:1.5px solid var(--border);grid-column:1/-1">
        <div style="font-weight:600;margin-bottom:10px;color:var(--text)"><i class="fa fa-location-dot" style="color:var(--green)"></i> Location Bar — Google Maps Geocoding API</div>
        <p style="font-size:.78rem;color:var(--text-muted);margin-bottom:12px">Enable the "Geocoding API" in Google Cloud Console for this Firebase project, create an API key, and paste it below. Used to show visitors' precise address at the top of the app and to filter the society dropdown to societies within 5km.</p>
        <div class="form-group" style="margin:0;max-width:340px"><label style="font-size:.75rem">Google Maps API Key</label>
          <input id="cfg_gmapsApiKey" placeholder="AIzaSy..." value="${esc(SITE_CONFIG.gmapsApiKey)}"></div>
      </div>
    </div>
    <div class="modal-actions" style="margin-top:14px">
      <button class="btn btn-primary" onclick="saveAdminConfig()"><i class="fa fa-save"></i> Save Config</button>
    </div>
  </div>

  <!-- Societies management card -->
  <div class="s-card" style="margin-top:18px">
    <div class="s-card-title"><i class="fa fa-building" style="color:var(--green)"></i> Societies</div>
    <p style="font-size:.82rem;color:var(--text-muted);margin-bottom:14px">Each business is linked to a society. The website auto-detects the visitor's society via GPS. Add coordinates so detection works precisely.</p>
    <table class="menu-table" style="margin-bottom:16px">
      <thead><tr><th>Society Name</th><th>Address</th><th>Latitude</th><th>Longitude</th><th></th></tr></thead>
      <tbody>
        ${(_societyList()).map(s => `<tr>
          <td style="font-weight:700">${s.name}</td>
          <td style="font-size:.8rem;color:var(--text-muted)">${s.address || '—'}</td>
          <td style="font-size:.8rem">${s.lat || '—'}</td>
          <td style="font-size:.8rem">${s.lng || '—'}</td>
          <td><button class="btn btn-sm btn-danger" onclick="adminRemoveSociety('${s.name.replace(/'/g, "\\'")}')"><i class="fa fa-trash"></i></button></td>
        </tr>`).join('')}
      </tbody>
    </table>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <input id="new_soc_name" placeholder="Society Name *" style="padding:8px 12px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.84rem">
      <input id="new_soc_addr" placeholder="Address (e.g. Sector 120, Noida)" style="padding:8px 12px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.84rem">
      <input id="new_soc_lat" type="number" step="0.0001" placeholder="Latitude (e.g. 28.5900)" style="padding:8px 12px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.84rem">
      <input id="new_soc_lng" type="number" step="0.0001" placeholder="Longitude (e.g. 77.3610)" style="padding:8px 12px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.84rem">
    </div>
    <button class="btn btn-primary btn-sm" onclick="adminAddSociety()"><i class="fa fa-plus"></i> Add Society</button>
  </div>

  <!-- Admin access management card -->
  <div class="s-card" style="margin-top:18px">
    <div class="s-card-title"><i class="fa fa-user-shield" style="color:var(--green)"></i> Admin Access — Authorized Mobile Numbers</div>
    <p style="font-size:.82rem;color:var(--text-muted);margin-bottom:14px">There's no separate admin login screen — anyone who verifies one of these mobile numbers via OTP on the regular customer <strong>Login / Sign Up</strong> button will be asked for the Firebase email + password below (the same one you use) to finish activating admin mode, instead of continuing as a customer.</p>
    <table class="menu-table" style="margin-bottom:16px">
      <thead><tr><th>Mobile Number</th><th></th></tr></thead>
      <tbody>
        ${_adminNumbers().map(n => `<tr>
          <td style="font-weight:700">${esc(n)}</td>
          <td><button class="btn btn-sm btn-danger" onclick="adminRemoveNumber('${n.replace(/'/g, "\\'")}')"><i class="fa fa-trash"></i></button></td>
        </tr>`).join('')}
      </tbody>
    </table>
    <div style="display:flex;gap:8px">
      <input id="new_admin_number" placeholder="10-digit mobile number" maxlength="15" style="flex:1;padding:8px 12px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.84rem">
      <button class="btn btn-primary btn-sm" onclick="adminAddNumber()"><i class="fa fa-plus"></i> Add Number</button>
    </div>
  </div>

  <!-- Onboarding Carousel Management card -->
  <div class="s-card" style="margin-top:18px">
    <div class="s-card-title"><i class="fa fa-layer-group" style="color:var(--green)"></i> Onboarding Carousel Slides</div>
    <p style="font-size:.82rem;color:var(--text-muted);margin-bottom:14px">Manage the walkthrough screen that appears after location detection on app open. The top indicator bars dynamically adjust to the number of slides you create here.</p>

    <div id="adminOnboardingSlidesList">
      ${_getOnboardingSlides().map((slide, idx) => `
        <div class="onboarding-admin-row" style="background:var(--cream);border:1.5px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <span style="font-weight:700;font-size:.85rem;color:var(--green-dark)"><i class="fa fa-sliders" style="color:var(--green)"></i> Slide #${idx + 1} (Indicator Bar ${idx + 1})</span>
            <div style="display:flex;gap:6px">
              <button class="btn btn-sm btn-outline" onclick="adminMoveOnboardingSlide(${idx}, -1)" ${idx === 0 ? 'disabled' : ''} title="Move Up"><i class="fa fa-arrow-up"></i></button>
              <button class="btn btn-sm btn-outline" onclick="adminMoveOnboardingSlide(${idx}, 1)" ${idx === _getOnboardingSlides().length - 1 ? 'disabled' : ''} title="Move Down"><i class="fa fa-arrow-down"></i></button>
              <button class="btn btn-sm btn-danger" onclick="adminRemoveOnboardingSlide(${idx})"><i class="fa fa-trash"></i> Delete</button>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr;gap:12px">
            <div class="form-group">
              <label>Slide Title</label>
              <input class="cfg-onboarding-title" data-idx="${idx}" placeholder="Enter slide title..." value="${esc(slide.title)}" style="background:var(--white)">
            </div>
            <div class="form-group">
              <label>Description / Subtitle</label>
              <textarea class="cfg-onboarding-desc" data-idx="${idx}" rows="2" placeholder="Enter slide description..." style="background:var(--white);font-size:.86rem;min-height:54px">${esc(slide.desc)}</textarea>
            </div>
            <div class="form-group">
              <label>Custom Image URL <span style="font-weight:400;text-transform:none;color:var(--text-muted)">(Optional, leave empty for built-in SVG vector)</span></label>
              <input class="cfg-onboarding-image" data-idx="${idx}" placeholder="https://..." value="${esc(slide.image || '')}" style="background:var(--white)">
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;flex-wrap:wrap;gap:10px">
      <button class="btn btn-primary btn-sm" onclick="adminAddOnboardingSlide()"><i class="fa fa-plus"></i> Add New Slide</button>
      <button class="btn btn-primary" onclick="saveAdminOnboardingSlides()"><i class="fa fa-save"></i> Save Slides</button>
    </div>
  </div>`;
    }
    function adminAddNumber() {
      const number = (document.getElementById('new_admin_number').value || '').trim();
      if (!/^\d{10}$/.test(number)) { showToast('Enter a valid 10-digit mobile number'); return; }
      const list = _adminNumbers().slice();
      if (list.includes(number)) { showToast('Number already authorized'); return; }
      list.push(number);
      fsSaveConfig({ adminMobileNumbers: list }).then(() => {
        renderAdminConfig(document.getElementById('adminTabContent'));
        showToast('Admin number added ✓');
      });
    }
    function adminRemoveNumber(number) {
      if (!confirm(`Remove admin access for ${number}?`)) return;
      const list = _adminNumbers().filter(n => n !== number);
      fsSaveConfig({ adminMobileNumbers: list }).then(() => {
        renderAdminConfig(document.getElementById('adminTabContent'));
        showToast('Admin number removed ✓');
      });
    }
    function adminAddSociety() {
      const name = (document.getElementById('new_soc_name').value || '').trim();
      if (!name) { showToast('Society name is required'); return; }
      const list = _societyList().slice();
      if (list.find(s => s.name === name)) { showToast('Society already exists'); return; }
      list.push({
        name,
        address: (document.getElementById('new_soc_addr').value || '').trim(),
        lat: +document.getElementById('new_soc_lat').value || 0,
        lng: +document.getElementById('new_soc_lng').value || 0,
      });
      SITE_CONFIG.societies = list;
      fsSaveConfig({ societies: list }).then(() => {
        buildSocietySelector();
        renderAdminConfig(document.getElementById('adminTabContent'));
        showToast('Society added ✓');
      });
    }
    function adminRemoveSociety(name) {
      if (!confirm(`Remove "${name}"?\nBusinesses linked to this society will be hidden until reassigned.`)) return;
      SITE_CONFIG.societies = (_societyList()).filter(s => s.name !== name);
      fsSaveConfig({ societies: SITE_CONFIG.societies }).then(() => {
        if (selectedSociety === name) { selectedSociety = null; }
        buildSocietySelector(); renderAll();
        renderAdminConfig(document.getElementById('adminTabContent'));
        showToast('Society removed ✓');
      });
    }

    function getOnboardingSlidesFromDOM() {
      const slideRows = document.querySelectorAll('#adminOnboardingSlidesList .onboarding-admin-row');
      if (!slideRows.length) return _getOnboardingSlides().slice();
      const onboardingSlides = [];
      slideRows.forEach(row => {
        const title = row.querySelector('.cfg-onboarding-title')?.value.trim() || '';
        const desc = row.querySelector('.cfg-onboarding-desc')?.value.trim() || '';
        const image = row.querySelector('.cfg-onboarding-image')?.value.trim() || '';
        onboardingSlides.push({ title, desc, image });
      });
      return onboardingSlides;
    }

    function adminAddOnboardingSlide() {
      const slides = getOnboardingSlidesFromDOM();
      slides.push({
        title: 'New Onboarding Slide',
        desc: 'Describe what this new feature or service offers to users.',
        image: ''
      });
      SITE_CONFIG.onboardingSlides = slides;
      renderAdminConfig(document.getElementById('adminTabContent'));
      showToast('New slide added — click "Save Slides" to save changes ✓');
    }

    function adminRemoveOnboardingSlide(index) {
      const slides = getOnboardingSlidesFromDOM();
      if (slides.length <= 1) {
        showToast('At least 1 onboarding slide is required');
        return;
      }
      slides.splice(index, 1);
      SITE_CONFIG.onboardingSlides = slides;
      renderAdminConfig(document.getElementById('adminTabContent'));
      showToast('Slide removed — click "Save Slides" to save changes ✓');
    }

    function adminMoveOnboardingSlide(index, dir) {
      const slides = getOnboardingSlidesFromDOM();
      const target = index + dir;
      if (target < 0 || target >= slides.length) return;
      const temp = slides[index];
      slides[index] = slides[target];
      slides[target] = temp;
      SITE_CONFIG.onboardingSlides = slides;
      renderAdminConfig(document.getElementById('adminTabContent'));
      showToast('Slide order updated — click "Save Slides" to save changes ✓');
    }

    async function saveAdminOnboardingSlides() {
      const onboardingSlides = getOnboardingSlidesFromDOM();
      SITE_CONFIG.onboardingSlides = onboardingSlides;
      await fsSaveConfig({
        onboardingSlides: onboardingSlides.length ? onboardingSlides : undefined
      });
      showToast('Onboarding slides saved ✓');
    }

    async function saveAdminConfig() {
      const onboardingSlides = getOnboardingSlidesFromDOM();

      await fsSaveConfig({
        tagline: document.getElementById('cfg_tagline').value.trim(),
        heroSub: document.getElementById('cfg_heroSub').value.trim(),
        showProductListing: document.getElementById('cfg_showProductListing').checked,
        maxSubCategories: parseInt(document.getElementById('cfg_maxSubCategories')?.value) || 3,
        showBusinessCanDeliver: document.getElementById('cfg_showBusinessCanDeliver').checked,
        businessCanDeliverLabel: document.getElementById('cfg_businessCanDeliverLabel').value.trim() || 'Will you be able to deliver within the society? *',
        fbUrl: document.getElementById('cfg_fbUrl').value.trim(),
        igUrl: document.getElementById('cfg_igUrl').value.trim(),
        ytUrl: document.getElementById('cfg_ytUrl').value.trim(),
        waNum: document.getElementById('cfg_waNum').value.trim(),
        mission: document.getElementById('cfg_mission').value.trim(),
        vision: document.getElementById('cfg_vision').value.trim(),
        whoCanJoin: document.getElementById('cfg_whoCanJoin').value.trim(),
        terms: document.getElementById('cfg_terms').value.trim(),
        returnPolicy: document.getElementById('cfg_returnPolicy').value.trim(),
        deliveryPolicy: document.getElementById('cfg_deliveryPolicy').value.trim(),
        privacy: document.getElementById('cfg_privacy').value.trim(),
        aboutUs: document.getElementById('cfg_aboutUs').value.trim(),
        ejsPublicKey: document.getElementById('cfg_ejsPublicKey').value.trim(),
        ejsServiceId: document.getElementById('cfg_ejsServiceId').value.trim(),
        ejsTemplateId: document.getElementById('cfg_ejsTemplateId').value.trim(),
        ejsOtpTemplateId: document.getElementById('cfg_ejsOtpTemplateId').value.trim(),
        ejsBusinessTemplateId: document.getElementById('cfg_ejsBusinessTemplateId').value.trim(),
        vnCustomerId: document.getElementById('cfg_vnCustomerId').value.trim(),
        vnEmail: document.getElementById('cfg_vnEmail').value.trim(),
        vnPassword: document.getElementById('cfg_vnPassword').value.trim(),
        gmapsApiKey: document.getElementById('cfg_gmapsApiKey').value.trim(),
        rzpKeyId: document.getElementById('cfg_rzpKeyId')?.value.trim() || '',
        rzpKeySecret: document.getElementById('cfg_rzpKeySecret')?.value.trim() || '',
        subMonthlyPrice: parseFloat(document.getElementById('cfg_subMonthlyPrice')?.value) || 499,
        subAnnualPrice: parseFloat(document.getElementById('cfg_subAnnualPrice')?.value) || 3999,
        onboardingSlides: onboardingSlides.length ? onboardingSlides : undefined
      });
      applyFooterLinks();
      renderGlobalProductBoxes();
      showToast('Config saved ✓');
    }

    function renderAdminAds(c) {
      const featured = SITE_CONFIG.featuredVendorIds || [];
      const adTypes = SITE_CONFIG.adTypes || {};
      c.innerHTML = `<div class="s-card">
    <div class="s-card-title"><i class="fa fa-rectangle-ad" style="color:var(--green)"></i> Ad Carousel — Featured Vendors & Distance Targeting</div>
    <p style="font-size:.82rem;color:var(--text-muted);margin-bottom:14px">Check vendors to feature in the top carousel. Choose <strong>Local (5 km)</strong> to restrict ads to nearby customers, or <strong>Global</strong> to display to all users across all locations.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px;max-height:55vh;overflow-y:auto;padding:4px">
      ${DATA.map(v => {
        const isChecked = featured.includes(v.id);
        const currentType = adTypes[v.id] || 'local';
        return `
          <div style="background:var(--cream);border-radius:10px;padding:10px 12px;border:1.5px solid ${isChecked ? 'var(--green)' : 'var(--border)'}">
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
              <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleAdVendor('${v.id}',this)" style="accent-color:var(--green)">
              <span style="font-size:.84rem;font-weight:700;color:var(--text)">${v.venture}</span>
            </label>
            ${isChecked ? `
              <div style="display:flex;gap:6px;margin-top:8px;padding-top:6px;border-top:1px dashed var(--border)">
                <button type="button" class="btn btn-xs ${currentType === 'local' ? 'btn-primary' : 'btn-ghost'}" onclick="setAdType('${v.id}','local')"><i class="fa fa-location-crosshairs"></i> Local (5 km)</button>
                <button type="button" class="btn btn-xs ${currentType === 'global' ? 'btn-primary' : 'btn-ghost'}" onclick="setAdType('${v.id}','global')"><i class="fa fa-globe"></i> Global</button>
              </div>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>
    <div class="modal-actions" style="margin-top:14px">
      <button class="btn btn-primary" onclick="saveAdSettings()"><i class="fa fa-save"></i> Save Ad Settings</button>
    </div>
  </div>`;
    }
    function setAdType(id, type) {
      if (!SITE_CONFIG.adTypes) SITE_CONFIG.adTypes = {};
      SITE_CONFIG.adTypes[id] = type;
      const c = document.getElementById('adminTabContent');
      if (c) renderAdminAds(c);
    }
    function toggleAdVendor(id, cb) {
      let f = SITE_CONFIG.featuredVendorIds || [];
      if (cb.checked) { if (!f.includes(id)) f.push(id); }
      else { f = f.filter(x => x !== id); }
      SITE_CONFIG.featuredVendorIds = f;
      const c = document.getElementById('adminTabContent');
      if (c) renderAdminAds(c);
    }
    async function saveAdSettings() {
      const ids = SITE_CONFIG.featuredVendorIds || [];
      const types = SITE_CONFIG.adTypes || {};
      await fsSaveConfig({ featuredVendorIds: ids, adTypes: types });
      if (typeof initAd === 'function') initAd();
      showToast(ids.length ? `Ad carousel updated — ${ids.length} vendor(s) featured ✓` : 'Ad carousel cleared — no ads will show');
    }

    async function renderAdminStats(c) {
      c.innerHTML = `<div class="s-card"><p style="color:var(--text-muted)"><i class="fa fa-spinner fa-spin"></i> Loading stats…</p></div>`;
      let statsMap = {};
      if (FB_READY && db) {
        try { const snap = await db.collection('stats').get(); snap.docs.forEach(d => { statsMap[d.id] = d.data(); }); } catch (e) { }
      }
      const rows = DATA.map(v => {
        const s = statsMap[v.id] || {};
        const views = Math.max(s.profileViews || 0, v._profileViews || 0);
        const orders = Math.max(s.orderClicks || 0, v._orderClicks || 0);
        const wa = Math.max(s.whatsappClicks || 0, v._whatsappClicks || 0);
        return { v, views, orders, wa };
      }).sort((a, b) => b.orders - a.orders);
      c.innerHTML = `<div class="s-card">
    <div class="s-card-title"><i class="fa fa-chart-bar" style="color:var(--green)"></i> Vendor Stats</div>
    <table class="menu-table">
      <thead><tr><th>Vendor</th><th>Profile Views</th><th>Order Clicks</th><th>WA Clicks</th></tr></thead>
      <tbody>${rows.map(r => `<tr>
        <td><strong>${r.v.venture}</strong><br><span style="font-size:.72rem;color:var(--text-muted)">${r.v.cat.split(',')[0]}</span></td>
        <td style="text-align:center">${r.views}</td>
        <td style="text-align:center;font-weight:700;color:${r.orders > 0 ? 'var(--green)' : 'var(--text-muted)'}">${r.orders}</td>
        <td style="text-align:center">${r.wa}</td>
      </tr>`).join('')}</tbody>
    </table>
  </div>`;
    }

    async function renderAdminCustomers(c) {
      c.innerHTML = `<div class="s-card"><p style="color:var(--text-muted)"><i class="fa fa-spinner fa-spin"></i> Loading customers…</p></div>`;
      if (!FB_READY || !db) { c.innerHTML = `<div class="s-card"><p style="color:var(--text-muted)">Firebase not configured.</p></div>`; return; }
      let customers = [], orderLogs = [];
      try {
        const [custSnap, orderSnap] = await Promise.all([
          db.collection('customers').get(),
          db.collection('order_logs').get()
        ]);
        customers = custSnap.docs.map(d => ({ ...d.data(), email: d.id }));
        orderLogs = orderSnap.docs.map(d => d.data());
      } catch (e) {
        c.innerHTML = `<div class="s-card"><p style="color:var(--danger)">Failed to load customers: ${e.message}</p></div>`;
        return;
      }
      const orderCountByEmail = {}, spendByEmail = {};
      orderLogs.forEach(o => {
        if (!o.customerEmail) return;
        orderCountByEmail[o.customerEmail] = (orderCountByEmail[o.customerEmail] || 0) + 1;
        spendByEmail[o.customerEmail] = (spendByEmail[o.customerEmail] || 0) + (o.total || 0);
      });
      customers.sort((a, b) => (orderCountByEmail[b.email] || 0) - (orderCountByEmail[a.email] || 0));
      c.innerHTML = `<div class="s-card">
    <div class="s-card-title"><i class="fa fa-address-book" style="color:var(--green)"></i> Registered Customers (${customers.length})</div>
    <table class="menu-table">
      <thead><tr><th>Name</th><th>Email</th><th>Mobile</th><th>Address</th><th>Orders</th><th>Total Spend</th></tr></thead>
      <tbody>${customers.length ? customers.map(cu => `<tr>
        <td style="font-weight:600">${esc(cu.name)}</td>
        <td>${esc(cu.email)}</td>
        <td>${esc(cu.mobile)}</td>
        <td style="font-size:.78rem">${esc(cu.address) || '—'}</td>
        <td style="text-align:center;font-weight:700;color:${(orderCountByEmail[cu.email] || 0) > 0 ? 'var(--green)' : 'var(--text-muted)'}">${orderCountByEmail[cu.email] || 0}</td>
        <td style="text-align:center">₹${spendByEmail[cu.email] || 0}</td>
      </tr>`).join('') : `<tr><td colspan="6" style="text-align:center;color:var(--text-muted)">No customers yet.</td></tr>`}</tbody>
    </table>
  </div>`;
    }

    /* ── Migration ── */
    async function migrateFromSeed() {
      if (!db) { showToast('Firebase not configured'); return; }

      const adminUid = window._adminUid || auth?.currentUser?.uid;
      if (!adminUid) {
        showToast('Firebase UID not found — log out of admin, then log back in with your Firebase email + password');
        return;
      }

      if (!confirm(`Migrate all ${SEED.length} vendors to Firestore?\nYour Firebase UID will be set as ownerUid on each vendor.`)) return;
      showToast('Migrating…');
      try {
        const chunks = [];
        for (let i = 0; i < SEED.length; i += 400) chunks.push(SEED.slice(i, i + 400));
        for (const chunk of chunks) {
          const batch = db.batch();
          chunk.forEach(item => {
            const ref = db.collection('vendors').doc(item.id);
            batch.set(ref, { ...item, menu: [], ownerUid: adminUid }, { merge: true });
          });
          await batch.commit();
        }
        const vendors = await fsLoadVendors();
        if (vendors) { DATA = vendors; saveData(DATA); renderAll(); }
        showToast(`Migrated ${SEED.length} vendors to Firestore ✓`);
        renderAdminOverview(document.getElementById('adminTabContent'));
      } catch (e) { showToast('Migration failed: ' + e.message); console.error(e); }
    }

    /* ═══════════ INIT ═══════════ */
    (async function init() {
      // Catch the case where the app is opened while already offline — no point waiting
      // on Firestore/geolocation calls that will just hang or fail.
      if (!navigator.onLine) { showNoInternetScreen(); hideLocationSplash(); }

      _setupHardwareBackButton();
      _setupPullToRefresh();

      initCustomSelect('f_category');
      initCustomSelect('f_subcategory');
      initCustomSelect('sr_category');
      initCustomSelect('sr_subcategory');

      // Load site config from Firestore, then rebuild carousel + society selector with fresh data.
      // Stored so detectSociety() can wait for it — gmapsApiKey and the full societies list only
      // exist in SITE_CONFIG once this resolves, and GPS can otherwise resolve first on a fast fix.
      window._configLoadPromise = fsLoadConfig().then(() => { applyFooterLinks(); buildSocietySelector(); renderAll(); renderGlobalProductBoxes(); if (typeof window.initAd === 'function') window.initAd(); }).catch(() => { });
      // Load approved reviews so tiles show ratings
      fsLoadApprovedReviews().then(() => renderAll()).catch(() => { });

      // Set up business auth listener
      setupBusinessAuth();

      // Initial render from localStorage / SEED
      buildTabs(); renderAll(); renderGlobalCategoryBoxes(); renderGlobalProductBoxes();

      // Update header buttons
      updatePanelTabs();

      // Restore persisted customer login (mobile OTP session)
      if (_restoredCustomerMobile) {
        fsLoadCustomerProfile(_restoredCustomerMobile).then(profile => {
          if (profile) { currentCustomer = profile; updatePanelTabs(); }
          else localStorage.removeItem('hb_customerMobile');
        });
      }

      // Start society detection (geo + dropdown)
      detectSociety();

      // Try Firestore first, then JSON fallback
      if (FB_READY && db) {
        try {
          const vendors = await fsLoadVendors();
          if (vendors && vendors.length) {
            DATA = vendors; saveData(DATA); renderAll(); renderGlobalProductBoxes();
            if (typeof initAd === 'function') initAd(); // rebuild carousel with fresh images
            return; // Firestore loaded — skip JSON fetch
          }
        } catch (e) { }
      }
      // JSON fallback (GitHub Pages)
      try {
        const res = await fetch('./catalogue-data.json?t=' + Date.now());
        if (res.ok) {
          const remote = await res.json();
          if (Array.isArray(remote) && remote.length) { DATA = remote; saveData(DATA); renderAll(); renderGlobalProductBoxes(); }
        }
      } catch (e) { }
    })();
  