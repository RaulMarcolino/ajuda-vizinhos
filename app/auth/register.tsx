import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const Register = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    console.log(name);
    console.log(email);
    console.log(tel);
    console.log(password);

    const response = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        telephone: tel,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      Alert.alert("Cadastro realizado com sucesso!");
      router.push("/(tabs)/home");
    } else {
      Alert.alert("Erro ao cadastrar motorista:", data);
    }
  };

  return (
    <View style={styles.container}>
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <FontAwesome5 name="hands-helping" size={32} color="white" />
            </View>
            <Text style={styles.title}>Vizinho Amigo</Text>
            <Text style={styles.subtitle}>Conectando vizinhos para ajudar uns aos outros</Text>
          </View>
    
          <View style={styles.form}>
            <Text style={styles.label}>Nome</Text>
            <View style={styles.inputContainer}>
              <FontAwesome name="user" size={16} color="#888" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                placeholderTextColor={"#888"}
                onChangeText={(txt) => setName(txt)} value={name}
              />
            </View>

            <Text style={styles.label}>E-mail</Text>
            <View style={styles.inputContainer}>
              <FontAwesome name="envelope" size={16} color="#888" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="seu@email.com"
                placeholderTextColor={"#888"}
                onChangeText={(txt) => setEmail(txt)} value={email}
              />
            </View>

            <Text style={styles.label}>Telefone</Text>
            <View style={styles.inputContainer}>
              <FontAwesome name="phone" size={16} color="#888" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="(99) 99999-9999"
                placeholderTextColor={"#888"}
                keyboardType="phone-pad"
                onChangeText={(txt) => setTel(txt)} value={tel}
              />
            </View>

            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputContainer}>
              <FontAwesome name="lock" size={16} color="#888" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={"#888"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={16} color="#888" />
              </TouchableOpacity>
            </View>
    
            <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Cadastrar</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 20,
    justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoCircle: {
    backgroundColor: '#4f46e5',
    padding: 20,
    borderRadius: 50,
    marginBottom: 10,
  },
  registerTitle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 5,
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
  },
  icon: {
    marginRight: 8,
  },
  button: {
    backgroundColor: '#4f46e5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  }
});
export default Register;
