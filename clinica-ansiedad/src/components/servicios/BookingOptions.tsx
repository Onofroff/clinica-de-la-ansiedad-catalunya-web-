"use client";
import { motion } from "framer-motion";
import { Card, CardBody } from '@heroui/react';
import { Calendar, MonitorSmartphone, MapPin } from 'lucide-react';
import { bookingUrl } from '@/lib/constants';
import { useLocale } from 'next-intl';

export default function BookingOptions() {
    const ca = useLocale() === 'ca';
    return (
        <section className="py-20 bg-cream/30">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                        {ca ? 'Reserva la teva cita' : 'Reserva tu cita'}
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-navy font-bold mb-6">
                        {ca ? 'Comença el teu procés terapèutic' : 'Comienza tu proceso terapéutico'}
                    </h2>
                    <div className="w-16 h-1 bg-sage mx-auto mb-6"></div>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        {ca ? "Tria la modalitat que millor s'adapti a la teva situació. Oferim el mateix rigor clínic i la mateixa atenció personalitzada tant al nostre centre com a distància." : 'Elige la modalidad que mejor se adapte a tu situación. Ofrecemos el mismo rigor clínico y atención personalizada tanto en nuestro centro como a distancia.'}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Presencial */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border border-navy/10 shadow-glass bg-white hover:border-gold/30 transition-colors">
                            <CardBody className="p-8 md:p-12 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <h3 className="font-serif text-2xl text-navy font-bold mb-4">{ca ? 'Consulta presencial' : 'Consulta Presencial'}</h3>
                                <p className="text-text/80 mb-6 flex-grow">
                                    {ca ? 'Atenció directa a la nostra clínica de Canet de Mar, al Maresme. Un espai segur, tranquil i confidencial, pensat per treballar des de la proximitat personal.' : 'Atención directa en nuestra clínica de Canet de Mar, en el Maresme (Catalunya). Un espacio seguro, tranquilo y confidencial, diseñado para trabajar desde la cercanía personal.'}
                                </p>
                                <div className="space-y-4 mb-8 text-sm text-text/70">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-gold" />
                                        <span>{ca ? 'De dilluns a divendres amb cita prèvia' : 'Lunes a Viernes con cita previa'}</span>
                                    </div>
                                </div>
                                <a
                                    href={bookingUrl('booking-options-presencial')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-block text-center bg-navy text-white font-medium rounded-xl py-4 hover:bg-navy/90 transition-all shadow-md cursor-pointer"
                                >
                                    {ca ? 'Reservar presencial' : 'Reservar Presencial'}
                                </a>
                            </CardBody>
                        </Card>
                    </motion.div>

                    {/* Online */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border border-navy/10 shadow-glass bg-white hover:border-gold/30 transition-colors">
                            <CardBody className="p-8 md:p-12 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                                    <MonitorSmartphone className="w-8 h-8" />
                                </div>
                                <h3 className="font-serif text-2xl text-navy font-bold mb-4">{ca ? 'Teràpia en línia' : 'Terapia Online'}</h3>
                                <p className="text-text/80 mb-6 flex-grow">
                                    {ca ? 'Des de qualsevol lloc del món. El mateix procés clínic i el mateix rigor que la teràpia presencial, adaptat al teu ritme de vida i horaris mitjançant videotrucada o atenció telefònica.' : 'Desde cualquier lugar del mundo. El mismo proceso clínico y rigor que la terapia presencial, adaptado a tu ritmo de vida y horarios mediante videollamada o atención telefónica.'}
                                </p>
                                <div className="space-y-4 mb-8 text-sm text-text/70">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-gold" />
                                        <span>{ca ? 'Horaris flexibles adaptats a la teva zona horària' : 'Horarios flexibles adaptados a tu zona horaria'}</span>
                                    </div>
                                </div>
                                <a
                                    href={bookingUrl('booking-options-online')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-block text-center bg-navy text-white font-medium rounded-xl py-4 hover:bg-navy/90 transition-all shadow-md cursor-pointer"
                                >
                                    {ca ? 'Reservar en línia' : 'Reservar Online'}
                                </a>
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
