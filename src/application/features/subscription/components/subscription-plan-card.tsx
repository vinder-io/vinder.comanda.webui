import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import { useSubscriptionForm } from "../hooks/use-subscription-form";

const styles = {
    card: "border-2 border-primary shadow-lg",
    cardContent: "space-y-6 p-6",
    planHeader: "text-center space-y-2",
    planName: "text-2xl font-semibold text-foreground",
    planPrice: "text-4xl font-bold text-primary",
    priceSubtext: "text-sm text-muted-foreground",
    featuresList: "space-y-3",
    featureItem: "flex items-center gap-3",
    featureIcon: "h-5 w-5 text-primary flex-shrink-0",
    featureText: "text-sm text-foreground",
    button: "w-full h-12 text-lg font-semibold",
    disclaimer: "text-center text-xs text-gray-400"
};

export function SubscriptionPlanCard() {
    const { isLoading, handleSubscribe } = useSubscriptionForm();

    const features = [
        "Gestão completa de cardápios",
        "Sistema de pedidos em tempo real",
        "Controle de estoque",
        "Relatórios e análises",
        "Suporte prioritário",
        "Atualizações gratuitas"
    ];

    return (
        <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
                <div className={styles.planHeader}>
                    <h2 className={styles.planName}>Plano Básico</h2>
                    <div>
                        <p className={styles.planPrice}>R$ 100</p>
                        <p className={styles.priceSubtext}>por mês</p>
                    </div>
                </div>

                <div className={styles.featuresList}>
                    {features.map((feature) => (
                        <div key={feature} className={styles.featureItem}>
                            <Check className={styles.featureIcon} />
                            <span className={styles.featureText}>{feature}</span>
                        </div>
                    ))}
                </div>

                <Button type="button" disabled={isLoading} onClick={handleSubscribe} className={styles.button}>
                    {isLoading ? "Processando..." : "Assinar agora"}
                </Button>

                <p className={styles.disclaimer}>
                    Você será redirecionado para finalizar o pagamento de forma segura
                </p>
            </CardContent>
        </Card>
    );
}
