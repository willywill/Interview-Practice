/*
	Write a join that gives the item id, item name, quantity, individual item cost, and cost of all of the quantity of each item.
	Only include items that have a quantity more than 1. Order the results by most to least quantity.
*/

select i.ITEM_ID, i.ITEM_NAME, inv.INVENTORY_COUNT as 'Quantity', p.PRICE as 'Cost', (p.PRICE * inv.INVENTORY_COUNT) as 'Total Cost'
	from ITEMS i (nolock)
	INNER JOIN PRICES p (nolock)
	ON i.ITEM_ID = p.ITEM_ID
	INNER JOIN INVENTORY inv (nolock)
	ON inv.INVENTORY_ID = i.INVENTORY_ID
		where 'Quantity' > '1'
			order by Quantity desc
