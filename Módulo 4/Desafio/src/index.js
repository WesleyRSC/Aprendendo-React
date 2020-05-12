const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {

	const selectedProducts = selectProductsById(ids,productsList);
	// console.log(selectedProducts);
	const itens= mapProducts(selectedProducts);
	const category=agroupByCategory(selectedProducts);
	// console.log(category);
	let qnttCategories = category.size;
	let promo=promotions[qnttCategories-1];
	const promotionalPrice = getPromotionalPrice(selectedProducts,promo);
	//console.log(promotionalPrice);
	const totalPrice = getTotalPrice(selectedProducts);
	//console.log(totalPrice);
	const discountValue = getDiscountValue(totalPrice,promotionalPrice).toFixed(2);
	const discountPercent = getDiscountPercent(totalPrice,promotionalPrice).toFixed(2);
	//console.log(itens);


	return {
		"products": itens,
		"promotion": promo,
		"totalPrice": promotionalPrice,
		"discountValue":  discountValue,
		"discount": `${discountPercent}%`
	};
}

function selectProductsById(ids,productsList) {
	return productsList.filter((product) => ids.includes(product.id));
}

function mapProducts(selectedProducts) {
	return selectedProducts.map((produto) => ({
		name: produto.name,
		category: produto.category
	}));
}

function agroupByCategory(selectedProducts) {
	return selectedProducts.reduce((acc,product) =>{
		return acc.add(product.category);
	}, new Set());
}

function getPromotionalPrice(selectedProducts,promo) {
	return selectedProducts.reduce((acc, product) => {
		let isPromotional = product.promotions.find( promotion => promotion.looks.includes(promo));
		let price=0;
		if (isPromotional) {
			price = isPromotional.price;
		}
		else{
			price = product.regularPrice;
		}
		return acc += price;
	}, 0).toFixed(2);
}

function getTotalPrice(selectedProducts) {
	return selectedProducts.reduce((acc,product) => {
		return acc += product.regularPrice;
	}, 0).toFixed(2);
}

function getDiscountValue(totalPrice,promotionalPrice) {
	return totalPrice-promotionalPrice;
}

function getDiscountPercent(totalPrice,promotionalPrice) {
	return (totalPrice-promotionalPrice)/totalPrice*100;
}


module.exports = { getShoppingCart };
