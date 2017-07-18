function getTriangleArea(a, h) {
	if (a <= 0) {
		console.log('Nieprawidłowe dane');
	}

	if (h <= 0) {
		console.log('Nieprawidłowe dane');
	}

	else {
		return a*h/2;
	}
}
	console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(22, 30),
	triangle3Area = getTriangleArea(100, 15);

	console.log( triangle1Area, triangle2Area, triangle3Area );