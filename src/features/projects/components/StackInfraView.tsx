"use client";

import { motion } from "framer-motion";
import { TechBadge } from "@/components/ui/TechBadge";
import { INFRA_DATA } from "../data/infra.data";

export function StackInfraView() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col divide-y divide-primary/30"
        >
            {INFRA_DATA.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-10">

                    {/* Título y Stack */}
                    <div className="md:col-span-5 flex flex-col items-start gap-6">
                        <h4 className="text-strong text-primary uppercase">{item.title}</h4>
                        <div className="flex flex-wrap gap-2">
                            {item.techKeys.map((key) => (
                                <TechBadge key={key} techKey={key} />
                            ))}
                        </div>
                    </div>

                    {/* Descripción (Con borde lateral en desktop) */}
                    <div className="md:col-span-7 flex items-center">
                        <p className="text-primary leading-relaxed md:border-l border-primary/30 md:pl-8 text-base">
                            {item.description}
                        </p>
                    </div>

                </div>
            ))}
        </motion.div>
    );
}