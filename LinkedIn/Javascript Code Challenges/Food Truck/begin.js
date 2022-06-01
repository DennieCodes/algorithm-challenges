/*
  WRITE YOUR SOLUTION HERE
*/

const menu = (comboMenu) => {
	const menuList = document.getElementById('combined-menu');
	const menuSet = new Set();

	// Iterate through and place the values in Sets
	for (let menu of comboMenu) {
		menu.length === 1
			? menuSet.add(menu[0])
			: menu.forEach((item) => menuSet.add(item));
	}
	// alt. let flatMenus = comboMenu.flat();

	for (let item of menuSet) {
		const menuItem = document.createElement('li');
		menuItem.textContent = item;
		menuList.appendChild(menuItem);
	}
};

menu([['Tacos', 'Burgers'], ['Pizza'], ['Burgers', 'Fries']]);
