import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
    aoMudarTextoDeBusca,
    mostrarInputBusca = false,
    textoDaBusca = "",
    aoClicarEmNovo,
    mostrarBotaoNovo = true,
    textoBotaoNovo = "Novo",
}) => {

    const theme = useTheme();

    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            component={Paper}
        >
            {mostrarInputBusca && (
                <TextField
                    size="small"
                    placeholder="Pesquisar"
                    value={textoDaBusca}
                    onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
                />
            )}

            <Box flex={1} display="flex" justifyContent="end">
                {(mostrarBotaoNovo &&
                    <Button
                        color="primary"
                        variant="contained"
                        disableElevation
                        onClick={aoClicarEmNovo}
                        endIcon={<Icon>add</Icon>}
                    >
                        {textoBotaoNovo}
                    </Button>
                )}
            </Box>
        </Box>
    );
}