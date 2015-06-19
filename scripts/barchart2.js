var distances = [2.23, 2.39, 2.59, 2.77, 3.05];

d3.select('body').selectAll('div')
	.data(distances)
	.enter()
		.append('div')
		.html('...')
		.style('width', '10px')
		.style('opacity', 0)
		.transition()
			.delay(function (d, i) { return i * 1000 })
			.duration(1000)
			.style('width', function (d) { return (d * 150) + 'px'; })
			.style('opacity', 1)
			.text(function (d) { return d + ' miles'; });