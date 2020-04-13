import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOverrides: ThemeOptions = {
	typography: {
		fontFamily: ['NotoSansGujarati', 'NotoSans'].join(', '),
		fontSize: 14
	},
	palette: {
		primary: {
			main: '#3F51B5'
		},
		secondary: {
			main: '#eea849'
		},
		error: {
			main: '#f44336'
		}
	},
	overrides: {
		MuiToolbar: {
			regular: {
				height: '32px',
				minHeight: '32px',
				'@media (min-width: 600px)': {
					minHeight: '48px'
				}
			}
		},
		MuiAppBar: {
			colorPrimary: {
				backgroundColor: '#00BFA5'
				//background: 'linear-gradient(to right, #00BFA5, #60CF98)'
			}
		},
		MuiTypography: {
			caption: {
				lineHeight: 'normal'
			},
			h6: {
				fontWeight: 500,
				lineHeight: 'normal'
			},
			h5: {
				fontWeight: 500,
				lineHeight: 'normal'
			},
			h4: {
				fontWeight: 500,
				lineHeight: 'normal'
			},
			body2: {
				fontWeight: 500,
				//fontSize: '0.80rem',
				lineHeight: 'normal'
			},
			subtitle2: {
				fontWeight: 500,
				lineHeight: 'normal'
			},
			subtitle1: {
				lineHeight: 'normal'
			},
			body1: {
				fontSize: '0.80rem',
				lineHeight: 'normal'
			},
			colorTextSecondary: {
				color: '#74808a'
			}
		},
		MuiTableCell: {
			head: {
				fontWeight: 500,
				fontSize: '0.85rem',
				lineHeight: 'normal',
				fontFamily: ['Ubuntu', 'NotoSans'].join(', ')
			},
			root: {
				padding: '4px 24px 4px 24px'
			}
		},
		MuiTableRow: {
			head: {
				height: 36
			},
			root: {
				height: 40
			}
		},
		MuiMenuItem: {
			root: {
				minHeight: '24px',
				// lineHeight: '20px'
				lineHeight: 'normal'
			}
		},
		MuiListItem: {
			root: {
				paddingTop: '8px',
				paddingBottom: '8px'
			}
		},
		MuiStepIcon: {
			active: {
				color: '#0D47A1 !important'
			},
			completed: {
				color: '#43a047 !important'
			},
			text: {
				fill: '#fff !important'
			}
		},
		MuiButton: {
			root: {
				minHeight: '32px',
				fontSize: '0.80rem',
				padding: '4px 20px',
				minWidth: '45px',
				borderRadius: '6px',
				boxShadow: 'none !important',
				margin: '0 8px',
				lineHeight: 'normal',
				fontFamily: 'Ubuntu',
				fontWeight: 400
			},
			// disabled: {
			// 	color: 'rgba(0, 0, 0, 0.26)',
			// 	boxShadow: 'none',
			// 	backgroundColor: 'rgba(0, 0, 0, 0.12)',
			// 	background: 'none'
			// },
			containedSecondary: {
				backgroundColor: '#eea849'
				//background: 'linear-gradient(to right, #eea849, #f46b45)'
			},
			containedPrimary: {
				backgroundColor: '#B06AB3',
				background: 'linear-gradient(to right, #B06AB3, #4568DC)'
			}
		},
		MuiSelect: {
			select: {
				//fontWeight: 500
			}
		},
		MuiIconButton: {
			root: {
				padding: 6
			},
			colorInherit: {
				color: '#FFF'
			}
		},
		MuiInputBase: {
			root: {
				fontSize: '0.9rem',
				// lineHeight: '1.35'
				lineHeight: 'normal'
			}
		},
		MuiFormLabel: {
			root: {
				fontSize: '0.9rem',
				// lineHeight: '1.35'
				lineHeight: 'normal'
			}
		},
		MuiListItemText: {
			root: {
				padding: '0px 0px'
			}
		},
		MuiTablePagination: {
			toolbar: {
				height: 48,
				minHeight: 48
			}
		},
		MuiPaper: {
			root: {
				position: 'relative',
				overflow: 'auto',
				flex: 1
			}
		},
		MuiDialogTitle: {
			root: {
				padding: '8px 8px'
			}
		},
		MuiDialogContent: {
			root: {
				position: 'relative',
				padding: '0px 16px 16px 16px'
			}
		},
		MuiDialog: {
			paper: {
				position: 'relative'
			}
		}
	}
};
