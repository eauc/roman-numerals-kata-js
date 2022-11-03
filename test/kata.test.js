const { expect } = require('chai');

describe('arabicToRoman', () => {
// Roman numerals use a set of symbols with fixed values.
// M C X I D L V

// Tally-like combinations of these fixed symbols correspond to the (placed) digits of Arabic numerals.
// MM CC XX II
// MMM CCC XXX III

// The numerals for 4 (IV) and 9 (IX) are written using "subtractive notation",[6] where the first symbol (I) is subtracted from the larger one (V, or X).
// Subtractive notation is also used for 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// IV IX XL XC CD CM


// A number containing two or more decimal digits is built by appending the Roman numeral equivalent for each, from highest to lowest, as in the following examples:
// DC	LX	VI
// DCC	LXX	VII
// DCCC	LXXX	VIII
// 39 = XXX + IX = XXXIX.
// 246 = CC + XL + VI = CCXLVI.
// 789 = DCC + LXXX + IX = DCCLXXXIX.
// 2421 = MM + CD + XX + I = MMCDXXI.

// Any missing place (represented by a zero in the place-value equivalent) is omitted, as in Latin (and English) speech:
// 160 = C + LX = CLX
// 207 = CC + VII = CCVII
// 1009 = M + IX = MIX
// 1066 = M + LX + VI = MLXVI[8][9]

// The largest number that can be represented in this notation is 3,999 (MMMCMXCIX).
});
