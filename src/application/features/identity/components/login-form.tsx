import { Card, CardContent } from "@/components/ui/card"
import { User, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useLoginForm } from "../hooks/use-login-form"

const styles = {
    card: "border-0 shadow-none",
    cardHeader: "text-center pb-8",
    cardTitle: "text-2xl font-normal text-foreground",
    cardContent: "space-y-6",
    form: "space-y-4",
    fieldWrapper: "space-y-2",
    label: "text-sm text-muted-foreground",
    userIcon: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground text-primary",
    inputUsername: "h-11 pl-10",
    inputPassword: "h-11 pr-10 [&::-ms-reveal]:hidden [&::-ms-clear]:hidden",
    passwordToggle: "absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-primary hover:text-primary/70 transition-colors",
    button: "w-full h-11 mt-6 select-none"
};

export function LoginForm() {
    const { username, setUsername, password, setPassword, showPassword, togglePasswordVisibility, isLoading, handleSubmit } = useLoginForm();

    return (
        <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.fieldWrapper}>
                        <Label htmlFor="username" className={styles.label}>Email</Label>
                        <div className="relative">
                            <User className={styles.userIcon} />
                            <Input id="username" type="text" value={username} disabled={isLoading}
                                onChange={(event) => setUsername(event.target.value)} className={styles.inputUsername} required />
                        </div>
                    </div>

                    <div className={styles.fieldWrapper}>
                        <Label htmlFor="password" className={styles.label}>Senha</Label>
                        <div className="relative">
                            <Input id="password" type={showPassword ? "text" : "password"} value={password} disabled={isLoading}
                                onChange={(event) => setPassword(event.target.value)} className={styles.inputPassword} required />

                            <button type="button" onClick={togglePasswordVisibility} disabled={isLoading} className={styles.passwordToggle}>
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    <Button type="submit" disabled={isLoading} className={styles.button}>
                        {isLoading ? "Carregando..." : "Entrar"}
                    </Button>

                    <p className="text-center mt-4 text-gray-500 text-xs">
                        Não possui uma conta?{" "}
                        <span className="text-primary underline cursor-pointer">
                            Crie uma conta
                        </span>
                    </p>

                    <p className="text-center mt-2 text-gray-400 text-xs">
                        Não compartilhe sua senha com ninguém. Somos responsáveis pela segurança da sua conta.
                    </p>
                </form>

            </CardContent>
        </Card>
    );
}
