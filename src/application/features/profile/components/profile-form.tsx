import { Card, CardContent } from "@/components/ui/card"
import { User, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useProfileForm } from "../hooks/use-profile-form"

const styles = {
    card: "border-0 shadow-none",
    cardContent: "space-y-6",
    form: "space-y-4",
    fieldWrapper: "space-y-2",
    label: "text-sm text-muted-foreground",
    icon: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground text-primary",
    input: "h-11 pl-10",
    button: "w-full h-11 mt-6 select-none"
};

export function ProfileForm() {
    const { fullName, setFullName, phoneNumber, setPhoneNumber, isLoading, handleSubmit } = useProfileForm();

    return (
        <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.fieldWrapper}>
                        <Label htmlFor="fullName" className={styles.label}>Nome completo</Label>
                        <div className="relative">
                            <User className={styles.icon} />
                            <Input id="fullName" type="text" value={fullName} disabled={isLoading}
                                onChange={(event) => setFullName(event.target.value)} className={styles.input}
                                placeholder="João Silva" required />
                        </div>
                        <p className="text-xs text-muted-foreground">Digite seu nome completo</p>
                    </div>

                    <div className={styles.fieldWrapper}>
                        <Label htmlFor="phoneNumber" className={styles.label}>Telefone</Label>
                        <div className="relative">
                            <Phone className={styles.icon} />
                            <Input id="phoneNumber" type="tel" value={phoneNumber} disabled={isLoading}
                                onChange={(event) => setPhoneNumber(event.target.value)} className={styles.input}
                                placeholder="(11) 98765-4321" required />
                        </div>
                        <p className="text-xs text-muted-foreground">Número com DDD</p>
                    </div>

                    <Button type="submit" disabled={isLoading} className={styles.button}>
                        {isLoading ? "Criando perfil..." : "Finalizar cadastro"}
                    </Button>

                    <p className="text-center mt-4 text-gray-400 text-xs">
                        Seus dados estão seguros conosco e serão utilizados apenas para melhorar sua experiência.
                    </p>
                </form>
            </CardContent>
        </Card>
    );
}
