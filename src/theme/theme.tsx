import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		//type: prefersDarkMode ? "dark" : "light",
		primary: {
			main: '#11CEAA',
			light: '#64ffdc',
			dark: '#009c7b',
			contrastText: '#263238',
		},
		secondary: {
			main: blueGrey[900], //#263238
			light: '#4f5b62',
			dark: '#000a12',
			contrastText: '#fff',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
	typography: {
		fontFamily: 'Roboto, sans-serif',
	},
	spacing: 4,
	overrides: {
		MuiTypography: {
			body2: {
				fontWeight: 500,
				fontSize: '0.80rem',
			},
			subtitle2: {
				fontWeight: 500,
			},
			body1: {
				fontSize: '0.80rem',
			},
		},
		MuiTableCell: {
			head: {
				fontWeight: 500,
				fontSize: '0.85rem',
				lineHeight: 'normal',
			},
			root: {
				padding: '4px 16px 4px 24px',
			},
		},
		MuiTableRow: {
			head: {
				height: 48,
			},
			root: {
				height: 40,
			},
		},
		MuiMenuItem: {
			root: {
				minHeight: '24px',
				// lineHeight: '20px'
				lineHeight: 'normal',
			},
		},
		MuiListItem: {
			root: {
				paddingTop: '8px',
				paddingBottom: '8px',
			},
		},
		MuiButton: {
			root: {
				minHeight: '32px',
				fontSize: '0.80rem',
				padding: '4px 20px',
				minWidth: '45px',
				borderRadius: '6px',
				//boxShadow: 'none !important',
				margin: '0 8px',
				lineHeight: 'normal',
			},
		},
		MuiInputBase: {
			root: {
				fontSize: '0.9rem',
				// lineHeight: '1.35'
				lineHeight: 'normal',
			},
		},
		MuiFormLabel: {
			root: {
				fontSize: '0.9rem',
				// lineHeight: '1.35'
				lineHeight: 'normal',
			},
		},
		MuiListItemText: {
			root: {
				padding: '0px 0px',
			},
		},
		MuiIconButton: {
			root: {
				padding: 6,
			},
			colorInherit: {
				color: '#FFF',
			},
		},
		MuiTablePagination: {
			toolbar: {
				height: 48,
				minHeight: 48,
			},
		},
		MuiPaper: {
			root: {
				position: 'relative',
				overflow: 'auto',
				flex: 1,
			},
		},
		MuiDialogContent: {
			root: {
				position: 'relative',
				firstChild: {
					paddingTop: 0,
				},
			},
		},
		MuiDialog: {
			paper: {
				position: 'relative',
			},
		},
	},
});

export default theme;
