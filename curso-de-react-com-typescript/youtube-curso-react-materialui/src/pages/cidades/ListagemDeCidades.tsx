import { useEffect, useMemo, useState } from "react"
import { Icon, IconButton, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material"
import { useNavigate, useSearchParams } from "react-router-dom"

import { LayoutBaseDePagina } from "../../shared/layouts"
import { FerramentasDaListagem } from "../../shared/components"
import { IListagemCidade, CidadesService } from "../../shared/services/api/cidades/CidadesService"
import { useDebounce } from "../../shared/hooks"
import { Environment } from "../../shared/environment"

export const ListagemDeCidades: React.FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const { debounce } = useDebounce();
    const navigate = useNavigate();

    const [rows, setRows] = useState<IListagemCidade[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);

    const pagina = useMemo(() => {
        return Number(searchParams.get('pagina') || 1);
    }, [searchParams]);

    useEffect(() => {
        setIsLoading(true);

        debounce(() => {
            CidadesService.getAll(pagina, busca)
                .then((result) => {
                    setIsLoading(false);

                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        console.log(result);
                        setTotalCount(result.totalCount);
                        setRows(result.data);
                    }
                });
        })
    }, [busca, pagina, totalCount]);

    const handleDelete = (id: number) => {
        if (confirm("Realmente deseja apagar?")) {
            CidadesService.deleteById(id)
                .then(result => {
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        setRows(oldRows => {
                            return [
                                ...oldRows.filter(oldRow => oldRow.id !== id)
                            ]
                        });
                        setTotalCount(totalCount-1);
                        alert("Registro apagado com sucesso")
                    }
                });
        }
    }

    return (
        <LayoutBaseDePagina
            titulo="Listagem de cidades"
            barraDeFerramentas={(
                <FerramentasDaListagem
                    mostrarInputBusca
                    textoBotaoNovo="Nova"
                    textoDaBusca={busca}
                    aoClicarEmNovo={() => navigate("/cidades/detalhe/nova")}
                    aoMudarTextoDeBusca={e =>
                        setSearchParams({ busca: e, pagina: '1' }, { replace: true })
                    }
                />
            )}
        >
            <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: "auto" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell width={100}>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.nome}</TableCell>
                                <TableCell>
                                    <IconButton size="small" onClick={() => handleDelete(row.id)}>
                                        <Icon>delete</Icon>
                                    </IconButton>
                                    <IconButton size="small" onClick={() => navigate(`/cidades/detalhe/${row.id}`)}>
                                        <Icon>edit</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    {totalCount === 0 && !isLoading && (
                        <caption>{Environment.LISTAGEM_VAZIA}</caption>
                    )}

                    <TableFooter>
                        {isLoading && (
                            <TableRow>
                                <TableCell colSpan={3}>
                                    <LinearProgress variant="indeterminate" />
                                </TableCell>
                            </TableRow>
                        )}
                        {(totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS) && (
                            <TableRow>
                                <TableCell colSpan={3}>
                                    <Pagination
                                        page={pagina}
                                        count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)}
                                        onChange={(_, newPage) => setSearchParams({ busca, pagina: newPage.toString() })}
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableFooter>
                </Table>
            </TableContainer>
        </LayoutBaseDePagina>
    )
}