import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material"

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoNovoCarregando?: boolean;
    aoClicarEmNovo?: () => void;

    mostrarBotaoVoltar?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    aoClicarEmVoltar?: () => void;

    mostrarBotaoApagar?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    aoClicarEmApagar?: () => void;

    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    aoClicarEmSalvar?: () => void;

    mostrarBotaoSalvarEFerchar?: boolean;
    mostrarBotaoSalvarEFercharCarregando?: boolean;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    mostrarBotaoNovo = true,
    mostrarBotaoNovoCarregando = false,
    textoBotaoNovo = 'Novo',
    aoClicarEmNovo,

    mostrarBotaoVoltar = true,
    mostrarBotaoVoltarCarregando = false,
    aoClicarEmVoltar,

    mostrarBotaoApagar = true,
    mostrarBotaoApagarCarregando = false,
    aoClicarEmApagar,

    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarCarregando = false,
    aoClicarEmSalvar,

    mostrarBotaoSalvarEFerchar = false,
    mostrarBotaoSalvarEFercharCarregando = false,
    aoClicarEmSalvarEFechar,

}) => {

    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
                <Button
                    color="primary"
                    variant="contained"
                    disableElevation
                    startIcon={<Icon>save</Icon>}
                    onClick={aoClicarEmSalvar}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Salvar
                    </Typography>
                </Button>
            )}

            {(
                mostrarBotaoSalvarCarregando &&
                <Skeleton width={110} height={62} />
            )}

            {(mostrarBotaoSalvarEFerchar && !mostrarBotaoSalvarEFercharCarregando && !smDown && !mdDown) && (
                <Button
                    color="primary"
                    variant="outlined"
                    disableElevation
                    startIcon={<Icon>save</Icon>}
                    onClick={aoClicarEmSalvarEFechar}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Salvar e voltar
                    </Typography>

                </Button>
            )}

            {((mostrarBotaoSalvarEFercharCarregando && !smDown && !mdDown) &&
                <Skeleton width={180} height={60} />
            )}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
                <Button
                    color="primary"
                    variant="outlined"
                    disableElevation
                    startIcon={<Icon>delete</Icon>}
                    onClick={aoClicarEmApagar}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Apagar
                    </Typography>

                </Button>
            )}

            {(mostrarBotaoApagarCarregando &&
                <Skeleton width={110} height={60} />
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (
                <Button
                    color="primary"
                    variant="outlined"
                    disableElevation
                    startIcon={<Icon>add</Icon>}
                    onClick={aoClicarEmNovo}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        {textoBotaoNovo}
                    </Typography>
                </Button>
            )}

            {((mostrarBotaoNovoCarregando && !smDown) &&
                <Skeleton width={110} height={60} />
            )}

            {(
                mostrarBotaoVoltar &&
                (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFerchar)
            ) &&
                (
                    <Divider variant="middle" orientation="vertical" />
                )}

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
                <Button
                    color="primary"
                    variant="outlined"
                    disableElevation
                    endIcon={<Icon>arrow_back</Icon>}
                    onClick={aoClicarEmVoltar}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Voltar
                    </Typography>
                </Button>
            )}

            {(mostrarBotaoVoltarCarregando &&
                <Skeleton width={110} height={60} />
            )}
        </Box>
    )
}