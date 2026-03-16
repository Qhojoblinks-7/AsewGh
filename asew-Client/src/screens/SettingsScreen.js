import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Phone, 
  Mail, 
  Lock, 
  Fingerprint, 
  Link, 
  MapPin, 
  Ruler, 
  Globe, 
  Bell, 
  Radio,
  Megaphone,
  Award,
  Shield,
  HelpCircle,
  Star
} from 'lucide-react-native';

import { SettingsGroup } from '../components/settings/SettingsGroup';
import { SettingsRow } from '../components/settings/SettingsRow';
import { LogisticsToggle } from '../components/settings/LogisticsToggle';
import { BottomSheet, BottomSheetOption, BottomSheetToggle } from '../components/settings/BottomSheet';

const CURRENCIES = ['GHS', 'USD', 'GBP', 'EUR', 'NGN'];

export default function SettingsScreen() {
  // Notification states
  const [orderPulse, setOrderPulse] = useState(true);
  const [liveAlerts, setLiveAlerts] = useState(true);
  const [marketing, setMarketing] = useState(false);
  
  // Logistics states
  const [useCm, setUseCm] = useState(false);
  const [currency, setCurrency] = useState('GHS');

  // Bottom sheet states
  const [activeSheet, setActiveSheet] = useState(null);
  const [biometricEnabled, setBiometricEnabled] = useState(true);

  const openSheet = (sheetName) => setActiveSheet(sheetName);
  const closeSheet = () => setActiveSheet(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Settings</Text>

        {/* Become a Pro Banner */}
        <TouchableOpacity 
          style={styles.proBanner} 
          onPress={() => openSheet('pro')}
          activeOpacity={0.8}
        >
          <View style={styles.proBannerContent}>
            <View style={styles.proBadge}>
              <Text style={styles.proBadgeText}>PRO</Text>
            </View>
            <View style={styles.proTextContainer}>
              <Text style={styles.proTitle}>Become a Pro</Text>
              <Text style={styles.proSubtitle}>Unlock exclusive features</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* 1. Account & Security */}
        <SettingsGroup title="Account & Security">
          <SettingsRow 
            icon={Phone}
            label="Phone Number"
            value="+233 50 123 4567"
            onPress={() => openSheet('phone')}
          />
          <SettingsRow 
            icon={Mail}
            label="Email"
            value="user@example.com"
            onPress={() => openSheet('email')}
          />
          <SettingsRow 
            icon={Lock}
            label="Password"
            value="••••••••"
            onPress={() => openSheet('password')}
          />
          <SettingsRow 
            icon={Fingerprint}
            label="Biometric Security"
            value={biometricEnabled ? "Face ID" : "Off"}
            onPress={() => openSheet('biometric')}
          />
          <SettingsRow 
            icon={Link}
            label="Connected Accounts"
            value="Google, Apple"
            onPress={() => openSheet('connected')}
          />
        </SettingsGroup>

        {/* 2. Logistics & Infrastructure */}
        <SettingsGroup title="Logistics & Infrastructure">
          <SettingsRow 
            icon={MapPin}
            label="Saved Addresses"
            value="2 saved"
            onPress={() => openSheet('addresses')}
          />
          <LogisticsToggle 
            icon={Ruler}
            label="Measurement Units"
            description="Display DNA in centimeters"
            value={useCm}
            onValueChange={setUseCm}
          />
          <SettingsRow 
            icon={Globe}
            label="Region / Currency"
            value={currency}
            onPress={() => openSheet('currency')}
          />
        </SettingsGroup>

        {/* 3. Notification Logic */}
        <SettingsGroup title="Notification Logic">
          <LogisticsToggle 
            icon={Bell}
            label="Order Pulse"
            description="Commission progress updates"
            value={orderPulse}
            onValueChange={setOrderPulse}
          />
          <LogisticsToggle 
            icon={Radio}
            label="Live Alerts"
            description="Your Artisans, Live notifications"
            value={liveAlerts}
            onValueChange={setLiveAlerts}
          />
          <LogisticsToggle 
            icon={Megaphone}
            label="Marketing"
            description="Curation Canvas suggestions"
            value={marketing}
            onValueChange={setMarketing}
          />
        </SettingsGroup>

        {/* 4. Legal & Transparency */}
        <SettingsGroup title="Legal & Transparency">
          <SettingsRow 
            icon={Award}
            label="GRA Certification"
            value="Verified"
            onPress={() => openSheet('gra')}
          />
          <SettingsRow 
            icon={Shield}
            label="Data Privacy"
            value="View policy"
            onPress={() => openSheet('privacy')}
          />
          <SettingsRow 
            icon={HelpCircle}
            label="Support"
            value="Get help"
            onPress={() => openSheet('support')}
          />
          <SettingsRow 
            icon={Star}
            label="Become an Asew Pro"
            value="For designers"
            onPress={() => openSheet('pro')}
          />
        </SettingsGroup>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appVersion}>Asew v1.0.0</Text>
          <Text style={styles.copyright}>© 2024 Asew. All rights reserved.</Text>
        </View>
      </ScrollView>

      {/* Bottom Sheets */}
      
      {/* Phone Number Sheet */}
      <BottomSheet visible={activeSheet === 'phone'} onClose={closeSheet} title="Phone Number">
        <BottomSheetOption label="Current Number" value="+233 50 123 4567" showChevron={false} />
        <BottomSheetOption label="Change Number" value="" onPress={() => {}} />
      </BottomSheet>

      {/* Email Sheet */}
      <BottomSheet visible={activeSheet === 'email'} onClose={closeSheet} title="Email">
        <BottomSheetOption label="Current Email" value="user@example.com" showChevron={false} />
        <BottomSheetOption label="Change Email" value="" onPress={() => {}} />
      </BottomSheet>

      {/* Password Sheet */}
      <BottomSheet visible={activeSheet === 'password'} onClose={closeSheet} title="Password">
        <BottomSheetOption label="Change Password" value="" onPress={() => {}} />
        <BottomSheetOption label="Forgot Password" value="" onPress={() => {}} />
      </BottomSheet>

      {/* Biometric Sheet */}
      <BottomSheet visible={activeSheet === 'biometric'} onClose={closeSheet} title="Biometric Security">
        <BottomSheetToggle 
          label="Face ID / Fingerprint" 
          value={biometricEnabled} 
          onValueChange={setBiometricEnabled} 
        />
        <Text style={styles.sheetNote}>Use biometric authentication for secure payments</Text>
      </BottomSheet>

      {/* Connected Accounts Sheet */}
      <BottomSheet visible={activeSheet === 'connected'} onClose={closeSheet} title="Connected Accounts">
        <BottomSheetOption label="Google" value="Connected" onPress={() => {}} />
        <BottomSheetOption label="Apple" value="Connected" onPress={() => {}} />
        <BottomSheetOption label="Add Account" value="" onPress={() => {}} />
      </BottomSheet>

      {/* Addresses Sheet */}
      <BottomSheet visible={activeSheet === 'addresses'} onClose={closeSheet} title="Saved Addresses">
        <BottomSheetOption label="Home" value="GA-123-4567" onPress={() => {}} />
        <BottomSheetOption label="Work" value="GA-987-6543" onPress={() => {}} />
        <BottomSheetOption label="Add New Address" value="" onPress={() => {}} />
      </BottomSheet>

      {/* Currency Sheet */}
      <BottomSheet visible={activeSheet === 'currency'} onClose={closeSheet} title="Currency">
        {CURRENCIES.map((curr) => (
          <BottomSheetOption 
            key={curr} 
            label={curr} 
            value={curr === currency ? '✓' : ''}
            onPress={() => setCurrency(curr)} 
          />
        ))}
      </BottomSheet>

      {/* GRA Certification Sheet */}
      <BottomSheet visible={activeSheet === 'gra'} onClose={closeSheet} title="GRA Certification">
        <View style={styles.infoContent}>
          <Award color="#34C759" size={48} />
          <Text style={styles.infoTitle}>Verified</Text>
          <Text style={styles.infoText}>Your business is registered with Ghana Revenue Authority</Text>
          <Text style={styles.infoDetail}>Tax ID: GRA-2024-123456</Text>
        </View>
      </BottomSheet>

      {/* Privacy Sheet */}
      <BottomSheet visible={activeSheet === 'privacy'} onClose={closeSheet} title="Data Privacy">
        <View style={styles.infoContent}>
          <Shield color="#007AFF" size={48} />
          <Text style={styles.infoTitle}>Your Data is Secure</Text>
          <Text style={styles.infoText}>Your DNA measurements are encrypted and only shared with your consent.</Text>
          <Text style={styles.infoDetail}>All artisan data transfers use end-to-end encryption.</Text>
        </View>
      </BottomSheet>

      {/* Support Sheet */}
      <BottomSheet visible={activeSheet === 'support'} onClose={closeSheet} title="Support">
        <BottomSheetOption label="FAQs" value="" onPress={() => {}} />
        <BottomSheetOption label="Chat with Us" value="" onPress={() => {}} />
        <BottomSheetOption label="Email Support" value="support@asew.com" onPress={() => {}} />
        <BottomSheetOption label="Report a Bug" value="" onPress={() => {}} />
      </BottomSheet>

      {/* Become Pro Sheet */}
      <BottomSheet visible={activeSheet === 'pro'} onClose={closeSheet} title="Asew Pro">
        <View style={styles.infoContent}>
          <Star color="#FF9500" size={48} />
          <Text style={styles.infoTitle}>Go Pro</Text>
          <Text style={styles.infoText}>Unlock exclusive features for designers:</Text>
          <Text style={styles.proFeature}>• Verified badge</Text>
          <Text style={styles.proFeature}>• Priority placement</Text>
          <Text style={styles.proFeature}>• Analytics dashboard</Text>
          <Text style={styles.proFeature}>• Custom storefront</Text>
          <TouchableOpacity style={styles.proButton}>
            <Text style={styles.proButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  container: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#000',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  proBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 24,
  },
  proBannerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  proBadge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 14,
  },
  proBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  proTextContainer: {
    flex: 1,
  },
  proTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  proSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
  appInfo: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 40,
  },
  appVersion: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
  },
  copyright: {
    fontSize: 12,
    color: '#C7C7CC',
    marginTop: 4,
  },
  sheetNote: {
    fontSize: 13,
    color: '#8E8E93',
    textAlign: 'center',
    marginTop: 16,
    paddingHorizontal: 20,
  },
  infoContent: {
    alignItems: 'center',
    padding: 24,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginTop: 16,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  infoDetail: {
    fontSize: 13,
    color: '#8E8E93',
    textAlign: 'center',
    marginTop: 12,
  },
  proFeature: {
    fontSize: 15,
    color: '#666',
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  proButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 24,
  },
  proButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
