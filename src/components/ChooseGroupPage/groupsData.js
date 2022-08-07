export default [
	{
		name: "ფიზიკური პირი",
      children: [
         'საცალო გაყიდვები',
         'ფასდაკლება',
         'ონლაინ საიტზე შეძენა',
         'წვრილმანი ტექნიკა',
         'Tax free',
         'ონლაინ საბანკო გადარიცხვა'
      ]
	},
	{
		name: "იურიდიული პირი",
		subCategoryCount: 3,
      children: [
         'ორგანიზაციები',
         'დღგ-სგან განთავისუფლებულები',
         'დიპლომატი'
      ]
	},
	{
		name: "დიპლომატი",
		href: "/start-creating-invoice?group=დიპლომატი",
		subCategoryCount: 3,
		bgColor: "bg-pink-600",
      children: []
	}
];