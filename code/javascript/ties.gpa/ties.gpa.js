var t=0;
var c=0;
function getGradeValue(grade) {
	switch(grade) {
		case 'A':return 4.00;
		case 'A-':return 3.67;
		case 'B+':return 3.33;
		case 'B':return 3.00;
		case 'B-':return 2.67;
		case 'C+': return 2.33;
		case 'C':return 2.00;
		case 'C-':return 1.67;
		case 'D+':return 1.33;
		case 'D':return 1.00;
		case 'D-':return 0.67;
		case 'F':return 0.00;
	}
}

$('.grade-letter a').each(function () {
	c++; 
	t+= getGradeValue($(this).text());
});

alert('GPA = ' + t/c);
void(0);