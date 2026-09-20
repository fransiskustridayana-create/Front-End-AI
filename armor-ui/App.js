import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  // State untuk menyimpan tab yang sedang aktif ('home', 'identity', 'requests', 'settings')
  const [activeTab, setActiveTab] = useState('home');

  // 1. SCREEN 6: DASHBOARD HOME
  const renderHomeScreen = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ARMOR</Text>
        <Text style={styles.bellIcon}>🔔</Text>
      </View>

      <View style={styles.statusCard}>
        <View style={styles.shieldBadge}>
          <Text style={styles.shieldIcon}>🛡️</Text>
        </View>
        <Text style={styles.statusTitle}>YOUR IDENTITY IS PROTECTED</Text>
        
        <View style={styles.userBadge}>
          <Text style={styles.userText}>ARMOR ID: USER-001</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Identity Lock</Text>
          <Text style={styles.activeTag}>ACTIVE</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Consent Control</Text>
          <Text style={styles.activeTag}>ACTIVE</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>AI Risk Analysis</Text>
          <Text style={styles.activeTag}>ACTIVE</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>AI Safety Gateway</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.buttonText}>Protect Content</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  // 2. SCREEN 2: IDENTITY ENROLLMENT
  const renderIdentityScreen = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>IDENTITY ENROLLMENT</Text>
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.screenTitle}>Protect Your Identity</Text>
        <Text style={styles.subTitle}>Face Enrollment System</Text>

        {/* Scan Frame Simulation */}
        <View style={styles.faceScanBox}>
          <Text style={styles.faceIcon}>👤</Text>
        </View>

        <Text style={styles.scanInstruction}>Look directly at camera</Text>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Start Scan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  // 3. SCREEN 9: CONSENT REQUEST
  const renderRequestsScreen = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CONSENT REQUEST</Text>
      </View>

      <View style={[styles.statusCard, { borderColor: '#EF4444' }]}>
        <Text style={{ fontSize: 40, marginBottom: 10 }}>⚠️</Text>
        <Text style={[styles.statusTitle, { color: '#EF4444' }]}>CONSENT REQUIRED</Text>
        <Text style={styles.subTitle}>Someone wants to use your identity</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Purpose</Text>
          <Text style={{ color: '#FFF' }}>Commercial Ad</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Risk Level</Text>
          <Text style={{ color: '#EF4444', fontWeight: 'bold' }}>HIGH RISK</Text>
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#EF4444' }]}>
            <Text style={styles.buttonText}>Deny</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#10B981' }]}>
            <Text style={styles.buttonText}>Allow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  // 4. SCREEN 5: PERMISSION CENTER
  const renderSettingsScreen = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PERMISSION CENTER</Text>
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.screenTitle}>IDENTITY PERMISSION</Text>

        {[
          { name: 'Photo Editing', status: 'ALLOW', color: '#10B981' },
          { name: 'Video Generation', status: 'ALLOW', color: '#10B981' },
          { name: 'Face Transformation', status: 'REVIEW', color: '#F59E0B' },
          { name: 'Voice Cloning', status: 'DENY', color: '#EF4444' },
          { name: 'Commercial Use', status: 'REVIEW', color: '#F59E0B' },
        ].map((item, index) => (
          <View key={index} style={styles.infoRow}>
            <Text style={styles.infoLabel}>{item.name}</Text>
            <Text style={{ color: item.color, fontWeight: 'bold' }}>{item.status}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Tampilkan screen berdasarkan tab yang dipilih */}
      {activeTab === 'home' && renderHomeScreen()}
      {activeTab === 'identity' && renderIdentityScreen()}
      {activeTab === 'requests' && renderRequestsScreen()}
      {activeTab === 'settings' && renderSettingsScreen()}

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('home')}>
          <Text style={activeTab === 'home' ? styles.navIconActive : styles.navIcon}>🏠</Text>
          <Text style={activeTab === 'home' ? styles.navLabelActive : styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('identity')}>
          <Text style={activeTab === 'identity' ? styles.navIconActive : styles.navIcon}>🪪</Text>
          <Text style={activeTab === 'identity' ? styles.navLabelActive : styles.navLabel}>Identity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('requests')}>
          <Text style={activeTab === 'requests' ? styles.navIconActive : styles.navIcon}>📩</Text>
          <Text style={activeTab === 'requests' ? styles.navLabelActive : styles.navLabel}>Requests</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('settings')}>
          <Text style={activeTab === 'settings' ? styles.navIconActive : styles.navIcon}>⚙️</Text>
          <Text style={activeTab === 'settings' ? styles.navLabelActive : styles.navLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F17',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 90,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  bellIcon: {
    fontSize: 20,
  },
  statusCard: {
    backgroundColor: '#131A26',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  shieldBadge: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#10B981',
  },
  shieldIcon: {
    fontSize: 32,
  },
  statusTitle: {
    color: '#10B981',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  screenTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subTitle: {
    color: '#94A3B8',
    fontSize: 13,
    marginBottom: 20,
  },
  userBadge: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 20,
  },
  userText: {
    color: '#94A3B8',
    fontSize: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1E293B',
  },
  infoLabel: {
    color: '#CBD5E1',
    fontSize: 14,
  },
  activeTag: {
    color: '#10B981',
    fontWeight: 'bold',
    fontSize: 12,
  },
  faceScanBox: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#0B0F17',
  },
  faceIcon: {
    fontSize: 60,
  },
  scanInstruction: {
    color: '#64748B',
    fontSize: 12,
    marginBottom: 20,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  actionBtn: {
    flex: 0.48,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  secondaryButton: {
    backgroundColor: '#4F46E5',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#131A26',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 18,
    opacity: 0.4,
  },
  navIconActive: {
    fontSize: 20,
  },
  navLabel: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 2,
  },
  navLabelActive: {
    color: '#2563EB',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 2,
  },
});