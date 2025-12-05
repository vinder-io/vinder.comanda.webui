import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const styles = {
    wrapper: "flex justify-center items-center min-h-screen bg-background",
    container: "w-full max-w-md p-6",
    card: "border-0 shadow-lg",
    cardContent: "space-y-6 p-8 text-center",
    iconWrapper: "flex justify-center",
    icon: "h-20 w-20 text-green-500",
    title: "text-2xl font-semibold text-foreground",
    message: "text-muted-foreground",
    button: "w-full h-11"
};

export default function SubscriptionSuccessPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Card className={styles.card}>
                    <CardContent className={styles.cardContent}>
                        <div className={styles.iconWrapper}>
                            <CheckCircle className={styles.icon} />
                        </div>
                        <h1 className={styles.title}>Pagamento confirmado!</h1>
                        <p className={styles.message}>
                            Sua assinatura foi ativada com sucesso. Agora você tem acesso completo a todas as funcionalidades da plataforma.
                        </p>
                        <Button onClick={() => navigate("/dashboard")} className={styles.button}>
                            Ir para o Dashboard
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
