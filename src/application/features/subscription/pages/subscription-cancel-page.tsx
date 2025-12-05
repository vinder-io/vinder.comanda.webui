import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

const styles = {
    wrapper: "flex justify-center items-center min-h-screen bg-background",
    container: "w-full max-w-md p-6",
    card: "border-0 shadow-lg",
    cardContent: "space-y-6 p-8 text-center",
    iconWrapper: "flex justify-center",
    icon: "h-20 w-20 text-red-500",
    title: "text-2xl font-semibold text-foreground",
    message: "text-muted-foreground",
    buttonsWrapper: "space-y-3",
    button: "w-full h-11"
};

export default function SubscriptionCancelPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Card className={styles.card}>
                    <CardContent className={styles.cardContent}>
                        <div className={styles.iconWrapper}>
                            <XCircle className={styles.icon} />
                        </div>
                        <h1 className={styles.title}>Pagamento cancelado</h1>
                        <p className={styles.message}>
                            Não se preocupe! Você pode tentar novamente quando quiser. Estamos aqui para ajudar caso precise de suporte.
                        </p>
                        <div className={styles.buttonsWrapper}>
                            <Button onClick={() => navigate(-1)} className={styles.button}>
                                Tentar novamente
                            </Button>
                            <Button variant="outline" onClick={() => navigate("/")} className={styles.button}>
                                Voltar ao início
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
