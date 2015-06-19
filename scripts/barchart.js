var distances = [2.23, 2.39, 2.59, 2.77]

d3.select('body').selectAll('div')
	.data(distances)
	.enter()
		.append('div')
		.style('width', function (d) { return (d * 120) + 'px'; })
		.text(function (d) { return d + ' miles'; });