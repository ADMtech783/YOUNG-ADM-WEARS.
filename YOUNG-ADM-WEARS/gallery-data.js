const galleryItems = [
  { id: 'g001', name: 'Premium Wear Clothing — Style 1', image: 'AD1.jpg', category: 'clothes', price: 19.999 },
  { id: 'g002', name: 'Premium Wristwatch — Style 1', image: 'watch1.jpg', category: 'watches', price: 29.999 },
  { id: 'g003', name: 'Handmade Footwear — Style 1', image: 'shoe22.jpg', category: 'footwear', price: 39.999 },
  { id: 'g004', name: 'Premium Wear Bag — Style 1', image: 'bag1.jpg', category: 'bags', price: 49.999 },

   { id: 'g005', name: 'Premium Wear Clothing — Style 2', image: 'AD2.jpg', category: 'clothes', price: 19.999 },
  { id: 'g006', name: 'Premium Wristwatch — Style 2', image: 'watch2.jpg', category: 'watches', price: 29.999 },
  { id: 'g007', name: 'Handmade Footwear — Style 2', image: 'shoe23.jpg', category: 'footwear', price: 39.999 },
  { id: 'g008', name: 'Premium Wear Bag — Style 2', image: 'bag2.jpg', category: 'bags', price: 49.999 },

   { id: 'g009', name: 'Premium Wear Clothing — Style 3', image: 'AD3.jpg', category: 'clothes', price: 19.999 },
  { id: 'g010', name: 'Premium Wristwatch — Style 3', image: 'watch3.jpg', category: 'watches', price: 29.999 },
  { id: 'g011', name: 'Handmade Footwear — Style 3', image: 'shoe21.jpg', category: 'footwear', price: 39.999 },
  { id: 'g012', name: 'Premium Wear Bag — Style 3', image: 'bag3.jpg', category: 'bags', price: 49.999 },

   { id: 'g013', name: 'Premium Wear Clothing — Style 4', image: 'AD4.jpg', category: 'clothes', price: 19.999 },
  { id: 'g014', name: 'Premium Wristwatch — Style 4', image: 'watch4.jpg', category: 'watches', price: 29.999 },
  { id: 'g015', name: 'Handmade Footwear — Style 4', image: 'shoe20.jpg', category: 'footwear', price: 39.999 },
  { id: 'g016', name: 'Premium Wear Bag — Style 4', image: 'bag4.jpg', category: 'bags', price: 49.999 },

   { id: 'g017', name: 'Premium Wear Clothing — Style 5', image: 'AD6.jpg', category: 'clothes', price: 19.999 },
  { id: 'g018', name: 'Premium Wristwatch — Style 5', image: 'watch5.jpg', category: 'watches', price: 29.999 },
  { id: 'g019', name: 'Handmade Footwear — Style 5', image: 'shoe19.jpg', category: 'footwear', price: 39.999 },
  { id: 'g020', name: 'Premium Wear Bag — Style 5', image: 'bag5.jpg', category: 'bags', price: 49.999 },

  { id: 'g021', name: 'Premium Wear Clothing — Style 6', image: 'AD9.jpg', category: 'clothes', price: 19.999 },
  { id: 'g022', name: 'Premium Wristwatch — Style 6', image: 'watch6.jpg', category: 'watches', price: 29.999 },
  { id: 'g023', name: 'Handmade Footwear — Style 6', image: 'shoe13.jpg', category: 'footwear', price: 39.999 },
  { id: 'g024', name: 'Premium Wear Bag — Style 6', image: 'bag6.jpg', category: 'bags', price: 49.999 },

  { id: 'g025', name: 'Premium Wear Clothing — Style 7', image: 'AD10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g026', name: 'Premium Wristwatch — Style 7', image: 'watch7.jpg', category: 'watches', price: 29.999 },
  { id: 'g027', name: 'Handmade Footwear — Style 7', image: 'shoe12.jpg', category: 'footwear', price: 39.999 },
  { id: 'g028', name: 'Premium Wear Bag — Style 7', image: 'bag7.jpg', category: 'bags', price: 49.999 },

  { id: 'g029', name: 'Premium Wear Clothing — Style 8', image: 'AD11.jpg', category: 'clothes', price: 19.999 },
  { id: 'g030', name: 'Premium Wristwatch — Style 8', image: 'watch8.jpg', category: 'watches', price: 29.999 },
  { id: 'g031', name: 'Handmade Footwear — Style 8', image: 'shoe11.jpg', category: 'footwear', price: 39.999 },
  { id: 'g032', name: 'Premium Wear Bag — Style 8', image: 'bag8.jpg', category: 'bags', price: 49.999 },

  { id: 'g033', name: 'Premium Wear Clothing — Style 9', image: 'AD13.jpg', category: 'clothes', price: 19.999 },
  { id: 'g034', name: 'Premium Wristwatch — Style 9', image: 'watch9.jpg', category: 'watches', price: 29.999 },
  { id: 'g035', name: 'Handmade Footwear — Style 9', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g036', name: 'Premium Wear Bag — Style 9', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g037', name: 'Premium Wear Clothing — Style 10', image: 'ADD1.jpg', category: 'clothes', price: 19.999 },
  { id: 'g038', name: 'Premium Wristwatch — Style 10', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g039', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g040', name: 'Premium Wear Bag — Style 9', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g041', name: 'Premium Wear Clothing — Style 10', image: 'ADD2.jpg', category: 'clothes', price: 19.999 },
  { id: 'g042', name: 'Premium Wristwatch — Style 10', image: 'watch9.jpg', category: 'watches', price: 29.999 },
  { id: 'g043', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g044', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g045', name: 'Premium Wear Clothing — Style 11', image: 'ADD3.jpg', category: 'clothes', price: 19.999 },
  { id: 'g046', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g047', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g048', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g049', name: 'Premium Wear Clothing — Style 11', image: 'ADD4.jpg', category: 'clothes', price: 19.999 },
  { id: 'g050', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g051', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g052', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g053', name: 'Premium Wear Clothing — Style 11', image: 'ADD5.jpg', category: 'clothes', price: 19.999 },
  { id: 'g054', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g055', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g056', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g057', name: 'Premium Wear Clothing — Style 11', image: 'wears10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g058', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g059', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g060', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g061', name: 'Premium Wear Clothing — Style 11', image: 'wears10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g062', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g063', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g064', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g065', name: 'Premium Wear Clothing — Style 11', image: 'wears10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g066', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g067', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g068', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g069', name: 'Premium Wear Clothing — Style 11', image: 'wears10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g070', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g071', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g072', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g073', name: 'Premium Wear Clothing — Style 11', image: 'wears10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g074', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g075', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g076', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g077', name: 'Premium Wear Clothing — Style 11', image: 'wears10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g078', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g079', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g080', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g081', name: 'Premium Wear Clothing — Style 11', image: 'wears10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g082', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g083', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g084', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g085', name: 'Premium Wear Clothing — Style 11', image: 'wears10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g086', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g087', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g088', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g089', name: 'Premium Wear Clothing — Style 11', image: 'wears10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g090', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g091', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g092', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g093', name: 'Premium Wear Clothing — Style 11', image: 'wears10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g094', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g095', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g096', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 

  { id: 'g097', name: 'Premium Wear Clothing — Style 11', image: 'wears10.jpg', category: 'clothes', price: 19.999 },
  { id: 'g098', name: 'Premium Wristwatch — Style 11', image: 'watch10.jpg', category: 'watches', price: 29.999 },
  { id: 'g099', name: 'Handmade Footwear — Style 11', image: 'shoe7.jpg', category: 'footwear', price: 39.999 },
  { id: 'g0100', name: 'Premium Wear Bag — Style 11', image: 'bag9.jpg', category: 'bags', price: 49.999 }, 




  // Keep adding entries in this same shape as you add real photos.
  // id must be unique for every photo (g005, g006, g007...).
  // image should point to your actual photo filename once you have it.
];